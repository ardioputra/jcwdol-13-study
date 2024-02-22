function multiplier(factor,number){
    return number * factor;
}

console.log(multiplier(5,3))

function multiplierCur(factor){
    return function(number){
        return number * factor;
    }
}

const result = multiplierCur(5);
console.log(result(3));
console.log(multiplierCur(3)(3))