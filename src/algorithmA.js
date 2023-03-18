export function algorithmA(wordFromUser, randomWord) {
  let guessWord = wordFromUser.toUpperCase().split("");
  let correctWord = randomWord.toUpperCase().split("");

  //don't execute function if guessword isn't same length as correctWord
  if (guessWord.length != correctWord.length) {
    return false;
  }

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
  const incorrectValues = notSameLetters();

  //function to decide if guessWord has on more of a letter than in finalWord
  function compareArrays(array) {
    let maxCount = 0;
    for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
        }
      }

      if (count > maxCount) {
        maxCount = count;
      }
    }
    return maxCount;
  }

  //variables to be compare to eachother if letter appear more the the correctWord
  const containMoreOfSame1 = compareArrays(guessWord);
  const containMoreOfSame2 = compareArrays(correctWord);

  //pushing objects to array with temorarly value
  for (let i = 0; i < guessWord.length; i++) {
    let obj = {};

    obj[guessWord[i]] = "correct";
    letterArr.push(obj);
  }

  //loopning through the keys of the object and setting the vaues to these keys
  letterArr.forEach((objParameter, index) => {
    const letter = Object.keys(objParameter)[0];

    if (incorrectValues.includes(letter)) {
      objParameter[letter] = "incorrect";
      if (correctWord === guessWord) {
        objParameter[letter] = "correct";
      }
    }
    if (guessWord.join("") === correctWord.join("")) {
      objParameter[letter] = "correct";
    } else if (correctWord.includes(letter)) {
      if (correctWord.indexOf(letter) === index) {
        objParameter[letter] = "correct";
      } else if (containMoreOfSame1 > containMoreOfSame2) {
        objParameter[letter] = "incorrect";
      } else {
        objParameter[letter] = "misplaced";
      }
    }
  });

  console.log(letterArr);

  return letterArr;
}
