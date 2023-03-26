import { Link } from "react-router-dom";

function MainLogo () {
    return (
        <>
            <div id="mainlogo">
                <div className="layer bgColors"></div>
                <div className="layer bgCircles"></div>
                <div className="layer bgUrnext"></div>
                <div className="layer bgText"></div>
                <Link className="layer loginLink" to="/login">Login</Link>
            </div>
        </>
    )
};

export default MainLogo;