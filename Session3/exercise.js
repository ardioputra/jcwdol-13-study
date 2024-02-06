// 1. Write a code to display the multiplication table of a given integer

const givenNumber = 9;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${givenNumber} x ${i} = ${givenNumber * i}`);
// }

let message = `${givenNumber} -> `;
for (let i = 1; i <= 10; i++) {
  message += i == 10 ? `${givenNumber}x${i}` : `${givenNumber}x${i}, \n`;
}
console.log(message);

// 2. Write a code to check whether a string is a palindrome or not.

// const stringPalindrome = "madam";
// let revString = "";

// for(i = stringPalindrome.length - 1; i >= 0; i--){
//     revString += stringPalindrome[i];
// }

// if(stringPalindrome == revString){
//     console.log("Palindrome")
// } else {
//     console.log("Not Palindrome")
// }

// let stringPalindrome = "tenet";
// let result = "";
// for (let i = 0; i <= stringPalindrome.length - 1; i++) {
//   for (let j = stringPalindrome.length - 1; j >= 0; j--) {
//     if (stringPalindrome[i] !== stringPalindrome[j]) {
//       result = `"${stringPalindrome}" -> not palindrome`;
//     } else {
//       result = `"${stringPalindrome}" -> palindrome`;
//     }
//   }
// }
// console.log(result);

let stringPalindrome = "tenet";
let result = `${stringPalindrome} is a palindrome`;
for (let i = 0; i < stringPalindrome.length / 2; i++) {
  if (
    stringPalindrome[i] !== stringPalindrome[stringPalindrome.length - 1 - i]
  ) {
    result = `${stringPalindrome} is a not palindrome`;
  }
}

console.log(result);

// 3. Write a code to convert centimeter to kilometer.

const valueCenti = 100000;
const valueKilo = valueCenti / Math.pow(10, 5);
console.log(`${valueKilo} km`);

// 4. Write a code to format number as currency (IDR)

// let numberCurrency = 1000;
// console.log(
//   numberCurrency.toLocaleString("in-ID", {
//     style: "currency",
//     currency: "IDR",
//   })
// );

let numberCurrency = "1000000";
let rupiah = "";
let step = 1;

for (let i = 0; i < numberCurrency.length; i++) {
  rupiah = numberCurrency[numberCurrency.length - 1 - i] + rupiah;
  if (step !== 3) {
    step += 1;
  } else if (step === 3) {
      rupiah = "." + rupiah;
      step = 1;
  } 
}

if(rupiah[0] === "."){
  rupiah = rupiah.substring(1)
  console.log(rupiah)
}

console.log(`Rp${rupiah},00`);

// 5. Write a code to remove the first occurrence of a given “search string” from a string
let fullString = "Hello World";
let searchString = "ell";
console.log(
  `string = "${fullString}", search string ="${searchString}" -> ${fullString.replace(
    searchString,
    ""
  )}`
);

// for(let i = 0; i<=fullString.length - 1; i++){
//     for(let j = 0; j<=searchString.length - 1; j++){
//         if(fullString[i] === searchString[j]){
//             continue;
//         } else {
//             resultString += fullString[i]
//         }
//     }
// }
// console.log(resultString)

// 6. Write a code to capitalize the first letter of each word in a string
let stringCapitalize = "hello world";
let words = stringCapitalize.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

console.log(`"${stringCapitalize}" -> "${words.join(" ")}"`);

// 7. Write a code to reverse a string.
let realString = "hello world";
let reverseString = "";

for (let i = realString.length - 1; i >= 0; i--) {
  reverseString += realString[i];
}

console.log(`"${realString}" -> "${reverseString}"`);

// 8. Write a code to swap the case of each character from string
let stringBefore = "The QuiCk BrOwN Fox";
let swappedString = "";

for (let i = 0; i < stringBefore.length; i++) {
  if (stringBefore[i] == stringBefore[i].toLowerCase()) {
    swappedString += stringBefore[i].toUpperCase();
  } else {
    swappedString += stringBefore[i].toLowerCase();
  }
}

console.log(`"${stringBefore}" -> "${swappedString}"`);

// 9. Write a code to find the largest of two given integers

let numberOne = 42;
let numberTwo = 27;

if (numberOne < numberTwo) {
  console.log(numberTwo);
} else {
  console.log(numberOne);
}

// 10. Write a conditional statement to sort three numbers
let numberThree = 18;

if (numberOne < numberTwo) {
}

// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let inputUser = true;
console.log(typeof inputUser);
if (typeof inputUser == "string") {
  console.log(1);
} else if (typeof inputUser == "number") {
  console.log(2);
} else {
  console.log(3);
}

// 12. Write a code to change every letter a into * from a string of input

let changeString = "An apple a day keeps the doctor away";
let atostarString = "";
for (let i = 0; i < changeString.length; i++) {
  if (changeString[i] == "a" || changeString[i] == "A") {
    atostarString += "*";
  } else {
    atostarString += changeString[i];
  }
}
console.log(atostarString);
