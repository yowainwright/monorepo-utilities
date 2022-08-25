#!/usr/bin/env node

import { program } from 'commander';
import { cosmiconfigSync } from "cosmiconfig";
import script from './script'
import { Options } from './types'
const version = "VERSION";

const explorer = cosmiconfigSync("ideps");

export async function action(options: Options = {}): Promise<void> {
  const result = options?.config
    ? explorer.load(options.config)
    : explorer.search();
  const { config = {} } = result || {};
  const { config: unusedConfig, isTestingCLI, ...rest } = options;
  if (isTestingCLI) {
    console.info({ options, config });
    return;
  }

  await script({ ...rest, config });
}

program
  .version(version)
  .option("-c, --config <config>", "config path")
  .option("--debug", "enables debug mode")
  .option("-d, --dest <string>", "dest path")
  .option('-f, --file <file>', 'path to package.json file')
  .option("--has-lockfile", "use lock file")
  .option("-t, --isTestingCLI", "enables CLI testing, no scripts are run")
  .option('--isTesting', "enables testing, no scripts are run")
  .option("-r, --runner <runner>", "npm, pnpm, or yarn")
  .action(action)
  .parse(process.argv);

export { program }
