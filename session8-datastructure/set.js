const fruits = [
  "Banana",
  "Apple",
  "Orange",
  "Apple",
  1,
  1,
  { name: 1 },
  { name: 1 },
];
console.log(fruits);

const newFruits = new Set(fruits);
console.log(newFruits);

//ADD
newFruits.add("Melon");
console.log(newFruits);

//DELETE
newFruits.delete("Banana");
console.log(newFruits);

//HAS
console.log(newFruits.has("Banana"))

//SIZE
console.log(newFruits.size)

//ENTRIES
let getEntries = newFruits.entries()
console.log(getEntries.next().value[0])
console.log(getEntries.next().value)
console.log(getEntries.next().value)
console.log(getEntries.next().value)
console.log(getEntries.next().value)
console.log(getEntries.next().value)
console.log(getEntries.next().value)

//FOREACH
let text = "";
newFruits.forEach((item)=>{
    text += `${item}, `
})
console.log(text)

//CLEAR

newFruits.clear();
console.log(newFruits)