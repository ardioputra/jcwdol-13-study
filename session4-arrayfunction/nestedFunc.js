function getMessage(firstName){
    let message;
    function sayHello(){
        let hello1 = "test";
        message = 1;
        console.log(message);
        return `Hello ${firstName} `;
    }
    function welcomeMessage(){
        return `Welcome to Purwadhika.`;
    }
    return sayHello() + welcomeMessage();
}

// console.log(sayHello())
console.log(getMessage("Budi"));