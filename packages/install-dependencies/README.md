# @monorepo-utilities/install-dependencies 🧱 📦

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Fbuild-node-modules.svg)](https://badge.fury.io/js/%40monorepo-utilities%2build-node-modules)

Installs dependencies from a config to a destination with control.

---

## Install

```sh
yarn add @monorepo-utilities/build-node-modules
```

## Usage

As a CLI

```sh
install-dependencies run <config> <dest>
# => installs packages (node_modules) from a config (like package.json) to a specified path
```

As a function

```typescript
import { installDependencies } from '@monorepo-utilities/install-dependencies'

const dependencies = installDependencies({ <config>, <dest> })
// => installs dependencies from a package.json (<config>) to the specified destination (<dest>)
// => returns an object with installedDependencies, config, dest
```

## CLI API

```txt
  Usage
    $ install-dependencies <command> [options]

  Available Commands
    run    installs a package.json's dependencies to a specificied path

  For more info, run any command with the `--help` flag
    $ install-dependencies run --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message
```

## Arguments

- **`<config>`**: a string path to a config file (a package.json file)
- **`<path>`**: a string path to the desired destination of the installed dependencies

## Why

When using various project managers for monorepos, like [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [lerna](https://github.com/lerna/lerna), there are drawbacks in the Developer Experience (DX) versus deployment experience of module installation.

By manually providing a way to specifically install packages (node_modules) to a specified location, developors can enjoy [module hoisting](https://classic.yarnpkg.com/en/docs/workspaces/#toc-limitations-caveats) and [local package referencing](https://github.com/lerna/lerna/blob/main/utils/check-working-tree/package.json#L33) and **not** have to worry about what's in `node_modules` folders when deploying un-bundled node apps.

## Benefits

Listed below are a few benefits to using **install-dependencies**.

- Developer Experience (DX)
- Build deploys sizes
- Build deploys build times
- Deployment package security
- Deployment package debugging
- Deployment package versions

---

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
