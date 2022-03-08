import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "./UserContext";

const PrivateRoute=()=>{  // route privada - se accede solo al estar logeado

    const user = useContext(UserContext);

    return user.activeLogin ? <Outlet/> : <Navigate to='/login'/>;
}
export default PrivateRoute;