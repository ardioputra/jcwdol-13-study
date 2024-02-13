let merekSepatu = "Adidas";
let tipeSepatu = "Air Jordan";
let ukuranSepatu = 42;

let sepatuAdidas = ["Adidas", "Air Jordan", "42"];

// Object literal
let sepatu = {
  merek: "Adidas",
  tipe: "Air Jordan",
  ukuran: 42,
  fungsi: function(name = "Budi"){
    return `Hello sar ${name}!`
  }
};

let listSepatu = [
  {
    merek: "Adidas", //property
    tipe: "Air Jordan", //property
    ukuran: "42", // property
  },
  {
    merek: "Adidas",
    tipe: "Air Jordan",
    ukuran: "39",
  },
];

// Object Literal
let userLiteral = {}
// Object Constructor
let userConstructor = new Object()
userConstructor.name = "Budi";
userConstructor.age = 12

console.log(sepatu.ukuran);
//Adding property
sepatu.milik = "Sayelaa" //.ukuran adalah method
console.log(sepatu)
//Deleting property
delete sepatu.milik;
console.log(sepatu)

console.log(listSepatu);
console.log(listSepatu[0].merek);
console.log(userConstructor);

//Accessing value with dot(.)
console.log(sepatu.fungsi("Jamet"))

//Accessing value with square bracket
console.log(sepatu["fungsi"]("Slamet"))

let person = {
    name: "Budi",
    age:21,
    education:{
        school: "smp"
    }
}

console.log(person.education.school)
console.log(person.education.highschool?.name) //only error when looping
console.log("Hallo")

console.log(Object.keys(person));

// for ... in ... only for Object
for(let key in person){
    console.log(key)
    console.log(person[key])
}

// Destructuring assignment
const {name, age, education} = person;
console.log(name);
console.log(age);
console.log(education);

// spread operator

const obj1 = {
    a:1,
    b:2
}
const obj2 = {
    c:3,
    d:4
}
const arr = {...obj1, ...obj2}
console.log(arr)

const arr1 = [1,2];
const arr2 = [3,4];
const newArr = [...arr1, ...arr2];
console.log(newArr);

// Getter Setter

const usergetset = {
    firstName: "Budi",
    lastName: "Slamet",

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    
    set fullName(value){
        const splittedValue = value.split(" ");
        this.firstName = splittedValue[0];
        this.lastName = splittedValue[1];
    }
} // this. can be used for referring their own object without using the name of the object

usergetset.fullName = "Jane Doe"
console.log(usergetset.firstName);
console.log(usergetset.lastName); 

// Object built-in method
// copies the values of all enumerable own properties from one or more souce object
const newObj = Object.assign({},obj1, obj2)
console.log(obj1);
console.log(obj2);
console.log(newObj);

// create new object with specified object and properties
const newObj1 = Object.create(obj1);
obj1.a = 5
console.log(newObj.a);

// changing object to array
console.log(Object.entries(obj1))

// freezing one object so it can't be changed
Object.freeze(obj1);
obj1.a = 6;
console.log(obj1);

// comparing both objects
console.log(Object.is(obj1,obj2))

