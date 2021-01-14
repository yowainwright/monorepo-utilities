# @monorepo-utilities/install-dependencies 🧱 📦

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Fbuild-node-modules.svg)](https://badge.fury.io/js/%40monorepo-utilities%2build-node-modules)

Install `package.json` dependencies to a specificied paths with control.

---

## Install

```sh
yarn add @monorepo-utilities/build-node-modules
```

## Usage

```sh
install-dependencies <path>
```

## API

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

## Why

When using various project managers for monorepos, like yarn workspaces and lerna, there are drawbacks in the DX (Developer Experience) versus deployment experience of module installation.
By manually providing a way to specifically install `node_modules` to a specified location, developors can enjoy module hoisting and local package referencing and **not** have to worry about what's in `node_modules` folders when deploying un-bundled node apps.

---

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
