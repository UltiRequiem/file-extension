import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

import { fileExtension } from "./mod.ts";

Deno.test("Test Default Exports", () => {
  assertEquals(fileExtension("test.py"), "py");
});
