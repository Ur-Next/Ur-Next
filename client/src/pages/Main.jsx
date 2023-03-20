import { logout } from "../firebase/AuthContextProvider";

function Main() {
    return (
        <>
            <div>Main</div>
            <button onClick={logout}>Logout</button>
        </>
    );
}

export default Main;
