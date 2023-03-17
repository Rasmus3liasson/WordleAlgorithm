import { algorithmB } from "./algorithmB";
import { describe, expect, test, jest } from "@jest/globals";

describe("algorithmB(category, lengthOfWord, includeDuplicatedLetters)", () => {
  const wordsArray = ["Rasmus", "Eliasson", "hej", "martin", "kola"];
  test("should return random word from array", () => {
    const result = algorithmB(wordsArray, 20);
    expect(wordsArray).toContain(result);
  });

  test("should use 'lengtOfWord' as parameter for determine length of the random word", () => {
    const result = algorithmB(wordsArray, 3);
    expect(result).toEqual("hej");
  });

  test("should use parameter 'includeDuplicatedLetters' to exclude letters that contain letters more than once", () => {
    const result = algorithmB(wordsArray, 20, "JA");
    expect(result).not.toContain("Eliasson");
  });
});
