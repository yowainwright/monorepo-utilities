#!/usr/bin/env node

import sade from 'sade'
import * as fs from 'fs'
import { exec } from 'child_process'
import path from 'path'
import pkg = require('../package.json')

/**
 * @monorepo-utilities/install-dependencies 🧱
 * @description installs package.json dependencies to a specificied paths
 * --------------------------------
 * @summary Why?
 * When using various project managers, like yarn workspaces and lerna
 * there are drawbacks in the DX vs deployment experience of module installation
 * by manually providing a way to specifically install node_modules to a specified location
 * developors can enjoy module hoisting and local package referencing and not have to worry
 * about confusing nodule module folders when deploying un-bundled apps, node apps
 */
const prog = sade('install-dependencies')

prog
  .version(pkg.version)
  .command('run <config> <dest>')
  .describe("installs a package.json's dependencies to a specificied path")
  .example('run package.json dist')
  .action((config, dest) => {
    if (!config) {
      console.error({
        '@monorepo-utilities/install-dependencies:error:config': config,
      })
      process.exit(1)
    }
    /**
     * @note construct json to be read or exit the program
     */
    const configPath = path.resolve(process.cwd(), config)
    const configJson = fs.existsSync(configPath) ? fs.readFileSync(configPath).toString() : ''
    const jsonContent = JSON.parse(configJson)
    if (!jsonContent || typeof jsonContent !== 'object') {
      console.error({
        '@monorepo-utilities/install-dependencies:error:packageJsonContent': jsonContent,
      })
      process.exit(1)
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
    const filteredDependencyList = Object.entries(dependencies)
      .filter((dependency) => {
        const isIgnoredDependency: boolean = ignore.some((itemToIgnore: string) => dependency[0] === itemToIgnore)
        const isPriorityIncludedDependency: boolean = dependenciesToInclude.some(
          (dependencyToInclude) => dependency[0] === dependencyToInclude,
        )
        return !isIgnoredDependency && !isPriorityIncludedDependency
      })
      .map((dependency) => dependency.join('@'))
    const priorityDependencyList: string[] = Object.entries(include).map((dependency) => dependency.join('@'))
    const dependenciesToInstall = [...filteredDependencyList, ...priorityDependencyList]

    dependenciesToInstall.forEach((dependency) => exec(`npm install --prefix ${dest} ${dependency} -S`))
  })

prog.parse(process.argv)
