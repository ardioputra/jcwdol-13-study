/*1 a & b Given an array nums of size n, return the majority element. The majority element is the element that 
appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.*/
const findModeInArray = (arr) => {
  let majorNum;
  let count = 0;
  for (let num of arr) {
    console.log(num);
    if (count === 0) {
      majorNum = num;
    }
    count += num === majorNum ? 1 : -1;
  }
  return majorNum;
};

const majority = (arr) => {
  return (
    arr.filter((i) => arr.filter((y) => y == i).length > arr.length / 2)[0] || 0
  );
};

console.log(majority([2,2,1,1,2]))

console.log(findModeInArray([3, 2, 3]));
console.log(findModeInArray([2, 2, 1, 1, 1, 2, 2]));

/**2. Create a function to convert roman numeral to integer.
Example 1:
○ Input: s = "III”
○ Output: 3
○ Explanation: III = 3.
Example 2:
○ Input: s = "LVIII"
○ Output: 58
○ Explanation: L = 50, V= 5, III = 3.
Example 3:
○ Input: s = "MCMXCIV"
○ Output: 1994
○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

/*
4. You are given an array prices where prices[i] is the price of a given stock on the i day.
You want to maximize your proﬁt by choosing a single day to buy one stock and choosing a diﬀerent
day in the future to sell that stock.
Return the maximum proﬁt you can achieve from this transaction. 
If you cannot achieve any proﬁt, return 0.
 */

const maxProfitSellStocks = (arr) => {
  let min = arr[0];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] - min > max) {
      max = arr[i] - min;
    }
  }
  return max;
};

console.log(maxProfitSellStocks([7, 1, 5, 3, 6, 4]));
console.log(maxProfitSellStocks([7, 6, 4, 1]));
