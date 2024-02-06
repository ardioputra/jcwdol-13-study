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
