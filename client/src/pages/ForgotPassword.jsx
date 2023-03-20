import { resetPassword } from "../firebase/AuthContextProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [formData, setFormData] = useState({ email: "" });

    function handleFormDataChange(e) {
        setFormData({ email: e.target.value });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        resetPassword(formData.email).then(() => {
            setFormData({ email: "" });
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            Enter your email
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormDataChange} />
            <button>Reset Password</button>
            <Link to="/login">Return to Login</Link>
        </form>
    );
}

export default ForgotPassword;
