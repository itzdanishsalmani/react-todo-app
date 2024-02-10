//todos is an array
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
function ClickMe(){
    
}

export function Todos({todos}) {
//it always return one top level parent here is div
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={ClickMe}>{todo.completed = "Mark as Complete" }</button>
            </div>
        })}
    </div>
}