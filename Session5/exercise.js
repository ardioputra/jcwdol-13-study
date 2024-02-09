/** Write a function to get the lowest, highest and average value in the array (with and without sort function).*/
const arrayOfNumber = (arr) => {
  let total = 0;

  //for finding total
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

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
    for (let i = 0; i<string.length; i++){
        console.log(string[i])
        if(string[i] !== " "){
            word += string[i]
        } else {
            newArray.push(word)
            word = ""
        }
    }
    if(word !== ""){
        newArray.push(word)
    }

    return newArray; 
}

console.log(string2Array("Hello World"))

/** 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.*/

const sumtwoArray = (arrOne, arrTwo) => {
    let resNum = 0;
    let resArr = [];
    for(let i = 0; i>arrOne.length; i++){
        for(let j = 0; j>arrTwo.length; j++){
            if(i === j){
                resNum = arrOne[i] + arrTwo[j];
                resArr.push(resNum);
            }  
        }
    }
    return resArr
}

console.log(sumtwoArray([1,2,3],[3,2,1]))