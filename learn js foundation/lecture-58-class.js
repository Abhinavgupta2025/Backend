class Vehicle{
    constructor(name,age){
        this.name = name;
        this.age  = age;
    }
     start(){
        return `my car name is ${this.name} and my age is ${this.age}`;
    }

}
let a = new Vehicle("Tabis",19);
let b = a.start();
console.log(b);

// Inheritance
class abhishek extends Vehicle{
        //use anything from vehicle 
}

