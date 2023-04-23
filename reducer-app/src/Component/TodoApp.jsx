import TodoInput from ""

function TodoApp(){
    const [todos,setTodos] = useState([]);

    const handleAdd = (value)=>{

        setTodos([...todos, {id : Date.now(),value,isCompleted: false}]);

    };

    const toggleStatus = (id) =>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        )
    }
    

    return (
        <div>
            <h1>Todos</h1>
            <TodoInput handleAdd={handleAdd}/>
            {
                todos.map((todo)=>{
                    <div key={todo.id} onClick={()=>toggleStatus(todo.id)}>
                        {todo.value} - {todo.isCompleted ? "Completes" : "Not Completed"}
                    </div>
                })
            }
            
        </div>
    )
}

export default TodoApp;