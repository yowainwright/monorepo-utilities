import * as fs from 'fs'
import { exec } from 'child_process'
import path from 'path'

/**
  * installDependencies
  * @description the function that installs dependencies
  * --------------------------------
  * @summary function
  * This function works on it's own to install dependencies asynchonously
  */

export type InstallDependenciesOptions = {
  config: string;
  debug?: boolean;
  dest: string;
  process?: process | null;
}

export type InstalledDependencies = {
  deependenciesInstalled: string[];
  config: string;
  dest: string;
}

export function installDependencies async ({ config, dest, debug = false, process = null }: InstallDependenciesOptions): InstalledDependencies {
  if (!config) {
    if (debug) console.error({
      '@monorepo-utilities/install-dependencies:error:config': config,
    })
    if (process) process.exit(1)
  }
  /**
   * @note construct json to be read or exit the program
   */
  const configPath = path.resolve(process.cwd(), config)
  const configJson = fs.existsSync(configPath) ? fs.readFileSync(configPath).toString() : ''
  const jsonContent = JSON.parse(configJson)
  if (!jsonContent || typeof jsonContent !== 'object') {
    if (debug) console.error({
      '@monorepo-utilities/install-dependencies:error:packageJsonContent': jsonContent,
    })
    if (process) process.exit(1)
  }

  /**
   * Bread and butter 🍞 🧈
   * --------------------------------
   * @description construct a dependency list
   * 1. dependencies
   * 2. filter packages to be ignored
   * 3. spread in packages to include
   * --------------------------------
   * @note ignored packages may not have a version!
   * @note packages to include will override dependencies!
   */
  const { dependencies = {}, installDependencies: { ignore = [], include = {} } = {} } = jsonContent
  const dependenciesToInclude: string[] = Object.keys(include)
  const filteredDependencyList: string[] = Object.entries(dependencies)
      .filter((dependency) => {
        const isIgnoredDependency: boolean = ignore.some((itemToIgnore: string) => dependency[0] === itemToIgnore)
        const isPriorityIncludedDependency: boolean = dependenciesToInclude.some(
          (dependencyToInclude) => dependency[0] === dependencyToInclude,
        )
        return !isIgnoredDependency && !isPriorityIncludedDependency
      })
      .map((dependency) => dependency.join('@'))
  const priorityDependencyList: string[] = Object.entries(include).map((dependency) => dependency.join('@'))
  const dependenciesToInstall: string[] = [...filteredDependencyList, ...priorityDependencyList]

  await Promise.all(dependenciesToInstall.map(async(dependency: string) => await exec(`npm install --prefix ${dest} ${dependency} -S`))
  return {
    deependenciesInstalled: dependenciesToInstall,
    config,
    dest,
  }
}