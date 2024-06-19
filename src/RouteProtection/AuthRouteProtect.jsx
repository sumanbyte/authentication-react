import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthRouteProtect = () => {
    const { loggedIn, loading } = useAuth();

    if(loading){
        return <div>Loading...</div>
    }

    return (
        loggedIn ? <Navigate to={"/"} /> : <Outlet />
    )
}

export default AuthRouteProtect;