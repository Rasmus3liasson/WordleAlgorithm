import { describe, expect, test, jest } from "@jest/globals";

import { algorithmA } from "./index.js";

describe("test for algorithm A", () => {
  test("should return a random string containing 5 letters", () => {
    const result = algorithmA();
    expect(result).toEqual("hej");
  });
});
