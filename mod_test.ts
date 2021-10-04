import { assertEquals } from "./test_deps.ts";

import template from "./mod.ts";

Deno.test("Test Default Exports", async () => {
  assertEquals(await template(), "Template");
});
