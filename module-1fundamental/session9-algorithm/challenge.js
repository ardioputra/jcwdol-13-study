let palindrome = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");

palindrome = palindrome.split("");
palindrome = palindrome.filter((letter) => {
  return arrAlpha.includes(letter);
});

palindrome = palindrome.join("");
console.log(palindrome);
const checkPalindrome = (palindrome) => {
  for (let i = 0; i < palindrome.length / 2; i++) {
    if (palindrome[i] === palindrome[palindrome.length - i - 1]) {
      return "Palindrome";
    } else {
      return "Nah";
    }
  }
};

console.log(checkPalindrome(palindrome));

function search(arr) {
    for(let i = 0; i<arr.length;i++){
        if(arr.find((x) => x==arr[i])){
            return i
        }
    }
    return -1
}

console.log(search([1,23,43,23,11,2],43))