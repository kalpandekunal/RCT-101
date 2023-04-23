import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";


function PrivateRouter({children}){

    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login" />
    }

    return children
}

export default PrivateRouter;