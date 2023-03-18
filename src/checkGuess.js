export function checkGuess(wordFromUser, randomWord) {
  let guessWord = wordFromUser.toUpperCase().split("");
  let correctWord = randomWord.toUpperCase().split("");

  //array variables
  let letterArr = [];
  let incorrectArr = [];

  //function to get letters that don't match
  function notSameLetters() {
    for (let i = 0; i < guessWord.length; i++) {
      if (!correctWord.includes(guessWord[i])) {
        incorrectArr.push(guessWord[i]);
      }
    }

    return incorrectArr;
  }

  //setting a variable to the letters that aren't present in the correctWord
  const incorrectLetters = notSameLetters();

  //pushing objects to array with temorarly value
  for (let i = 0; i < guessWord.length; i++) {
    let obj = {};

    obj[guessWord[i]] = "correct";
    letterArr.push(obj);
  }

  //loopning through the keys of the object and setting the vaues to these keys
  letterArr.forEach((objParameter, index) => {
    const letter = Object.keys(objParameter)[0];

    if (incorrectLetters.includes(letter)) {
      objParameter[letter] = "incorrect";
    }
    if (guessWord.join("") === correctWord.join("")) {
      objParameter[letter] = "correct";
    } else if (correctWord.includes(letter)) {
      if (correctWord.indexOf(letter) === index) {
        objParameter[letter] = "correct";
      } else if (
        guessWord.filter((frequentLetter) => frequentLetter === letter).length >
        correctWord.filter((frequentLetter) => frequentLetter === letter).length
      ) {
        objParameter[letter] = "incorrect";
      } else {
        objParameter[letter] = "misplaced";
      }
    }
  });

  //don't execute function if guessword isn't same length as correctWord
  if (guessWord.length != correctWord.length) {
    return false;
  }

  return letterArr;
}
