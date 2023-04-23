import {NavLink} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const links = [
    {to:"/", title:"Home"},
    {to:"/about",title:"About"},
    {to:"/contact",title:"Contact"},
    {to:"/login",title:"Login"},
    {to:"/users",title:"Users"}
];

function Navbar(){
    const defaultLinkStyle = {textDecoration:"none",color:"red"}
    const activeLinkStyle =  {textDecoration:"none",color:"teal"}
    const {isAuth} = useContext(AuthContext);

    return(
        <div
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-around"
        }}>
        {
            links.map((item)=>{
                return (<NavLink style={({isActive})=>{
                    return isActive ? defaultLinkStyle : activeLinkStyle
                }} key={item.to} to={item.to}>{item.title}</NavLink>);
            })
        }
        <p>IS USER AUTHENTICATED : {isAuth ? "YES" : "NO"}</p>
        </div>
    )
}

export default Navbar;