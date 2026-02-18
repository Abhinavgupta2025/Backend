const mongoose = require('mongoose');

async function main() {
  await mongoose.connect("mongodb+srv://Thursday1878:F7F1gQOBFEWXfhkW@cluster0.pvfvnwy.mongodb.net/BookStore");
  console.log("Connected to DB");

  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    gender: String
  });

  const User = mongoose.model("Sattebaz", userSchema);

  const user1 = new User({
    name: "Abhinav",
    age: 20,
    city: "Dharamshala",
    gender: "Male"
  });

  await user1.save();

  await User.create({
    name: "Ansh",
    age: 18,
    city: "Uttarakhand"
  });
  await User.insertMany([{name:"karan",age:23,city:"Bhopal"},{name:"Dholku",age:20,ciyt:"Nainital"}]);
  console.log("Data saved!");
}

main().catch(console.log);
