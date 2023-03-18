import { algorithmA } from "../src/algorithmA.js";
import { describe, expect, test, jest } from "@jest/globals";

describe("algorithmA()", () => {
  test("should return correct, misplaced, and incorrect letters", () => {
    const wordFromUser = "sloer";
    const correctWord = "solen";

    const result = algorithmA(wordFromUser, correctWord);
    expect(result).toEqual([
      { S: "correct" },
      { L: "misplaced" },
      { O: "misplaced" },
      { E: "correct" },
      { R: "incorrect" },
    ]);
  });

  test("should show 'incorrect' if the guessedWord has on of them is correct and the other doesn't exist", () => {
    const wordFromUser = "solln";
    const correctWord = "solen";

    const result = algorithmA(wordFromUser, correctWord);

    expect(result).toEqual([
      { S: "correct" },
      { O: "correct" },
      { L: "correct" },
      { L: "incorrect" },
      { N: "correct" },
    ]);
  });

  test("should handle uppercase and lowercase", () => {
    const wordFromUser = "mAjS";
    const correctWord = "MaJs";

    const result = algorithmA(wordFromUser, correctWord);

    expect(result).toEqual([
      { M: "correct" },
      { A: "correct" },
      { J: "correct" },
      { S: "correct" },
    ]);
  });

  test("should handle letter to 'incorrect' if no match found", () => {
    const wordFromUser = "majs";
    const correctWord = "katt";

    const result = algorithmA(wordFromUser, correctWord);

    expect(result).toEqual([
      { M: "incorrect" },
      { A: "correct" },
      { J: "incorrect" },
      { S: "incorrect" },
    ]);
  });
});