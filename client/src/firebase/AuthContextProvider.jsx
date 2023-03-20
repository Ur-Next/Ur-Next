import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./config";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [authContext, setAuthContext] = useState({ uid: "", email: "" });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && user.uid) {
                setAuthContext({ uid: user.uid, email: user.email });
            } else {
                setAuthContext({ uid: "", email: "" });
            }
        });
    }, []);

    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}

function useAuth() {
    return useContext(AuthContext);
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
    return signOut(auth);
}

function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
}

export default AuthContextProvider;
export { useAuth, login, logout, resetPassword };
