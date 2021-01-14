# Monorepo Utilities 🧱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

[Packages](#packages) | [Glossary](#glossary) | [Cites](#cites)

---

## Packages

The goal here is to make the goal there more attainable. Check out the utilities below!

| Package                                                                    | Utility                                     |
| -------------------------------------------------------------------------- | ------------------------------------------- |
| [@monorepo-utilities/install-dependencies](/packages/install-dependencies) | installs packages to a specified path |

---

## Glossary

Below are sectioned descriptions and usages of each implemented Monorepo Utility.

---

### Install Dependencies 📦

**Install Dependencies** is a small function and program assisting in installing package dependencies from a config to a specified destination. [Read more](/packages/install-dependencies#why). 

This utility can greatly assist in monorepos developer experience (DX). Specifically, it can assist in building deploys where installing **exact** package dependencies can benefit deployment size and time. Also, it can ensure _more_ exact package installation for build package security, build package debugging, and specified build package versions.

#### Usage

```sh
install-dependencies run <config> <dest>
# => installs packages (node_modules) from a config (like package.jsonto a specified path
```

---

## Cites

There are many great things to cite for monorepos, here are a few: [Lerna](https://github.com/lerna/lerna), [Monorepo-utils](https://github.com/azu/monorepo-utils).
