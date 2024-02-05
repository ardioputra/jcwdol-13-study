// Array

let sepatu1 = "Adidas";
let sepatu2 = "Nike";
let sepatu3 = "Puma";

//Array Declaration
let listSepatu = ["Adidas", "Nike", "Puma"];
let listArr = new Array("Adidas", "Nike", "Puma");
console.log(listSepatu[2]);
console.log(listSepatu.length);
console.log(listArr[2]);
console.log(listArr.length);

sepatu1 = "NB";
console.log(sepatu1);

listSepatu[0] = "NB";
listSepatu[3] = "Adidas";
listSepatu.push("Sneakers"); // menambahkan ke elemen terahkir

for (let i = 0; i < listSepatu.length; i++) {
  console.log(listSepatu[i]);
}

let listAngka = [1, 2, 3];

let listPeople = [
  {
    name: "budi",
    age: 22,
  },
  {
    name: "dodi",
    age: 21,
  },
];

console.log(listPeople);

// Menghapus dan mengambil element terahkir dari list tsb.
console.log(listAngka.pop());
console.log(listSepatu.pop());
console.log(listAngka);
console.log(listSepatu);
listSepatu.push("Crocs");

// Menghapus dan mengambil element pertama dari list tsb.
console.log(listAngka.shift());
console.log(listSepatu.shift());
console.log(listAngka);
console.log(listSepatu);

// selalu dimulai dari index ke-0
// kebalikan dari shift dan mereturn length dari list tsb
console.log(listAngka.unshift(3));
console.log(listSepatu.unshift("Sneakers"));
console.log(listAngka);
console.log(listSepatu);

// menambahkan element pada index custom
// .splice (<index yang mau dipasang>,<element yang ingin dihapus setelah data baru>,<data yang dimasukan>)
listSepatu.splice(2, 0, "Timbaland");
console.log(listSepatu);

// menghapus pada index custom
let newListSepatu = listSepatu.filter((value) => {
  return value != "Nike";
});
console.log(newListSepatu);

// mengembalikan index dari list tsb
console.log(listSepatu.reverse());

// For of Loop
for (let sepatu of listSepatu) {
  console.log(sepatu);
}

// function agar tidak mengulang kode terus menerus
// function declaration
function loopingSepatu(listData, number) {
  console.log(number);
  for (let data of listData) {
    console.log(data);
  }
}

console.log(loopingSepatu(newListSepatu.reverse(), 5));

// perlu dikasih return untuk mengambalikan value saat dipanggil
console.log(pertambahan(1, 4)); //fuction declaration bisa dipanggil sebelum function

function pertambahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

console.log(pertambahan(1, 4));
console.log(pertambahan(3, 5));
console.log(pengurangan(1, 4));
console.log(pengurangan(3, 5));

// function expression (Anonymous fuction)
// console.log(perkalian(2, 3)); error karena sequence

const perkalian = function (a, b) {
  return a * b;
};

// calling function
const x = perkalian(2, 3);
console.log(x);

//function scope

function greeting(name /*this is parameter*/) {
  const hello = "Hello";

  return `${hello} ${name}`;
}

console.log(greeting("Budi" /*this is argument*/));

// default parameter
const pembagian = function (a, b = 3) {
  //hanya bisa yang belakang
  return a / b;
};

console.log(pembagian(4));

// rest parameter
function myFunc(a, b, ...c) {
  let message = "";
  console.log(a);
  console.log(b);
  for (let name of c) {
    message += `${name} `;
  }
  return `${a} ${b} ${message}`;
}

console.log(myFunc("hallo", "saya", "budi", "kusumo", "mangunbumi"));
