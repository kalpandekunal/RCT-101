import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Login(){
    const { isAuth,login } = useContext(AuthContext);

    return <div>
        <h1>Login Page</h1>
        <button disabled={isAuth} onClick={login}>LOGIN</button>
    </div>
}

export default Login;