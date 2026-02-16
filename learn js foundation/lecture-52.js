//1->
let arr = ["green tea","black tea","chai","colong tea"];
let arr2 = [];
let arr3 = [];
for(i=0;i<arr.length;i++){
    if(arr[i]!=="chai"){
        arr2.push(arr[i]);
    }
    else{
        break;
    }
}
for(i=0;i<arr.length;i++){
    if(arr[i]==="chai"){
        continue;
    }
    else{
        arr3.push(arr[i]);
    }
}
//3->
let arr4 = [];
for(const num of arr){
    if(num!= "black tea"){
        arr4.push(num);
    }
}
//5-> for in loop in object to copy one to another
let obj = {
    name : "Abhinav",
    stream : "Btech.cse",
    regno: "12315071"
}
let obj2 = {};
for(let it in obj){
    obj2[it] = obj[it];
}

//one other way to print all the object and key in obj is
// console.log(Object.keys(obj)); - for keys
// console.log(Object.values(obj)) - for values;
let largecity = {
    India : "3000",
    CHina : "4000",
    Russia : "10000",
    Indonesia : "100000"
}
let newlargecity = {};

for(let it in largecity){
    if(largecity[it] <= 20000){
        newlargecity[it] = largecity[it];
    }
}
let cities = ["Nagrota","Kangra","dharamshaala","Jharkhand","Nainital"];
let cities2 = [];
    cities.forEach((tea)=>{
        if(tea == "Kangra") return;
        cities2.push(tea);
    });
console.log(cities2);
