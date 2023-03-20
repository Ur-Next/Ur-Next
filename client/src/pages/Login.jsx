import { useState } from "react";
import { login } from "../firebase/AuthContextProvider";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    function handleFormDataChange(e) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        login(formData.email, formData.password).then(() => {
            setFormData({ email: "", password: "" });
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            Login
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormDataChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleFormDataChange} />
            <button>Login</button>
        </form>
    );
}

export default Login;
