import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Users from '../pages/Users';
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRoute";

function Allroutes(){
    return (
        <Routes>
        <Route path="/" element={
        <PrivateRouter>
            <Home />
        </PrivateRouter>
        }/>

        <Route path="/about" element={
        <PrivateRouter>
            <About />
        </PrivateRouter>
        }/>

        <Route path="/contact" element={<Contact />}/>
        
        <Route path="/users" element={
        <PrivateRouter>
            <Users />
        </PrivateRouter>
        }/>
        
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:user_id" element={<UserPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    )
}

export default Allroutes;