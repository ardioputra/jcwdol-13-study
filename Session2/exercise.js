// 1
/* 
Hint :
  1. F = C * ( 9 / 5 ) + 32
Solutions :
  1. define variable celcius and fahrenheit
    const celcius;
    const fahrenheit;
  2. assign variable celcius with desired value and 
    variable fahrenheit with fahrenheit convert to celcius formula
    const celcius = 60;
    const fahrenheit = celcius * (9 / 5) + 32;
*/
const celcius = 60;
const fahrenheit = celcius * (9 / 5) + 32;
console.log(`${fahrenheit} Fahrenheit`);

//2
/* 
Hint :
  1. number%2==0 for even number, else for odd number
Solutions :
  1. define variable number
    const number;
  2. assign variable number with desired value and 
    compare the number module 2 with 0
    IF number % 2 == 0
      THEN print even number
    ELSE
      THEN print odd number
*/
const numberOne = 25;
const numberTwo = 2;

if (numberOne % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

if (numberTwo % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// const oddEven = (number) =>{
//     if (number%2===0){
//         return console.log("even number");
//     } else {
//         return console.log("odd number");
//     }
// }
// oddEven(25);
// oddEven(2);

//3

/* 
Hint :
  1. A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers
  2. prime numbers are 2,3,5,7,11...
  3. square root of desired number can help for deciding prime number or not
  4. if desired number has factor using value below and above square root of desired number,
    the desired number is not a prime number, vice versa.
Solutions :
  1. define variable number and status to true for changing state when it is prime or not
    const number;
    let statusPrime = true;
  2. assign variable number with desired value and 
  status changes to false everytime 
  desired number modulo with repetition index towards square root of desired number
  equals to zero
    FOR (let i = 2; i<=Math.sqrt(number); i++)
      IF number % i == 0 
        DO status = false
      END IF
    END FOR
    }
  3. checking status, if false then not prime number but if true then prime number
  IF status == false
    PRINT "not prime"
  ELSE
    PRINT "prime"
*/

const numberThree = 7;
const numberFour = 6;
let statusPrime = true;

/* Why square root?
https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is
https://www.youtube.com/watch?v=dl7LLYw-xbQ
*/

if (numberThree === 0 || numberThree === 1) {
  console.log("0 and 1 isn't prime number");
} else if (numberThree < 0) {
  console.log("You can not put negative number to check prime or not");
} else if (numberThree > 1) {
  for (let i = 2; i <= Math.sqrt(numberThree); i++) {
    if (numberThree % i === 0) {
      statusPrime = false;
      break;
    }
  }
  if (statusPrime == false) {
    if (numberThree !== 2) {
      console.log(`${numberThree} is not prime number`);
    } else {
      console.log(`${numberThree} is prime number`);
    }
  } else {
    console.log(`${numberThree} is prime number`);
  }
}

if (numberFour === 0 || numberFour === 1) {
  console.log("0 and 1 isn't prime number");
} else if (numberFour < 0) {
  console.log("You can not put negative number to check prime or not");
} else if (numberFour > 1) {
  for (let i = 2; i <= Math.sqrt(numberFour); i++) {
    if (numberFour % i === 0) {
      statusPrime = false;
      break;
    }
  }
  if (statusPrime == false) {
    if (numberFour !== 2) {
      console.log(`${numberFour} is not prime number`);
    } else {
      console.log(`${numberFour} is prime number`);
    }
  } else {
    console.log(`${numberFour} is prime number`);
  }
}
// if (numberThree % 2 !== 0) {
//   console.log(`${numberThree} is a prime number`);
// } else {
//   console.log(`${numberThree} is not a prime number`);
// }

// if (numberFour % 2 !== 0) {
//   console.log(`${numberFour} is a prime number`);
// } else {
//   console.log(`${numberFour} is not a prime number`);
// }

//4

/* 
Hint :
  1. sum of index value everytime loop happens
Solutions :
  1. define variable number and result to 0 for saving sum value
    const number;
    let result = 0;
  2. assign variable number with desired value,
    do repetition until the desired number and
    adding index value to variable result
    FOR let i = 1; i<=number; ++i)
      DO result = result + i
    END FOR
*/

const numberFive = 5;
const numberSix = 3;
let resultOne = 0;
let arrayofOne = [];
for (let i = 1; i <= numberFive; ++i) {
  arrayofOne.push(i);
  resultOne += i;
}
console.log(`${numberFive} -> ${arrayofOne.join(" + ")} = ${resultOne}`);

let resultTwo = 0;
let arrayofTwo = [];
for (let i = 1; i <= numberSix; ++i) {
  arrayofTwo.push(i);
  resultTwo += i;
}
console.log(`${numberSix} -> ${arrayofTwo.join(" + ")} = ${resultTwo}`);

//5

/* 
Hint :
  1. N! = N x ... x 3 x 2 x 1
Solutions :
  1. define variable number and result to 1 for saving multiplication value
    (so the value can be zero, multiplication zero causes every calculation into zero)
    const number;
    let result = 1;
  2. assign variable number with desired value and 
    do backward repetition until the desired number and
    multiply index value to variable result
    FOR let i = number; i>=1; --i)
      DO result = result * i
    END FOR
*/

const numberSeven = 4;
const numberEight = 6;
let resultThree = 1;
let resultFour = 1;

for (let i = numberSeven; i >= 1; --i) {
  resultThree *= i;
}
console.log(resultThree);

for (let i = numberEight; i >= 1; --i) {
  resultFour *= i;
}
console.log(resultFour);

//6

/* 
Hint :
  1. number[0] + number[1] = number[2]
  2. number[0] = number[1]
  3. number[1] = number[2]
  4. etc...
Solutions :
  1. define firstNumber, secondNumber, for initializing 
*/

const fibonacciStarter = 15;
let firstNumber = 0;
let secondNumber = 1;
let nextStep;

for (let i = 1; i <= fibonacciStarter; i++) {
  nextStep = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextStep;
}

console.log(firstNumber);
