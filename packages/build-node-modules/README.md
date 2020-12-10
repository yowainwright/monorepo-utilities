# @monorepo-utilities/build-node-modules 🧱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Fbuild-node-modules.svg)](https://badge.fury.io/js/%40monorepo-utilities%2build-node-modules)

Build **node_modules** directories with control. 

---

## Install

```sh
yarn add @monorepo-utilities/build-node-modules
```

## Usage

```sh
build-node-modules <package.json>
```

## API

@TODO

## Why

When working with [monorepos](), particularly when using [yarn workspaces](), it is common to require building dependencies **exactly** as listed within a `package.json`. That's examctly what **build node modules does**!

**build node modules does** builds node_modules directly from `package.json` exactly as specified. No building with hoisted packages! No bloat! Just a simple dependencies install!

However, if desired you, specify package versions and packages can be specified with in the build!

---

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
