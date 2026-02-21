 const validator = require("validator");
 function validateUser(data){
        const mandatoryField = ["firstName","emailID","age","passWord"]

        const IsAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k));

        if(!IsAllowed)
            throw new Error("Fields Missing");
        if(!validator.isEmail(data.emailID)){
            throw new Error("Invalid Email");
        }
        if(!validator.isStrongPassword(data.passWord)){
            throw new Error("weak Password");
        }
        if(!(data.firstName.length>3 && data.firstName.length<=20)){
            throw new Error("First Name length should be atleast 3 and max Length should be 20"); 
        }
    }
    module.exports = validateUser;