function greeting(name){
    const defaultMessage = "Hello ";

    return function(lastName){
        return `${defaultMessage} ${name} ${lastName}`
    }
}

const result = greeting("Budi");
console.log(result("Slamet"));
console.log(greeting("Dodo")("Slamet"));