import {useState,useEffect} from "react";
import {Link,useNavigate,useSearchParams} from "react-router-dom";


const getData = async (url) =>{
    const res = await fetch(url);
    return await res.json();
};

const getCurrentPage = (page)=>{
     page = Number(page);

    if(typeof page !== "number" || page <= 0){
        page=1;
    }

    if(!page){
        page = 1;
    }

    return page;
}

function Users(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();
    const [searchParam,setSearchParam] = useSearchParams();

    const [page,setPage] = useState(getCurrentPage(searchParam.get("page")));

    const fetchData = (page)=>{
        setLoading(true);
        getData(`https://reqres.in/api/users?page=${page}`)
        .then((res)=>{
            setUsers(res.data)
            
        })
        .catch((err)=>{
        console.log(err)
        setError(true) })
        .finally(()=>setLoading(false));
    }

    useEffect(()=>{
        fetchData(page);
    },[page]);

    useEffect(()=>{
        setSearchParam({page:page});
    },[page]);

    const handlePageChange = (value)=>{
        const updatePage = page + value;
        setPage(updatePage);
    }

   console.log(searchParam.get("page"))
    return loading ? <h1>Loading...</h1> : error ? (<h1>Something went wrong....please refresh</h1>) : (
    <>
        <h1>Users Page</h1>
        {
            users.map((item)=> {
                return (
                    <div key={item.id} style={{margin:"10px",border:"1px solid black",padding:"10px"}}>
                    <img src={item.avatar} alt={item.first_name}/>
                    <p >{`${item.first_name} ${item.last_name}`}</p>
                    <Link to={`/users/${item.id}`}>More Info</Link>
                    </div>
                )
            })
        }
        <button onClick={ ()=>navigate(`/`)}>GO TO HOME PAGE</button>
        <br />
        <br />
        <button onClick={()=>handlePageChange(-1)}>PREV</button>
        <button disabled>{page}</button>
        <button onClick={()=>handlePageChange(1)}>NEXT</button>
    </>
    )
}

export default Users;