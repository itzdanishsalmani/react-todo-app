import { useState } from "react"
//exporting new method
export function CreateTodo(props) {
    //react-query
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("")
    return <div>
        <input style={{
            margin:10,
            padding:10
        }} 
        type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} />

        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }} />
    
        <button style={{
            margin:10,
            padding:10
        }} onClick={()=>{
            fetch('http://localhost:3300/todo',{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo added")
            })
        }}
        >Add a todo</button>
    </div>
}

