// MAP
const myMap = new Map();
// SET
myMap.set("David", "001");
myMap.set("Buchanan", "002");
myMap.set("Buchanan", "009");
// GET
console.log(myMap.get("David"));

for (let [key, value] of myMap) {
  console.log(`${key}:${value}`);
}

// DELETE
myMap.delete("David");
console.log(myMap);

// HASHING - LINEAR PROBING - PREVENT COLLISION
let hashing = new Map();

// function hashMap(key, value) {
//   let sum = 0;
//   for (let i = 0; i < key.length; i++) {
//     console.log(key.charCodeAt(i)); //nambahin character code biar hasilnya beda
//     sum += key.charCodeAt(i);
//   }
//   console.log(sum)
//   let hash = sum % 45; //generate signature key
//   console.log(hash)
//   console.log(hashing.get(hash))
//   if (hashing.get(hash) === undefined) {
//     return hashing.set(hash, { key, value });
//   } else {
//     while (hashing.get(hash)!== undefined){
//         hash++
//     }
//   }
//   console.log(hash)
//   return hashing.set(hash,{key,value});
// }

function hashMap(key,value){
    let hash = hashing.size

    return hashing.set(hash +1, {key, value})
}

console.log(hashMap(3,1))
console.log(hashMap("mama", "makan"))
console.log(hashMap({budi: "slamet"},"budi"))

let satu = hashing.get(1);
console.log(satu)
console.log(satu.key)
console.log(satu.value)
console.log(hashing.get(1))

for(let [key,value]of hashing){
    console.log(`${key}: ${value}`)
    console.log(`${value.key}: ${value.value}`)
}