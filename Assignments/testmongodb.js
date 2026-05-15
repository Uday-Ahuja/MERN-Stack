import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/testDB");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// Insert
await User.create({ name: "Uday", age: 20 });

// Read
const data = await User.find();
console.log(data);