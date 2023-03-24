import { logout } from "../firebase/AuthContextProvider";

function Main() {
    return (
        <div>
            <div id="logout" onClick={logout}>Logout</div>
        </div>
    );
}

export default Main;
