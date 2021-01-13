#!/usr/bin/env node

import sade from 'sade'
import * as fs from 'fs-extra'
import execa from 'execa'
import path from 'path'
const pkg = require('../package.json')
const prog = sade('install-dependencies')

/**
 * install-dependencies 🧱
 * @description installed package.json dependencies to a specificied paths
 * --------------------------------
 * @summary Why?
 * When using various project managers, like yarn workspaces and lerna
 * there are drawbacks in the DX vs deployment experience of module installation
 * by manually providing a way to specifically install node_modules to a specified location
 * developors can enjoy module hoisting and local package referencing and not have to worry
 * about confusing nodule module folders when deploying un-bundled apps, node apps
 */
prog
  .version(pkg.version)
  .command('to <path>')
  .describe("installs a package.json's dependencies to a specificied path")
  .example('to dist')
  .option('--ignore, -i', 'ignore specific dependencies')
  .example('to dist --ignore [lodash, jquery]')
  .option('--include, -inc', 'include specific dependencies')
  .example('to dist --include .dependenciesrc')
  .action((path, opts) => {
    /**
     * @todo the whole thing
     */
    console.log(`> installing dependencies to ${path}`)
    console.log('> these are extra opts', opts)
  })

prog.parse(process.argv)
