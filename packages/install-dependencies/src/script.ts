
import { promisify } from "util";
import { exec } from 'child_process'
import { resolve } from 'path'
import { readFileSync } from 'fs-extra'
import compare from "compare-versions";

import { InstallDependenciesOptions } from './types'

export const execPromise = promisify(exec);

export function resolveJSON(
  path: string,
  debug = false
) {
  try {
    const json = JSON.parse(readFileSync(path, "utf8"));
    return json;
  } catch (err) {
    if (debug) console.log(err);
    return;
  }
}

export function depsToInstall({ dependencies = {}, ignore = [], include = {} } = {}) {
  const dependencyNames = Object.keys(dependencies);
  const includeNames = Object.keys(include);
  const hasDependencies = dependencyNames.length > 0;
  const hasInclude = includeNames.length > 0;
  if (!hasDependencies && !hasInclude) return [];
  const deps = hasDependencies ? dependencyNames.filter(dep => !ignore.includes(dep)).map(name => ({ name, version: dependencies[name] })) : [];
  const includeDeps = hasInclude ? includeNames.map(name => ({ name, version: include[name] })) : [];
  const mergedDeps = includeDeps.concat(deps);
  return mergedDeps.filter((dep) => {
    const matches = mergedDeps.filter(item => item.name === dep.name)
    if (matches.length > 1) {
      const latestVersion = mergedDeps.filter(item => item.name === dep.name).map(({ version }) => version).sort(compare).reverse()[0];
      if (dep.version !== latestVersion) return null;
    }
    return dep;
  });
}

export async function installDependencies({
  config,
  file = 'package.json',
  dest,
  debug = false,
  isTesting = false,
  exec = execPromise,
  hasLockfile = false,
  runner = 'npm',
}: InstallDependenciesOptions) {
  const json = resolve(file);
  const data = resolveJSON(json, debug);
  const { dependencies = {}, ideps } = data || {};
  const { ignore = [], include = {} } = config || ideps || installDependencies || {};
  const deps = depsToInstall({ dependencies, ignore, include });
  const depsString = deps.map(({ name, version }) => `${name}@${version}`).join(' ');
  if (debug) console.log('install-dependencies:debugging:', { deps, config, depsString });
  if (isTesting || deps.length < 1) return;
  /**
   * @todo provide support for yarn/pnpm installs
   * @note yarn/pnpm installs won't respect their configured workspace
   */
  await exec(`${runner} install ${dest ? `--prefix ${dest} ` : ' '}${depsString} -S --package-lock=${hasLockfile}`);
}

export default installDependencies;
