import React from "react";

const Timer = ()=>{
    const [count,setCount] = React.useState(5);

    React.useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCount((prevCount)=>{
                if(prevCount===1){
                    clearInterval(intervalId);
                    return 0;
                    
                }
               return  prevCount-1;
            });
        },1000)
    },[]);


    return (
        <h1>Timer :{count}</h1>
    )
}

export default Timer;