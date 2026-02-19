const express = require("express");
const app = express();
const main = require("./mongoose.js");
const User = require("./users.js");

app.use(express.json());   // parse JSON body

// ✅ READ ALL USERS
app.get("/users", async (req, res) => {
  const data = await User.find({});
  res.json(data);
});

// ✅ READ SINGLE USER
app.get("/users/:id", async (req, res) => {
  const data = await User.findById(req.params.id);
  res.json(data);
});

// ✅ CREATE USER
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

// ✅ UPDATE USER
app.put("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send("User updated successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

// ✅ DELETE USER
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

// CONNECT DB & START SERVER
main()
  .then(() => {
    console.log("Connected to DB");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => console.log(err));
