#!/usr/bin/env node

import sade from 'sade'
import { listPackagesByDirectory } from './list-packages-by-directory'
import pkg = require('../package.json')

const prog = sade('install-dependencies')

prog
  .version(pkg.version)
  .command('in <dir>')
  .describe("installs a package.json's dependencies to a specificied path")
  .example('run package.json dist')
  .action((dir) => listPackagesByDirectory({ directory: dir, process }))

prog.parse(process.argv)

export { listPackagesByDirectory }
