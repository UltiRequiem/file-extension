import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

import { extname } from "./mod.ts";

Deno.test("Test Default Exports", () => {
  assertEquals(extname("test.py"), ".py");

  assertEquals(extname({ path: "mod.ts", leadingPeriod: false }), "ts");

  assertEquals(extname({ path: "App.js", leadingPeriod: true }), ".js");
});
