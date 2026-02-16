function check(tea){
    return `My fav tea is ${tea}`;
}
let ans = check("Lemon Tea");


//Function inside function;
function check2(teaname){
    return `Order is confirmed and you order is ${teaname}`;
}
function check(teaname){
    let val = check2(teaname);
    return val;
}
let a = check("Lemon tea");



// Higher order Function IMP;
//A higher-order function is a function that takes another function as an argument or returns a function.

function greet(teaname){
    return `Your favourite teaname is : ${teaname}`;
}
function teatype(tea){
    return tea("Lemontea");
}
let n = teatype(greet);
console.log(n);

// important and most important function

function topfunc() {
    return function checktea(teatype) {
        return `my fav tea is u and ${teatype}`;
    }
}

let u = topfunc();        // u now holds the inner function
console.log(u("Lemon tea"));

