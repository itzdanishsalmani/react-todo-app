const cors = require("cors");
const { todo } = require("./db")
const { addTodoSchema } = require("./types")
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

app.listen(3300);