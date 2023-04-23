import axios from "axios";
import './App.css';
import {useEffect} from "react";

function App() {

  useEffect(()=>{
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/users`,{
    //     params: {
    //       id:2
    //     }
    //   })
    //   .then((res)=> console.log(res))
    //   .catch((err)=> console.log(err))

    // axios 
    //     .post(`https://jsonplaceholder.typicode.com/posts`,{
    //       userId:1,
    //       title:"Some title",
    //       body:"Some thing"
    //     })
    //     .then((res)=>console.log(res));

    // axios({
    //   methid:"post",
    //   url:`https://jsonplaceholder.typicode.com/posts`,
    //   data:{
    //     userId:1,
    //     title:"Some title",
    //     body:"Some thing"
    //   }
    // }).then((res)=>console.log(res))
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
