function algorithmA(wordFromUser, correctWord) {
  let guessWord = wordFromUser.toUpperCase().split("");
  let finalWord = correctWord.toUpperCase().split("");

  let arr = [];
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
  let incorrectValues = notSameLetters();

  for (let i = 0; i < guessWord.length; i++) {
    let newObj = {};

    newObj[guessWord[i]] = "correct";
    arr.push(newObj);
  }

  //variables to see if arrays have more of same letters then the other
  const containMoreOfSame1 = Math.max(
    ...guessWord.map((x) => guessWord.filter((y) => y === x).length)
  );
  const containMoreOfSame2 = Math.max(
    ...finalWord.map((x) => finalWord.filter((y) => y === x).length)
  );

  arr.forEach((obj, index) => {
    const letter = Object.keys(obj)[0];
    console.log(letter);
    if (incorrectValues.includes(letter)) {
      obj[letter] = "incorrect";
      return;
    }

    if (finalWord.includes(letter) && finalWord.indexOf(letter) !== index) {
      obj[letter] = "misplaced";
      if (containMoreOfSame1 > containMoreOfSame2) {
        obj[letter] = "incorrect";
      } else {
        obj[letter] = "misplaced";
      }
    } else if (
      finalWord.includes(letter) &&
      finalWord.indexOf(letter) == index
    ) {
      obj[letter] = "correct";
    }
  });

  console.log(arr);
}

algorithmA("solen", "solen");
