import { logout } from "../firebase/AuthContextProvider";

function Header () {
    return (
       
        <div id="headerContainer">
            <img id="logo" src="./img/Logo_urnext_400.png" alt="Logo Urnext"></img>
            <div id="logout" onClick={logout}>Logout</div>
        </div>
    )
};


export default Header;