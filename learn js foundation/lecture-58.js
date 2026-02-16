let car = {
    Model: "Toyota",
    Version: "Camri",
    start : function(){
        return `My car model is ${this.Model} And my car version is ${this.Version}`;
    }
}
let a = car.start();
// Constructor function
function Animal(type) {
    this.type = type;
}

// Prototype method (shared by all Animal objects)
Animal.prototype.speak = function () {
    return `${this.type} makes a sound`;
};

// 1️⃣ Create an object (instance) using `new`
const dog = new Animal("Dog");

// 2️⃣ Call the prototype method
console.log(dog.speak()); // Dog makes a sound
