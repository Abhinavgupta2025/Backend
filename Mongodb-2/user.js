const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
       firstName:{
            type: "String",
            required : true
       },
       lastName:{
          type: "String"
       },
       age:{
           type: "Number",
           min : 15,
           max: 70
       },
       emailID:{
            type: "String",
            required: true
       },
       passWord:{
            type:"String",
            required: true
       }

});

const User = mongoose.model("user", userSchema);

module.exports = User;