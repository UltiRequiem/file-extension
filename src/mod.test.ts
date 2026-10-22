import { expect, it } from "vitest";

import { _parsePath, extname } from "./index.js";

it("extname", () => {
	expect(extname("test.py")).toEqual(".py");
	expect(extname("main/main.go")).toEqual(".go");

	expect(extname("../add_params/mod.ts")).toEqual(".ts");

	expect(extname({ path: "mod.ts", leadingPeriod: false })).toEqual("ts");

	expect(extname({ path: "App.js", leadingPeriod: true })).toEqual(".js");

	expect(() => {
		extname({ path: "/", leadingPeriod: false });
	}).toThrow();

	expect(() => {
		extname({ path: "tests/", leadingPeriod: false });
	}).toThrow();

	expect(() => {
		extname({ path: "App", leadingPeriod: false });
	}).toThrow();

	expect(extname({ path: "data.gz.arg", leadingPeriod: true })).toEqual(".arg");
});

it("_parsePath", () => {
	expect(_parsePath("/path/to/file.ext")).toEqual({
		path: "/path/to/file.ext",
		leadingPeriod: true,
	});

	expect(_parsePath({ path: "hey.txt", leadingPeriod: false })).toEqual({
		path: "hey.txt",
		leadingPeriod: false,
	});

	expect(() => {
		//@ts-ignore: Should throw
		_parsePath(34);
	}).toThrow();

	expect(() => {
		//@ts-ignore: Should throw
		_parsePath({});
	}).toThrow();

	expect(() => {
		//@ts-ignore: Should throw
		_parsePath({ leadingPeriod: false });
	}).toThrow();
});
