import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.141.0/testing/asserts.ts";

import { _parsePath, extname } from "./mod.ts";

Deno.test("extname", () => {
  assertEquals(extname("test.py"), ".py");

  assertEquals(extname({ path: "mod.ts", leadingPeriod: false }), "ts");

  assertEquals(extname({ path: "App.js", leadingPeriod: true }), ".js");

  assertThrows(() => {
    extname({ path: "App", leadingPeriod: false });
  });

  assertEquals(extname({ path: "data.gz.arg", leadingPeriod: true }), ".arg");
});

Deno.test("_parsePath", () => {
  assertEquals(_parsePath("/path/to/file.ext"), {
    path: "/path/to/file.ext",
    leadingPeriod: true,
  });

  assertEquals(_parsePath({ path: "hey.txt", leadingPeriod: false }), {
    path: "hey.txt",
    leadingPeriod: false,
  });
});
