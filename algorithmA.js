export function algorithmA(wordFromUser, correctWord) {
  let guessWord = wordFromUser.toUpperCase().split("");
  let finalWord = correctWord.toUpperCase().split("");
  if (guessWord.length != finalWord.length) {
    return false;
  }

  let letterArr = [];
  let incorrectArr = [];

  //function to get letters that dont match
  function notSameLetters() {
    let incorrect;

    for (let i = 0; i < guessWord.length; i++) {
      if (!finalWord.includes(guessWord[i])) {
        incorrectArr.push(guessWord[i]);
      }
    }
    incorrect = incorrectArr.map((letters) => letters);

    return incorrect;
  }
  const incorrectValues = notSameLetters();

  //function to decide if guessWord has on more of a letter than in finalWord
  function compareArrays(arr) {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
      }
    }
    return maxCount;
  }

  const containMoreOfSame1 = compareArrays(guessWord);
  const containMoreOfSame2 = compareArrays(finalWord);

  //pushing objects to array with temorarly value
  for (let i = 0; i < guessWord.length; i++) {
    let newObj = {};

    newObj[guessWord[i]] = "correct";
    letterArr.push(newObj);
  }

  letterArr.forEach((obj, index) => {
    const letter = Object.keys(obj)[0];

    if (incorrectValues.includes(letter)) {
      obj[letter] = "incorrect";
      if (finalWord === guessWord) {
        obj[letter] = "correct";
      }
    }
    if (guessWord === finalWord) {
      obj[letter] = "correct";
    } else if (finalWord.includes(letter)) {
      if (finalWord.indexOf(letter) === index) {
        obj[letter] = "correct";
      } else if (containMoreOfSame1 > containMoreOfSame2) {
        obj[letter] = "incorrect";
      } else {
        obj[letter] = "misplaced";
      }
    }
  });
  console.log(letterArr);

  return letterArr;
}
algorithmA("harry", "harry");
