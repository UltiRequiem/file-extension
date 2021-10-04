# Get File Extension

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-get-file-extension?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-get-file-extension/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/deno-get-file-extension/workflows/Lint/badge.svg)
![Test](https://github.com/UltiRequiem/deno-get-file-extension/workflows/Tests/badge.svg)

You can get this package by [nest.land](https://nest.land/package/get_file_extension),
[deno.land](https://deno.land/x/get_file_extension) or [denopkg](https://denopkg.com/UltiRequiem/deno-get-file-extension/mod.ts).

## Usage

This package exposes two Functions,
[sum](https://github.com/UltiRequiem/deno-get-file-extension/blob/main/mod.ts#L1) and
[sumSync](https://github.com/UltiRequiem/deno-get-file-extension/blob/main/mod.ts#L5).

```typescript
import getFileExtension, { getFileExtensionSync } from "https://deno.land/x/get_file_extension/mod.ts";

console.log(await getFileExtension("test.py")); // "py"

async function somethingAsync() {
  console.log(await getFileExtension("main.rs")); // "rs"
}

somethingAsync();

getFileExtension("README.md").then((ext) => console.log(ext)); // "md"

console.log(getFileExtensionSync("egg.json")); // "json"
```

### License

[This project](https://deno.land/x/get-file-extension) is licensed under the
[MIT License](./LICENSE.md).
