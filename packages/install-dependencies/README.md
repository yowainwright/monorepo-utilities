# @monorepo-utilities/install-dependencies 🧱 📦

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Finstall-dependencies.svg)](https://www.npmjs.com/package/@monorepo-utilities/install-dependencies)

Installs dependencies from a config to a destination with control!

---

## Install

```sh
pnpm install @monorepo-utilities/install-dependencies
```

---

## Usage

As a CLI

```sh
install-deps
# => installs packages (node_modules) from a config (like package.json) to a specified path
```

---

## CLI API

```sh
Usage: install-deps [options]

Options:
  -V, --version          output the version number
  -c, --config <config>  config path
  --debug                enables debug mode
  -d, --dest <string>    dest path
  -f, --file <file>      path to package.json file
  --has-lockfile         use lock file
  --isTesting            enables testing, no scripts are run
  -r, --runner <runner>  npm, pnpm, or yarn
  -h, --help             display help for command
```

---

## Added Specificity Options

Within a config (`package.json`) an `installDependencies`, `ideps` object can optionally be added with an `ignore` array or an `include` object.

```ts
"installDependencies": {
  "include": {
    "react": "17.0.1",
    "@babel/core": "7.12.10",
    "typescript": "4.1.2"
  },
  "ignore": [
    "ramda"
  ]
}
```

## Why

When working in monorepo workspace, like [pnpm workspaces](https://pnpm.io/workspaces),
installing exact node_modules within a package can be difficult.

With `install-dependencies`, developers can enjoy [local package referencing](https://github.com/lerna/lerna/blob/main/utils/check-working-tree/package.json#L33) and exact `node_module` installing for things like deploying a node app.

## Roadmap

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
