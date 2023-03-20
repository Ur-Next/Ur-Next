import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes path="/" element={<ProtectedRoute />}>
                <Route index element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
