import { logout } from "../firebase/AuthContextProvider";

function Main() {
    return (
        <>
            <div>Main</div>
            <div id="logout" onClick={logout}>Logout</div>
        </>
    );
}

export default Main;
