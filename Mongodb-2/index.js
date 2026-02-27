const express = require("express");
const app = express();
const main = require("./mongoose");
const User = require("./user");
const validateUser = require("./utils/Validateuser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const redisClient = require("./redis.js"); 
app.use(express.json());
app.use(cookieParser());   // allows reading cookies

const SECRET = "shhhhh";   // JWT secret


// 🔹 REGISTER
app.post("/register", async (req, res) => {
  try {
    validateUser(req.body);

    // hash password
    req.body.passWord = await bcrypt.hash(req.body.passWord, 10);

    await User.create(req.body);

    res.send("User Registered Successfully");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});


// 🔹 LOGIN
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ emailID: req.body.emailID });

    if (!user) {
      throw new Error("User not found");
    }

    // compare password
    const isAllowed = await bcrypt.compare(
      req.body.passWord,
      user.passWord
    );

    if (!isAllowed) throw new Error("Invalid Password");

    // create JWT
    const token = jwt.sign(
      { id: user._id, email: user.emailID },
      SECRET
    );

    // store token in cookie
    res.cookie("token", token);

    res.send("Login Successful");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.post("/Logout",async(req,res)=>{
   try{
      const {token} = req.cookies;
      await redisClient.set('token:${token}',"Blocked");
      const paylod = jwt.decode(token);
      // await redisClient.expire('token${token}',1800); current time se itne tk valid rhega
      await redisClient.expireAt('token${token}',payload.exp); // 1 jan 1970 se ab tk expire hoga time jitna bcha hoga
        
      res.send("Logged out succesffulY ")
   }
   catch(err){
      res.send("err" + err.message);
   }
})

// 🔹 GET ALL USERS
app.get("/info", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});


// 🔹 GET CURRENT LOGGED-IN USER
app.get("/user", async (req, res) => {
  try {
    const token = req.cookies.token;   // read cookie

    if (!token) throw new Error("Please login first");

    const payload = jwt.verify(token, SECRET);

    const result = await User.findById(payload.id);
    const isBlocked = await redisClient.exists('token:${token}');
    if(isBlocked){
      throw new err("Invalid Token");
    }
    res.send(result);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});


// 🔹 DELETE USER
app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("Deleted Successfully");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});


// 🔹 UPDATE USER
app.patch("/user", async (req, res) => {
  try {
    const { _id, ...update } = req.body;

    await User.findByIdAndUpdate(_id, update, {
      runValidators: true,
    });

    res.send("Updated Successfully");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});
 

const init = async()=>{
    try{
        // await redisClient.connect();
        // console.log("connected to mongoDb");
        // await main();
        //  console.log("Connected to DB");
        await Promise.all([redisClient.connect(),main()]);
        app.listen(3000, () => {
        console.log("Server running on port 3000");
    });

    }
    catch(err){
       console.log("error" + err);
    }
}

 