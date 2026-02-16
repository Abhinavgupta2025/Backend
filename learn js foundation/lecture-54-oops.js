//Old way ->
let obj1 = {
    car: "Tesla",
    tyre: "4"
};

let obj2 = {
    car: "Maruti"
};

// OLD WAY (deprecated but still works)
obj2.__proto__ = obj1;

console.log(obj2.tyre); // undefined



//New way ->
let obj3 = {
    car : "Tesla",
    tyre: "4",
    owner : "Karan RAjak"
};
let obj4 = {
    car : "Maruti"
};
Object.setPrototypeOf(obj4,obj3);
console.log(obj4.car);
console.log(`Maruti : `,Object.getPrototypeOf(obj4));