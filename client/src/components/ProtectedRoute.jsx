import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContextProvider";

function ProtectedRoute() {
    const admin = useAuth();
    return admin.uid && admin.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
