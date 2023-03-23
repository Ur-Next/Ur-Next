import { logout } from "../firebase/AuthContextProvider";

function Header () {
    return (
       
        <div id="headerContainer">
            <a href="_________________"><img id="logo" src="./images/Logo_urnext_400.png" alt="Logo Urnext"></img></a>
            <div id="logout" onClick={logout}>Logout</div>
        </div>
    )
};


export default Header;