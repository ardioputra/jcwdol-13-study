// 1. Create a function that can create a triangle pattern according to the height
const trianglePattern = (height) => {
  let result = "";
  let count = 1;
  for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      result += count < 10 ? `0${count} ` : `${count} `;
      count++;
      // if(count < 10){
      //     result += `0${count} `
      //     count++
      // } else {
      //     result += `${count} `
      //     count++
      // }
    }
    result += "\n";
  }
  return console.log(result);
};

trianglePattern(5);

/* 2. Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz" */

const fizzbuzzPrint = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result += "FizzBuzz ";
    } else if (i % 5 == 0) {
      result += "Buzz ";
    } else if (i % 3 == 0) {
      result += "Fizz ";
    } else {
      result += `${i} `;
    }
  }
  return console.log(result);
};

fizzbuzzPrint(15);

/* 3. Create a function to calculate Body Mass Index (BMI) */

const bmiCalculator = (weight, height) => {
  let result = weight / (height * height);
  console.log(result);
  if (result < 18.5) {
    return console.log("less weight");
  } else if (result >= 18.5 && result <= 24.9) {
    return console.log("ideal");
  } else if (result >= 25.0 && result <= 29.9) {
    return console.log("overweight");
  } else if (result >= 30.0 && result <= 39.9) {
    return console.log("very overweight");
  } else {
    return console.log("obesity");
  }
};

bmiCalculator(110, 1.78);

/* 4. Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only */

const removeoddNumbers = (array) => {
  let result = [];
  for (let i = 1; i <= array.length; i++) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return console.log(result);
};

removeoddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* 5. Write a function to split a string and convert it into an array of words*/
const splitString = (string) => {
  let newWord = ""
  let resultArray = []

  for(let i = 0; i<string.length; i++){
    if(string[i] !== " "){
      newWord += string[i];
    } else {
      resultArray.push(newWord)
      newWord = "";
    }
  }
  if(newWord !== ""){
    resultArray.push(newWord);
  }
  return console.log(resultArray);
};

splitString("Hello World");
