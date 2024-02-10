const cors = require("cors");
const { todo } = require("./db")
const { addTodoSchema, updateSchema } = require("./types")
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    try {
        const todos = await todo.find(); // Retrieve all todos
        res.json({ todos });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/todo',async(req,res)=>{
    
    const createPayLoad = req.body;
    const parsePayLoad = addTodoSchema.safeParse(createPayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
          msg:"You send wrong input"  
        })
        return;
    }
    //adding data into db
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:"Todo created successfully"
    })

});

app.put("/todos/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const updatedTodo = await todo.findByIdAndUpdate(
            todoId,
            { completed: true },
            { new: true } // To return the updated todo
        );
        
        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.json({ msg: "Todo marked as completed" });
    } catch (error) {
        console.error("Error marking todo as completed:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

app.listen(3300);