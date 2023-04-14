import { resetPassword } from "../firebase/AuthContextProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [formData, setFormData] = useState({ email: "" });
    const [errorMessage, setErrorMessage] = useState("");

    function handleFormDataChange(e) {
        setFormData({ email: e.target.value });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        resetPassword(formData.email)
            .then(() => {
                setFormData({ email: "" });
            })
            .catch((err) => {
                setErrorMessage("Email not found");
            });
    }

    return (
        <div id="loginContainer">
            <form>
                <p id="enterEmailMessage">Enter your email</p>
                <input className="loginInput" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormDataChange} />
                <p>{errorMessage}</p>
                <div onClick={handleFormSubmit} className="loginBtn">
                    Reset Password
                </div>
                <Link className="forgotPass" to="/login">
                    Return to Login
                </Link>
            </form>
        </div>
    );
}

export default ForgotPassword;
