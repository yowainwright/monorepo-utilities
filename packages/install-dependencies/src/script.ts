
import { promisify } from "util";
import { exec } from 'child_process'
import { resolve } from 'path'
import { readFileSync } from 'fs-extra'

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
  // filter out any ignored dependencies
  const deps = hasDependencies ? dependencyNames.filter(dep => !ignore.includes(dep)).map(name => ({ name, version: dependencies[name] })) : [];
  const includeDeps = hasInclude ? includeNames.map(name => ({ name, version: include[name] })) : [];
  // mergeDeps with includeDeps taking the priority
  const mergedDeps = deps.filter(({ name }) => !includeDeps.map(({ name }) => name).includes(name)).concat(includeDeps);
  return mergedDeps;
}

export async function installDependencies({
  config,
  file = 'package.json',
  dest,
  debug = false,
  isTesting = false,
  exec = execPromise,
  hasLockfile = false,
  path = "./",
  runner = 'npm',
}: InstallDependenciesOptions) {
  const json = resolve(`${path}${file}`);
  const data = resolveJSON(json, debug);
  const { dependencies = {}, ideps } = data || {};
  const { ignore = [], include = {} } = config || ideps || installDependencies || {};
  const deps = depsToInstall({ dependencies, ignore, include });
  const depsString = deps.map(({ name, version }) => `${name}@${version}`).join(' ');
  if (debug) console.log('install-dependencies:debugging:', { deps, config, depsString });
  if (isTesting || deps.length < 1) return;
  await exec(`${runner} install ${dest ? `--prefix ${dest} ` : ' '}${depsString} -S --package-lock=${hasLockfile}`);
}

export default installDependencies;
