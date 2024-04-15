const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb://localhost:27017/Todo-app");
//changer this to your mongoDb link to get connected to your database

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}