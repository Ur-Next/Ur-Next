import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./config";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [authContext, setAuthContext] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setAuthContext({ uid: "", isAdmin: false, email: "" });
            setAuthContext({ uid: "", isAdmin: false, unit: "", email: "" });
        });
    }, []);

    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}

function useAuth() {
    return useContext(AuthContext);
}

function useLogin() {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(() => {
            setFormData({ email: "", password: "" });
        })
        .catch(() => {
            setIsInvalidEmailOrPassword(true);
        });
}

export default AuthContextProvider;
export { useAuth };
