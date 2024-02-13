/** 1. Create a function to check if two objects are equal */
let objOne = { a: 1, c: 1, c: 2 };
let objTwo = { a: 1, b: 1, c: 2 };

const compareObject = (obj1, obj2) => {
  // let size1 = Object.keys(obj1).length;
  // let size2 = Object.keys(obj2).length;
  // console.log(Object.values(obj1) === Object.values(obj2))
  // if (size1 === size2) {
  //   if (Object.keys(obj1) === Object.keys(obj2)) {
  //     if (Object.values(obj1) === Object.values(obj2)) {
  //       return true;
  //     }
  //   }
  // }

  // if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  //   return true;
  // }
  if (_.isEqual(obj1, obj2)) {
    return true;
  } else {
    return false;
  }
};

console.log(compareObject(objOne, objTwo));

/** 2. Create a function to get the intersection of two objects */
const intersectionObject = (obj1, obj2) => {
  let res = {};
  for (key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      res[key] = obj1[key];
    }
  }
  return res;
};
console.log(intersectionObject({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));

/** 3. Create a function to merge two array of student data and remove duplicate data*/
let Array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
let Array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

const mergeAndDeleteDupe = (arr1, arr2) => {
  let res = [];
  const statusDupe = (name) => {
    for (let i = 0; i < res.length; i++) {
      if (res[i].name === name) {
        return true;
      }
      return false;
    }
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!statusDupe(arr1[i].name)) {
      res.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!statusDupe(arr2[i].name)) {
      res.push(arr2[i]);
    }
  }

  return res;
};

/** 4. Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}] */
const swapKeyValues = (input) => {
  let arrSwapped = [];
  for (let i = 0; i < input.length; i++) {
    let res = {};
    let obj = input[i];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[obj[key]] = key;
      }
    }
    arrSwapped.push(res);
  }
  return arrSwapped;
};

console.log(swapKeyValues([{ name: "David", age: 20 }]));

/** Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120 */

const factorialRecursion = (input) => {
  if (input === 0 || input === 1) return 1;
  return input * factorialRecursion(input - 1);
};

const factorialFormula = (input) => {
  if (input === 0 || input === 1) return 1;
  return `${input} X ${factorialFormula(input - 1)}`;
};

let input = 5;
console.log(
  `${input}! = ${factorialFormula(input)} = ${factorialRecursion(input)}`
);

/** 6. Shooting Game */
class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame extends Player {
  constructor(player1, player2) {
    super();
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const randomNums = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return {
      health: randomNums(0, 10),
      power: randomNums(0, 10),
    };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();

      let itemPlayer1 = this.getRandomItem();
      let itemPlayer2 = this.getRandomItem();

      this.player1.useItem(itemPlayer1);
      this.player2.useItem(itemPlayer2);

      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);
    }

    if (this.player1.health > 0) {
      this.player2.health = 0;
      this.player1.showStatus();
      this.player2.showStatus();
      return `${this.player2.name} died, ${this.player1.name} is The Winner`;
    } else {
      this.player1.health = 0;
      this.player1.showStatus();
      this.player2.showStatus();
      return `${this.player1.name} died, ${this.player2.name} is The Winner`;
    }
  }
}
let playerOne = new Player("Budi");
let playerTwo = new Player("Slamet");

const game1 = new ShootingGame(playerOne, playerTwo);

console.log(game1.start());
