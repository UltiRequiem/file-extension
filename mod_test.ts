import { assertEquals } from "./test_deps.ts";

import getFileExtension, { getFileExtensionSync } from "./mod.ts";

Deno.test("Test Default Exports", async () => {
  assertEquals(await getFileExtension("test.py"), "py");
});

Deno.test("Test getFileExtensionSync", () => {
  assertEquals(getFileExtensionSync("test.rs"), "rs");
});
