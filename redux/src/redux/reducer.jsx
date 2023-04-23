import { ADD, REDUCE } from "./actionType";

export const reducer = (state,{type,payload})=>{
    switch(type){
        case ADD :
            return {...state,counter: state + payload}
        case REDUCE :
            return {...state,counter: state - payload}
        
            default :
            return state;
    }
}