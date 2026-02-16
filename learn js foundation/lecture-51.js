let arr = [];
let tea;
do{
    tea = prompt(`Enter you choice (type "stop" to stop)`);
    if(tea !== "stop"){
        arr.push(tea);
    }
} while(tea !== "stop");