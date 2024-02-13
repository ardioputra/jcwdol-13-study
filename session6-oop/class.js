// Class declaration
class User {
  name = "budi";
  greeting() {
    return "Hello World";
  }
}

// Class expression
const User1 = class {
  //Public property
  firstName;
  lastName;
  //Private property
  #email = "budi123@gmail.com";
  // initialiazing non-value variable
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#email = email;
  }

  greeting() {
    return `Hello world ${this.#email}`;
  }
};

const user = new User();
console.log(user.name);

const user1 = new User1("Joko", "Widodo", "jokowid@gmail.com"); // how to declare it
console.log(
  user1.firstName,
  user1.lastName /*user1.#email Hanya bisa dipanggil dalam class saja*/
);

console.log(user1.greeting());

// Static Properties

class DB {
  static #connection = "";

  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100);
    DB.#connection = `New Database Connection ${randomNum}`;
  }

  static getConnection() {
    if (!DB.#connection) {
      DB.#initializeConnection();
    }
    return DB.#connection;
  }
}

console.log(DB.getConnection());
console.log(DB.getConnection());

// Inherintance

class Product {
  constructor() {
    this.productName;
    this.price;
  }
}

class Book extends Product {
  constructor() {
    super();
    this.author;
  }

  getAuthor() {
    return `${this.productName}  by ${this.author} : $${this.price}`;
  }
  setAuthor(authorName) {
    this.author = authorName;
  }
}

class Shoes extends Book {
  constructor() {
    super();
    this.type;
  }

  getShoes() {
    return `${this.type} ${this.productName} by ${this.author} priced only at $${this.price}`;
  }

  setShoes(typeName) {
    this.type = typeName;
  }
}

const getBook = new Book();
getBook.setAuthor("J. R. R. Tolkien");
getBook.productName = "The Lords of The Rings";
getBook.price = 39.99;
console.log(getBook.getAuthor());

const getShoes = new Shoes();
getShoes.setShoes("Adidas");
getShoes.productName = "Yezzy";
getShoes.author = "Kanye West";
getShoes.price = 150;
console.log(getShoes.getShoes());

// Instance Of

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(Tree instanceof Animal);

// Class super keyword

class User2 {
  name;
  #code = "";

  constructor(codePrefix = "") {
    const randomNumber = Math.round(Math.random() * 1000);
    this.#code = `${codePrefix}${randomNumber.toString().padStart(6, "0")}`;
  }
  getCode() {
    return this.#code;
  }
}

class Student extends User2 {
  constructor() {
    super("STD"); // parameter on super
  }
}

class Employee extends User2 {
  constructor(prefix=" ") {
    super(prefix);
  }
}

const student = new Student();
console.log(student.getCode());

const employee = new Employee("EMP");
console.log(employee.getCode());
