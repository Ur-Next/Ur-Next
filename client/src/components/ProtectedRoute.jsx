import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../firebase/AuthContextProvider";

function ProtectedRoute() {
    const user = useAuth();
    return user.uid ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
