import { useState } from "react";
import { login } from "../firebase/AuthContextProvider";
import { Link } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    function handleFormDataChange(e) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        login(formData.email, formData.password)
            .then(() => {
                setFormData({ email: "", password: "" });
            })
            .catch((err) => {
                setErrorMessage("Invalid email or password");
            });
    }

    return (
        <div id="loginContainer">
            <img src="./img/Logo_circles_90.png" alt="UrNext logo element" />
            <form onSubmit={handleFormSubmit}>
                <input className="loginInput" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormDataChange} />
                <input className="loginInput" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleFormDataChange} />
                <p>{errorMessage}</p>
                <button className="loginBtn">Login</button>
                <Link className="forgotPass" to="/forgotPassword">
                    Forgot Password?
                </Link>
            </form>
        </div>
    );
}

export default Login;
