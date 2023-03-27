import { Link } from "react-router-dom";

function MainLogo () {
    return (
        <div id="mainPageContainer">
            <div id="mainlogo">
                <div className="layer bgColors"></div>
                <div className="layer bgCircles"></div>
                <div className="layer bgUrnext"></div>
                <div className="layer bgText"></div>
            </div>
               
                    <Link className="loginLink"  to="/login">Login</Link>
               
        </div>
    )
};

export default MainLogo;