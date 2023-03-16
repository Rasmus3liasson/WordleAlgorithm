function algorithmA(wordFromUser, correctWord) {
  let guessWord = wordFromUser.toUpperCase().split("");
  let finalWord = correctWord.toUpperCase().split("");

  let obj = {};
  let arr = [];
  let duplicateLetters = {};
  let incorrectArr = [];
  let wrongPlaceArr = [];

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

  incorrectValues = notSameLetters();

  //setting letters that dont match to incorrect
  for (i = 0; i < incorrectValues.length; i++) {
    obj[incorrectValues[i]] = "incorrect";
  }

  for (let i = 0; i < guessWord.length; i++) {
    let newObj = {};
    newObj[guessWord[i]] = "correct";
    arr.push(newObj);
  }

  arr.forEach((obj, index) => {
    const letter = Object.keys(obj)[0];

    if (incorrectValues.includes(letter)) {
      obj[letter] = "incorrect";
      return;
    }
    if (guessWord[index] === finalWord[index]) {
      return;
    }
    if (
      finalWord.includes(letter) &&
      finalWord.indexOf(letter) !== index &&
      !duplicateLetters[letter]
    ) {
      obj[letter] = "misplaced";
      duplicateLetters[letter] = "incorrect";
    } else {
      obj[letter] = "incorrect";
    }
  });

  console.log(arr);
}

algorithmA("Solln", "Solen");
