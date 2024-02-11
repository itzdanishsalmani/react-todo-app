const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb+srv://salmanidanish488:passwordnew@cluster0.vhfr2wr.mongodb.net/todo-app-react2");

const todoSchema = mongoose.Schema({
    title:String,
    description:String
})

const todo = mongoose.model("todos",todoSchema)

module.exports = {
    todo
}