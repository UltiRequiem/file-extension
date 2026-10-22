# Get File Extension

[![npm](https://img.shields.io/npm/v/@ultirequiem/file-extension?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/file-extension)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/file-extension?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/file-extension)
[![CI](https://github.com/UltiRequiem/file-extension/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/file-extension/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/file-extension/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/file-extension)

Get the extension of a file.

> Ported from [Browserify](https://github.com/browserify/path-browserify) ❤

## Install

```sh
npm install @ultirequiem/file-extension
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { extname } from "@ultirequiem/file-extension";

extname("main.py"); // .py

extname({ path: "App.js", leadingPeriod: true }); // .js

extname({ path: "mod.ts", leadingPeriod: false }); // ts
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/file_extension/tags) 🏷️

## Licence

Licensed under the MIT License 📄
