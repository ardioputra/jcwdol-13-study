// 1. Create a function to convert Excel sheet column title to its corresponding column number.

const excelSheetColumn = (columnTitle) => {
  let res = 0;
  console.log("AB".charCodeAt(1));
  console.log("A".charCodeAt(0));
  for (let i = 0; i < columnTitle.length; i++) {
    res = 26 * res + columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    //res = 26*0 + 65 [0] - 65 + 1 || res = 1
    //res = 26*1 + 66 [1] - 65 + 1 || res = 26 + 1 + 1 = 28
  }
  return res;
};

const excelSheetColumnScratch = (string) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = 0;
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (string === `${alphabet[j]}`) {
        res = j + 1;
      }
      if (string === `${alphabet[i]}${alphabet[j]}`) {
        res = 26 * res + j + 1;
      }
    }
  }
  return res;
};

console.log(excelSheetColumnScratch("AZ"));

console.log(excelSheetColumn("AB"));

// 2. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
/** 1. cek array urut
 * 2. array[i-1] dan array[i+1] dicek
 */

const findOneInTwice = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      return arr[i];
    }
  }
};

const findOneInTwiceMoreThanOne = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(findOneInTwiceMoreThanOne([2, 2, 1]));
console.log(findOneInTwiceMoreThanOne([4, 1, 2, 1, 2]));
console.log(
  findOneInTwiceMoreThanOne([
    1, 1, 3, 3, 2, 2, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10, 10,
  ])
);

console.log(findOneInTwice([2, 2, 1]));
console.log(findOneInTwice([4, 1, 2, 1, 2]));
console.log(
  findOneInTwice([1, 1, 3, 3, 2, 2, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10, 10])
);

//3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const anagramDetector = (s, t) => {
  let snew = s.split("").sort().join("");
  console.log(s.split("").sort().join(" "))
  let tnew = t.split("").sort().join("");
  console.log(snew)
  console.log(tnew)
  if (snew === tnew) {
    return true;
  } else {
    return false;
  }
};

console.log(anagramDetector("anagram", "nagaram"));
console.log(anagramDetector("rat", "car"))

/*4. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
steps. In how many distinct ways can you climb to the top?*/

const distinctWaysStaircase = (n) =>{
  if(n<=2) return 1
  else return distinctWaysStaircase(n-1) + distinctWaysStaircase(n-2)

}

console.log(distinctWaysStaircase(8))