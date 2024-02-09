// 1. Create a function to calculate array of student data
let student = [
  {
    name: "Budi",
    email: "Budi123@gmail.com",
    age: new Date(2000,9,11),
    score: 95,
  },
  {
    name: "Slamet",
    email: "slamet321@gmail.com",
    age: new Date(2002,9,11),
    score: 100,
  },
  {
    name: "Chandra",
    email: "chandra222@gmail.com",
    age: new Date(2005,9,11),
    score: 75,
  },
];

const calculateArray = (arr) => {
  let scoreValue = [];
  let ageValue = [];
  let totalScore = 0;
  let totalAge = 0;

  // for putting values inside other variables
  for (let i = 0; i < arr.length; i++) {
    scoreValue.push(arr[i].score);
    ageValue.push(new Date().getFullYear() - new Date(student[i].age).getFullYear());
  }

  // for sorting Score value
  for (let i = 0; i < scoreValue.length; i++) {
    for (let j = 0; j < scoreValue.length - i - 1; j++) {
      if (scoreValue[j] > scoreValue[j + 1]) {
        let temp = scoreValue[j + 1];
        scoreValue[j + 1] = scoreValue[j];
        scoreValue[j] = temp;
      }
    }
  }

  //  for sorting Age value
  for (let i = 0; i < ageValue.length; i++) {
    for (let j = 0; j < ageValue.length - i - 1; j++) {
      if (ageValue[j] > ageValue[j + 1]) {
        let temp = ageValue[j + 1];
        ageValue[j + 1] = ageValue[j];
        ageValue[j] = temp;
      }
    }
  }

  // for summing age value
  for (let i = 0; i < ageValue.length; i++) {
    totalAge += ageValue[i];
  }
  
  // for summing score value   
  for (let i = 0; i < scoreValue.length; i++) {
    totalScore += scoreValue[i];
  }

  let scoreData = {
    Highest: scoreValue[scoreValue.length-1],
    Lowest: scoreValue[0],
    Average: totalScore/scoreValue.length
  }

  let ageData = {
    Highest: ageValue[ageValue.length-1],
    Lowest: ageValue[0],
    Average: totalAge/ageValue.length
  }

  return{
    Score: scoreData,
    Age: ageData
  }
};

console.log(calculateArray(student))

// 2. Create a program to create transaction
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Transaction extends Product{
    
    constructor(){
        super();
        this.total = 0;
        this.Qty = [];
        this.allProduct = []; 
    }
    add2Cart(product, quantity){
        this.allProduct.push(product);
        this.Qty.push(quantity);
        this.total += product.price * quantity;
    }

    showTotal(){
        return `\nTotal = $${this.total}\n`
    }
    
    checkOut(){
        this.result="";
        for(let i = 0; i<this.allProduct.length; i++){
            this.result += `${this.allProduct[i].name} x ${this.Qty[i]} = $${this.allProduct[i].price * this.Qty[i]}\n`
        }
        return `${this.result}------------------------------\nAll Total: $${this.total}`
    }
}

const product1 = new Product("Nvidia", 1000);
const product2 = new Product("AMD", 500);
const product3 = new Product("Logitik", 2500);

const transaction = new Transaction()

transaction.add2Cart(product1,1);
transaction.add2Cart(product2,2);
transaction.add2Cart(product2,3);

console.log(transaction.showTotal())
console.log(transaction.checkOut())
