function me(name,rollno){
    this.name = name;
    this.rollno = rollno;
    this.describe = function(){
        // console.log(`Abhinav with rollno ${this.rollno} will achieve 24lpa package`);
    }
}
let obj = new me("abhinav",98);
obj.describe();
function abhi(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let a = new abhi("abhinav");
let b = abhi("paras");

