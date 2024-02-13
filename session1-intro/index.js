// Variable
let messageLog;
messageLog = "Budi mandi";

console.log(messageLog);

// penggunaan let
let kotakTas = "Gucci";
let kotakSepatu;
kotakSepatu = "Adidas";

console.log(kotakSepatu);
console.log(kotakTas);
// let kotakTas = "Hermes";
let kotakTas2 = "Hermes";
console.log(kotakTas2);

// penggunaan var
var kotakEarphone = "jbl";
console.log(kotakEarphone);
var kotakEarphone = "marshal";
console.log(kotakEarphone);

// penggunaan const
const kotakBaju = "Tommy";
// kotakBaju = "anu";
console.log(kotakBaju);

// syarat penamaan variable
const _satu = 1;
const $satu = 1;
// const 1satu = 1;
const satu = 1;
const Satu = 1;

// Data Types
// primitive
const text = "sebuah string data";
const angka = 1;
const boolTrue = true;
const boolFalse = false;
const nulls = null; //objects
const undefine = undefined; //kosong tapi bisa diisi

console.log(typeof text);
console.log(typeof angka);
console.log(typeof boolFalse);
console.log(typeof boolTrue);
console.log(typeof nulls);
console.log(typeof undefine);

// non primitive
// object
const objects = {
  nama: "slamet", //property (key: value)
};
objects.name = "budi";
// objects = {

// };
console.log(typeof objects);

const array = [1, 2, 3, 4, 5];
console.log(typeof array);

// immutable (membuat variable baru)
let name = "budi";
name = "doremi"; //address pada ram sudah berbeda
console.log(name);

let age = 21;
console.log(age);
let newAge = age;
console.log(newAge);
age = 22;
console.log(age); //22
console.log(newAge); //21 karena menyimpan variabel age yang dulu

// mutable
const person = {
  nama: "budi",
  umur: 21,
};
person.umur = 31;

console.log(person);

const car = {
  brand: "ferarri",
  tire: 4,
};
const newCar = car;
const newCar2 = {
    ...car
}

newCar.tire = 4;
newCar2.tire = 5;
console.log(car); //sama
console.log(newCar); //sama
console.log(newCar2)

const string = "HEllo";
const number = 5.1234;
console.log(string.slice(0, 3));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.replace(/l/g, 1));

const strings = `${string.toUpperCase()} WORLD, 
                THIS IS PURWADHIKA, 
                LETS LEARN SOMETHING NEW EVERYDAY ${number}`;
console.log(strings)
console.log(typeof strings);
console.log(typeof number);
console.log(number.toString())
console.log(number.toFixed())

console.log(Number(string))

console.log(parseInt("12345"))
console.log(String(12345))

const js = 1 + "1" //dynamic programming, pastikan sama tipe variabelnya
console.log(js)

let sebuahAngka = 1;
sebuahAngka = "test";
console.log(sebuahAngka)

console.log(Boolean(1,2,3,4,5))
console.log(Boolean(0))

console.log(Boolean(" "))
console.log(Boolean(""))

let now = new Date();
let customDate = new Date("2024-01-01");
const dateNowFormat = now.toLocaleDateString('in-ID',{
    day:'2-digit',
    month:'2-digit',
    year:"numeric"
})
console.log(dateNowFormat)
console.log(now);
console.log(customDate);
let add1Day = new Date(now.getTime() + 24 * 3600 * 1000);
console.log(add1Day)

const value = "12345";
const newValue = Number(value) + 1;
console.log(value)
console.log(newValue)
console.log(customDate.getFullYear());
console.log(customDate.getDate());
console.log(customDate.getMonth() + 1); //khusus bulan, index dimulai dari 0

const nums = 1 + 1 * 1 / 1;
console.log(nums) 

const operand = 5*2; // 5 first operand, 2 second operand

let x = 1;
x = -x;
console.log(x); // x is operand, so it's unary

let y=1, z=3;
console.log(z-y) //y and z is two operands

let kalimat = "hello"
let kalimat2 = " world"
const newKalimat = kalimat + kalimat2;
console.log(newKalimat)

let n = 5;
// prefix form
console.log(++n);

// postfix form
console.log(n++)
console.log(n)

let num1 = 2;
let num2 = "2";
let num3 = 3
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1>num3);
console.log(num1<num3);
console.log(num1>=num2);
console.log(num1<=num2);