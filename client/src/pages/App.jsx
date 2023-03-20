import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import ForgotPassword from "./ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import RedirectRoute from "../components/RedirectRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route index element={<Main />} />
                </Route>

                <Route path="/login" element={<RedirectRoute />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path="/forgotPassword" element={<RedirectRoute />}>
                    <Route index element={<ForgotPassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
