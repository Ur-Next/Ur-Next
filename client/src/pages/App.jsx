import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import ForgotPassword from "./ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import RedirectRoute from "../components/RedirectRoute";
import PatientPage from "./PatientPage";
import MainPage from "./MainPage";
import AllPatientsDataPage from "./AllPatientsDataPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<MainPage />} />

                <Route path="/home" element={<ProtectedRoute />}>
                    <Route index element={<HomePage />} />
                    <Route path="allPatients" element={<AllPatientsDataPage />} />
                </Route>

                <Route path="/login" element={<RedirectRoute />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path="/forgotPassword" element={<RedirectRoute />}>
                    <Route index element={<ForgotPassword />} />
                </Route>

                <Route path="/patient" element={<PatientPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
