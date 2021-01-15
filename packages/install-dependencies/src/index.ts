#!/usr/bin/env node

import sade from 'sade'
import { installDependencies } from './install-dependencies'
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

/**
 * installDependencies
 * @description the function that installs dependencies
 * --------------------------------
 * @summary function
 * This function works on it's own to install dependencies asynchonously
 */

const prog = sade('install-dependencies')

prog
  .version(pkg.version)
  .command('run <config> <dest>')
  .describe("installs a package.json's dependencies to a specificied path")
  .example('run package.json dist')
  .action((config, dest) => installDependencies({ config, debug: true, dest, process }))

prog.parse(process.argv)

export { installDependencies }
