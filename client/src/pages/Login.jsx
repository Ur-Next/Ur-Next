import { useState } from "react";
import { login } from "../firebase/AuthContextProvider";
import { Link } from "react-router-dom";

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
        <div id="loginContainer">
            <form onSubmit={handleFormSubmit}>
                {/* <p id="loginLabel">Login</p> */}
                <input class="loginInput" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormDataChange} />
                <input class="loginInput" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleFormDataChange} />
                <div id="loginBtn">Login</div>
                <Link id="forgotPass" to="/forgotPassword">Forgot Password?</Link>
            </form>
        </div>
    );
}

export default Login;
