
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

export function depsToInstall({ dependencies, ignore, include }) {
  const deps = Object.keys(dependencies).filter(dep => !ignore.includes(dep)).map(name => ({ name, version: dependencies[name] }));
  const mergedDeps = Object.keys(include).map(name => ({ name, version: include[name] })).concat(deps);
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
}: InstallDependenciesOptions) {
  const json = resolve(file);
  const data = resolveJSON(json, debug);
  const { dependencies = {}, ideps } = data || {};
  const { ignore = [], include = {} } = config || ideps || installDependencies || {};
  const deps = depsToInstall({ dependencies, ignore, include });
  const depsString = deps.map(({ name, version }) => `${name}@${version}`).join(' ');
  if (debug) console.log('install-dependencies:debugging:', { deps, config, depsString });
  if (isTesting) return;
  await exec(`npm install ${dest ? `--prefix ${dest} ` : ' '}${depsString} -S`);
}

export default installDependencies;
