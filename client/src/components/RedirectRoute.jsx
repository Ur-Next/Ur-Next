import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../firebase/AuthContextProvider";

function RedirectRoute() {
    const user = useAuth();
    return user.uid ? <Navigate to="/home" /> : <Outlet />;
}

export default RedirectRoute;
