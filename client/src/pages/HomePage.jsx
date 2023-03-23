import LineBlock from "../components/LineBlock";
import Header from "../components/Header";
import { logout } from "../firebase/AuthContextProvider";


function HomePage () {
    return (
        <div id="mainContainer">
            < Header />
            < LineBlock />
            < LineBlock />
            <button onClick={logout}>Logout</button>
        </div>
    )
};


export default HomePage;