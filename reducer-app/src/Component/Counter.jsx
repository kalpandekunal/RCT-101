import {useReducer} from "react";

const reducerFun = (state,{type,payload=1}) =>{
    switch(type) {
        case "INC":{
            return state + payload;
        }
        case "DEC": {
            return state - payload;
        }
        default : {
            return state;
        }
    }
    // if(action.type === "INC"){
    //     return state + 1;
    // }
    // else if(action.type === "DEC"){
    //     return state - 1;
    // }
    // else{
    //     return state;
    // }
}

const Counter = () =>{
    //const [count,setCount] = useState(0);
    const [count,dispatch] = useReducer(reducerFun,0);


    return (
        <div>
            <h1>Count :{count}</h1>
            <div>
                <span>By 1</span>
                <button onClick={()=>dispatch({type:"INC"})}>INC</button>
                <button  onClick={()=>dispatch({type:"DEC"})}>DEC</button>
            </div>
            <div>
                <span>By 20</span>
                <button onClick={()=>dispatch({type:"INC",payload:20})}>INC</button>
                <button  onClick={()=>dispatch({type:"DEC",payload:20})}>DEC</button>
            </div>
            
        </div>
    )
}

export default Counter;