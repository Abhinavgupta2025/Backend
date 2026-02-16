let num = 1;
let num2 = new Number(2);
console.log(typeof (num));
console.log(typeof (num2));
/* so a primitive dataype can be converted to a non primitive datatype 
by using the new number 
Primitive daatatype are - string,number,boolean,undefined,null
*/
//string

let message = "hi dholku";
let message2 = "Hi sattebaz";
//old way 
let commessage = message + "and" + message2;
console.log(commessage);//no space we have to add it manually
let newway = `${message} and ${message2}`;
console.log(newway);
