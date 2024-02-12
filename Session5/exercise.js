/** Write a function to get the lowest, highest and average value in the array (with and without sort function).*/
const arrayOfNumber = (arr) => {
  let total = 0;
  // let min=arr[0];
  // let max=arr[0];
  //for finding total
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  // without sorting 
  // for (let i=0;i<arr.length;i++){
  //   if(arr[i] < min){
  //     min = arr[i];
  //   }
  //   if(arr[i] > max){
  //     max = arr[i]
  //   }
  //   total += arr[i]
  // }

  //for sorting array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return `lowest : ${arr[0]}, highest : ${arr[arr.length - 1]}, average : ${
    total / arr.length
  }`;
};

console.log(arrayOfNumber([12, 5, 23, 18, 4, 45, 32]));

/* 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.*/

const concatArray = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += i !== arr.length - 1 ? `${arr[i]}, ` : `and ${arr[i]}.`;
  }
  return result;
};

console.log(
  concatArray(["apple", "alpukat", "banana", "cherry", "date", "melon"])
);

/*3. Write a function to split a string and convert it into an array of words */

const string2Array = (string) => {
  let word = "";
  let newArray = [];
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] !== " ") {
      word += string[i];
    } else {
      newArray.push(word);
      word = "";
    }
  }
  if (word !== "") {
    newArray.push(word);
  }

  return newArray;
};

console.log(string2Array("Hello World"));

/** 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.*/

const sumtwoArray = (arrOne, arrTwo) => {
  let resArr = [];
  for (let i = 0; i < arrOne.length; i++) {
    resArr.push(arrOne[i] + arrTwo[i]);
  }
  return resArr;
};
console.log(sumtwoArray([1, 2, 3], [3, 2, 1]));

/** 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.*/

const pushDifferentElement = (arr, newElement) => {
  let same = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newElement) {
      same = true;
    }
  }
  if (!same) {
    arr.push(newElement);
  }
  return arr;
};
console.log(pushDifferentElement([1, 2, 3, 4, 5, 6], 6));

/** 6. Write a function to remove all odd numbers in an array and return a new array that contains even number*/
const removeOddNumber = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? res.push(arr[i]) : res.push();
  }
  return res;
};

console.log(removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8]));

/** 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements). */

const maxSizedArray = (size, ...numbers) => {
  let res = [];
  for (let i = 0; i < size; i++) {
    if(numbers[i]!==undefined)res.push(numbers[i]);
  }
  return res;
};

console.log(maxSizedArray(5, 5, 10, 24, 3, 6, 7, 8));

/** 8. Write a function that will combine 2 given array into one array*/
const mergeTwoArray = (arrOne, arrTwo) => {
  let res = [...arrOne, ...arrTwo];
  return res;
};

console.log(mergeTwoArray([1, 2, 3], [4, 5, 6]));

/** 9. Write a function to find duplicate values in an array */
// BUGGED
const findDuplicate = (arr) => {
  let res = [];
  let sortedArr = arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if(sortedArr[i]===sortedArr[i-1]||sortedArr[i]===sortedArr[i+1]){
      if(!res.find(x => x == sortedArr[i])){
        res.push(sortedArr[i])
      }
    }
    // if (arr[i] === arr[i - 1]) {
    //   if (!res.includes(arr[i])) {
    //     res.push(arr[i]);
    //   }
    // }
    console.log(res);
  }
  return res;
};

console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

/** 10. Write a function to find the difference in 2 given array */

const findDifference = (arrOne, arrTwo) => {
  let res = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.indexOf(arrOne[i]) === -1) {
      res.push(arrOne[i]);
    }
  }
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrOne.indexOf(arrTwo[i]) === -1) {
      res.push(arrTwo[i]);
    }
  }
  return res;
};

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

/** 11. Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];*/

const primitiveDataOnly = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object" || arr[i] === null) res.push(arr[i]);
  }
  return res;
};

console.log(primitiveDataOnly([1, [], undefined, {}, "string", {}, [],null,true]));

/** 12. Write a function from a given array of numbers and return the second smallest number */
//BUGGED
const secondSmallestNumber = (arr) => {
  let sort = arr.sort((a,b)=>a-b)
  return sort[1]
};

console.log(secondSmallestNumber([5, 3, 1, 7, 2, 6,1,1]));

/* 13. Write a function from a given array of mixed data types and return the sum of all the number*/

const sumMixedDataArray = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      res += arr[i];
    }
  }
  return res;
};

console.log(sumMixedDataArray(["3", 1, "string", null, false, undefined, 2]));

/** 14. Write a function from the below array of number that will return sum of duplicate values. */

const sumDuplicateValues = (arr) => {
  let arrayDuplicate = findDuplicate(arr);
  let count = [];
  let res = 0;
  for (let i = 0; i < arrayDuplicate.length; i++) {
    count[i] = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arrayDuplicate[i] === arr[j]) {
        count[i] += 1;
      }
    }
    res += arrayDuplicate[i] * count[i];
  }
  return res;
};

console.log(sumDuplicateValues([10, 20, 20, 40, 10, 50, 30, 10, 60, 10]));

/** 15. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor. */

const rockPaperScissor = (option) => {
  let botChoices = ["rock", "paper", "scissor"];
  let bot =
    botChoices[Math.floor(Math.random(botChoices.length) * botChoices.length)];
  console.log(bot);
  if (option === "rock") {
    if (bot === "paper") {
      return "Lose";
    } else if (bot === "scissor") {
      return "Win";
    } else {
      return "Draw";
    }
  } else if (option === "paper") {
    if (bot === "paper") {
      return "Draw";
    } else if (bot === "scissor") {
      return "Lose";
    } else {
      return "Win";
    }
  } else if (option === "scissor") {
    if (bot === "paper") {
      return "Win";
    } else if (bot === "scissor") {
      return "Draw";
    } else {
      return "Lose";
    }
  } else {
    return "You does not put a right option";
  }
};

console.log(rockPaperScissor("rock"));
console.log(rockPaperScissor("paper"));
console.log(rockPaperScissor("scissor"));
