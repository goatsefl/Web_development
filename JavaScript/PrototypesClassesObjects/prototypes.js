// Prototypes in javaScript

// Prototype is an object template for different predefined properties and methods when a new object is declared.

// Also, it's a concept, by default every object in javaScript has a prototype chaining.

// So, when we have a method in an object, first it looks into the object, and follows up with the prototype object to see whether that method is present.

// In javaScript the constructor function cannot have an explicit method if not defined by "this" or the usage of constructor's prototype.

// SIMPLIFIED DEFINITION : 

// Prototype is an object that's useful for method sharing and providing default properties whenever a new object is created using function constructor.  

// Whenever you create a new constructor function, initially the prototype is empty. You can use it to make other instances get the same properties or methods every-time a new instance is created.

function Car(model) {
    this.model = model;
    this.drive = () => { // Using this will take, more memory, as it creates a drive function for every object of the same instance.
        console.log(this.model + "is the model of the car");
    }
}

// To create an optimized way of using memory we use constructor's prototype property.

function bike(model) {
    this.model = model;
}

bike.prototype.ride = () => {
    console.log(this.model + `is the bike i love to ride :)`);
}

const myObject = new Car("Lexus");
myObject.drive();
// OUTPUT : Lexus is the model of the car
const bikeObject = new bike("HayaBusa");

bikeObject.ride();
// OUTPUT : HayaBusa is the bike i love to ride :)


// The difference in myObject.drive() and bikeObject.ride() is memory usage. Whenever a new instance of car is created, it will have the drive method in the constructor function.
// So, for every Car object will have 2 instances created, instead every bike object will have only 1 instance and have shared reference to prototype property of bike. 
// For this reason, we use prototypes, by saving memory.

// So, String and Array are objects, and they have their own prototype properties, which hold predefined properties like, toUpperCase() and many more.

// To have a custom prototype method for String or Array, we can do it by using Array.prototype.(functionName/propertyName).
// Example :

Array.prototype.randomNess = () => {
    const randomness = "All the randomness in the world ";
    console.log(randomness);
}


[1, 2, 3, 4, 5].randomNess();
//Output : All the randomness in the world


// Another example :

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};

const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John

const bobby = new Person("Bobby", 45);

console.log(john.greet === bobby.greet)

// This is how prototypes work and we can override other pre-existing function for each.

// __proto__ is the reference to the prototype, where as the Person.prototype is the template object.

// Factory function : function creates and returns an object
// All the objects have the same recipe whenever created, and we can use it without "new keyword".

// Example : 

function factoryFunction(first, second) {
    return {
        firstName: first,
        secondName: second
    }
}

const person1 = factoryFunction('Snakeer', `Singh`);

console.log(person1.firstName);
console.log(person1.secondName);


// class : These are the same as function constructors but, classes doesn't require the user to use prototype notation to create methods inside the object.

// Syntax : class A(firstName,secondName){
//              constructor(){} } [This is a must in every class, by default you have to add a constructor function].


class RandomPerson {
    constructor(name) {
        console.log(`Constructor called for RandomPerson`)
        this.name = name;
    }
    randomNumber() {
        console.log(Math.floor(Math.random() * 10000));
    }
}

const firstObject = new RandomPerson();
firstObject.randomNumber();

// Output : Constructor called for RandomPerson [randomNumber is added directly to the __proto__, that makes us not use the ObjectName.prototype.methodName()]
// 3412

class Person extends RandomPerson { // Inheritance, where RandomPerson is the parent of person. It's a bad example but, just for the understanding of the usage.
    constructor(name, relation) {
        super(name);// super will make sure to call the parent constructor and instances you want from the parent to be sent through the constructor.
        this.relation = relation;
    }
    // This constructor() can also have it's own default variables that can be used, this.relation = relation.
    sleep() {
        console.log(`My school ${this.relation} ${super.name} is sleeping zzz`);
    }
}
const anotherPerson = new Person("Garry", "Friend");
anotherPerson.sleep();