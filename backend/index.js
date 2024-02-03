const cors = require("cors");
const { todo } = require("./db")
const { addTodoSchema, updateSchema } = require("./types")
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());


app.get('/todos',async(req,res)=>{
    const todos = await todo.find({ //db always return promise
    });
    res.json({
        todos
    })

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

app.put("/completed",async(req,res)=>{
    const updatePayLoad = req.body;
    const parsePayLoad = updateSchema.safeParse(updatePayLoad);

    if (!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong input"
        })
        return;
    }
    await todo.update({ //1st bracket condition
        _id:req.body.id
    }),{
        completed:true //function
    }
    res.json({
        msg:"Todo marked as completed"
    })

})


app.listen(3000);