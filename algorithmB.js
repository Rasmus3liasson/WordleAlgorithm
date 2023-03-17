const foodList =
  "Biff Korn Fisk Aprikos Fläskkött Fisk Dricka Tomat Ris Paj Päron".split(" ");

const colorList = "Rosa Gul Blå Grön Brun Svart Vit Orange Violett".split(" ");
const workList =
  "Gatsopare Skomakare Skådespelerska Idrottare Advokat Snickare Servitör Entreprenör Pilot Brandman".split(
    " "
  );
let wordsArr = [];
let duplicatedLetter = [];

export function algorithmB(category, lengthOfWord, includeDuplicatedLetters) {
  if (category == wordsArr) {
    wordsArr.push(...foodList);
    wordsArr.push(...colorList);
    wordsArr.push(...workList);
  }

  let askedVauleArr = [];

  function removeDuplicatedLetters() {
    for (let i = 0; i < category.length; i++) {
      duplicatedLetter = new Set(category[i].toLowerCase());
      if (duplicatedLetter.length != category[i].length) {
        category.splice(i, 1);
      }
    }
  }
  if (includeDuplicatedLetters === "JA") {
    removeDuplicatedLetters();
  }

  for (let i = 0; i < category.length; i++) {
    if (category[i].length <= lengthOfWord) {
      askedVauleArr.push(category[i]);
    }
  }

  const randomWord =
    askedVauleArr[Math.floor(Math.random() * askedVauleArr.length)];

  if (randomWord === undefined) {
    console.error("Fanns tyvärr inget ord med dessa parametrar");
  }
  return randomWord;
}
