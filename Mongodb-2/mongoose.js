const mongoose = require('mongoose');
const {Schema} = mongoose;
async function main() {
  await mongoose.connect("mongodb+srv://Thursday1878:F7F1gQOBFEWXfhkW@cluster0.pvfvnwy.mongodb.net/Instagram");
}

main().catch(console.log);
module.exports = main;