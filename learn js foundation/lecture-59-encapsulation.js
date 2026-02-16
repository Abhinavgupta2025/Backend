class Bankaccount{
     #balance = 0;//making it private # is used .
    getbalance(){
        this.#balance += 10;
        return `Current balance is : ${this.#balance}`;
    }

}
let a = new Bankaccount();
let b = a.getbalance();
console.log(b);
// 1️⃣ Parent class
class Animal {
    speak() {
        // Default behavior
        return "Animal makes a sound";
    }
}

// 2️⃣ Child class (inherits Animal)
class Dog extends Animal {
    speak() {
        // Overriding parent method
        return "Dog barks";
    }
}

// 3️⃣ Another child class
class Cat extends Animal {
    speak() {
        // Overriding parent method
        return "Cat meows";
    }
}

// 4️⃣ Polymorphism in action
const animals = [
    new Animal(),
    new Dog(),
    new Cat()
];

// Same method call, different outputs
animals.forEach(animal => {
    console.log(animal.speak());
});
