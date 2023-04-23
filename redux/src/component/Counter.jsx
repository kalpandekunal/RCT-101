import { useDispatch, useSelector } from "react-redux";
import { addAction,reduceAction } from "../redux/action";

export const Counter= ()=>{
    const data = useSelector((store)=>store.counter);
    const dispatch = useDispatch();

    const handleAdd = ()=>{
        dispatch(addAction(1));
    }

    const handleReduce = ()=>{
        dispatch(reduceAction(1));
    }

    return(
        <>
            <h1>Counter :{data} </h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </>
    )
}