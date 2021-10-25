const numbersOfLetters = (integer) => {
  let result = [];
  let arrOfIndexes = Array.from(String(integer), Number);
  let numInLetters = "";
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (integer === 4) {
    return ["four"];
  }
  for (let i = 0; i < arrOfIndexes.length; i++) {
    numInLetters += numbers[arrOfIndexes[i]];
  }
  result.push(numInLetters);
  numInLetters = "";
  for (let i = 0; result[i].length !== 4; i++) {
    if (result[i].length > 9) {
      arrOfIndexes = Array.from(String(result[i].length), Number);
      for (let i = 0; i < arrOfIndexes.length; i++) {
        numInLetters += numbers[arrOfIndexes[i]];
      }
      result.push(numInLetters);
    } else if (result[i].length < 4 || result[i].length > 4) {
      result.push(numbers[result[i].length]);
    }
  }
  result.push("four");
  return result;
};

console.log(numbersOfLetters(4));
