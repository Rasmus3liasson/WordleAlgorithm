import { checkGuess } from "../src/checkGuess";
import { describe, expect, test } from "@jest/globals";

/* This is a unit-test to test the function that should handle the word that user
 have guessed to be in the correct word
 Since our function hasen't been implemented with another component at this moment,
 a unit-test is the way I can test that the function works as it should
 
 Below are test that i believe should cover all possible outcome depending of what
 the word from the user is.
 */

describe("checkGuess(wordFromUser, randomWord)", () => {
  test("should return correct, misplaced, and incorrect with the word given by the user", () => {
    const wordFromUser = "sloer";
    const correctWord = "solen";

    const result = checkGuess(wordFromUser, correctWord);
    expect(result).toEqual([
      { S: "correct" },
      { L: "misplaced" },
      { O: "misplaced" },
      { E: "correct" },
      { R: "incorrect" },
    ]);
  });
  test("should return correct, misplaced, and incorrect with the word given by the user", () => {
    const wordFromUser = "hallå";
    const correctWord = "cykla";

    const result = checkGuess(wordFromUser, correctWord);
    expect(result).toEqual([
      { H: "incorrect" },
      { A: "misplaced" },
      { L: "incorrect" },
      { L: "correct" },
      { Å: "incorrect" },
    ]);
  });

  test("should show 'incorrect' if the guessedWord has letters and one of them is correct and the other doesn't exist", () => {
    const wordFromUser = "solln";
    const correctWord = "solen";

    const result = checkGuess(wordFromUser, correctWord);

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

    const result = checkGuess(wordFromUser, correctWord);

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

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toEqual([
      { M: "incorrect" },
      { A: "correct" },
      { J: "incorrect" },
      { S: "incorrect" },
    ]);
  });
  test("keys should have correct if both words match", () => {
    const wordFromUser = "Pizza";
    const correctWord = "pizza";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toEqual([
      { P: "correct" },
      { I: "correct" },
      { Z: "correct" },
      { Z: "correct" },
      { A: "correct" },
    ]);
  });
  test("keys should have misplaced as value if letters are placed at the wrong spot but are included in the correct word", () => {
    const wordFromUser = "irma";
    const correctWord = "tarm";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toEqual([
      { I: "incorrect" },
      { R: "misplaced" },
      { M: "misplaced" },
      { A: "misplaced" },
    ]);
  });
  test("should not execute function when the string length don't match", () => {
    const wordFromUser = "kalas";
    const correctWord = "kallas";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toBeFalsy();
  });
});
