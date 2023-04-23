import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const getData = async (url) =>{
    const res = await fetch(url);
    return await res.json();
};


function UserPage(){
    const { user_id } = useParams();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [user,setUser] = useState([]);


    const fetchData = ()=>{
        setLoading(true);
        getData(`https://reqres.in/api/users/${user_id}`)
        .then((res)=>{
            setUser(res.data)
            
        })
        .catch((err)=>{
        console.log(err)
        setError(true) })
        .finally(()=>setLoading(false));
    }

    useEffect(()=>{
        fetchData();
    },[]);


    return loading ? <h1>Loading...</h1> : error ? (<h1>Something went wrong....please refresh</h1>) : (
    <div key={user.id} style={{border:"1px solid black",padding:"20px",margin:"20px"}}>
        <img src={user.avatar}  alt={user.first_name}/>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <p>{user.email}</p>
        <p>ID : {user.id}</p>
    </div>
    )
}

export default UserPage;