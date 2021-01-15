# Monorepo Utilities 🧱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

## Packages

Check out this projects Monorepo Utilities packages below!

| Package                                                                    | Utility                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@monorepo-utilities/install-dependencies](/packages/install-dependencies) | Installs exact packages (`node_modules`) to a specified path with control! The output of running/invoking this utility is a more exact, small(er), and secure `node_module` directory which assists in deploying unbundled node apps/services. |

---

## Glossary

Sectioned below, are descriptions and usages of each implemented Monorepo Utility.

---

### Install Dependencies 📦

**Install Dependencies** is a small function and CLI program assisting in installing package dependencies from a config (`package.json`) to a specified destination (in example, `/dist`). [Read more](/packages/install-dependencies#why).

This utility can greatly assist in monorepos developer experience (DX). Specifically, it can assist in building deploys where installing **exact** package dependencies can benefit deployment size and time. Also, it can ensure _more_ exact package installation for build package security, build package debugging, and specified build package versions.

#### Usage

```sh
install-dependencies run <config> <dest>
# => installs packages (node_modules) from a config (like package.json) to a specified path
```

---

## Cites

There are many great things to cite for monorepos, here are a few: [Lerna](https://github.com/lerna/lerna), [Monorepo-utils](https://github.com/azu/monorepo-utils), [monorepo-utils](https://github.com/azu/monorepo-utils), [bolt](https://github.com/boltpkg/bolt), [redwoodjs](https://redwoodjs.com/).
