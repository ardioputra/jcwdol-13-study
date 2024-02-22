let age = 14;
let gender = "Men";

if (age > 17 && age < 90) {
  console.log("You can now create an ID Card");
} else if (age > 90) {
  console.log("Nahhh you trippin");
} else {
  console.log("You can't create an ID Card");
}

if (age > 13) {
  if (gender == "Men") {
    console.log("laki");
  } else if (gender == "Women") {
    console.log("perempuan");
  } else {
    console.log("dirahasiakan");
  }
}

// ternary
console.log(age > 17 ? console.log("Bisa bikin") : console.log("Gabisa"));

let buah = "Apple";

switch (buah) {
  case "Oranges":
    console.log("Harga orange adalah 5rb");
    break;
  case "Mangoes":
    console.log("Harga mangoes adalah 10rb");
    break;
  case "Apple":
  case "Papayas":
    console.log("Harga papayas dan apel adalah 2rb");
    break;
  default:
    console.log("salah input");
    break;
}

let inputUser = "0";

if (inputUser) {
  console.log("Input sudah dimasukan");
} else {
  console.log("Input belum dimasukan");
}

console.log(
  inputUser
    ? console.log("Input sudah dimasukan")
    : console.log("Input belum dimasukan")
);

for (let i = 1; i < 10; i++){
    console.log(i);
}

for (let i = 1; i<=10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

let i = 0;
let bools = true;

while (bools){
    if (i==6){
        // break kalau digunakan maka keluar paksa
        bools = false;
    }
    console.log(i);
    ++i;
}

i=0;
do{
    if (i==6){
        break; // kalau digunakan maka keluar paksa
        //bools = false;
    }
    console.log(i);
    ++i;
}while(bools);

for (let i = 1; i<=10; i++){
    if(i >= 5 && i<=9 ){
        continue;
    }
    console.log(i)
}

let a = 10.234590987788;
console.log(a.toFixed(6))