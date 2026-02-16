 const fs = require("fs");
 const filepath = "./tasks.json";

 const loadTask = ()=>{
        try{
              const dataBuffer = fs.readFileSync(filepath);
              const dataJson = dataBuffer.toString();
              return JSON.parse(dataJson);
        }
        catch(error){
            return []; 
        }
 }
const addTask = (task)=>{
       const tasks = loadTask();
       tasks.push(task);
       fs.writeFileSync(filepath, JSON.stringify(tasks)); // 3. Save to file
       console.log("Task added successfully");
}
 const command = process.argv[2];
 const argument = process.argv[3];
 if(command === 'add'){
        addTask(argument);
 }
 else if(command === 'list'){
        listTasks();
 }
 else if(command === 'remove'){
    removeTask(parseInt(argument));
 }
 else{
        console.log("command not found");
 }