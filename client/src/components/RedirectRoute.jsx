import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../firebase/AuthContextProvider";

function RedirectRoute() {
    const user = useAuth();
    return user.uid ? <Navigate to="/" /> : <Outlet />;
}

export default RedirectRoute;
