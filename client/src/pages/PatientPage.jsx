
function Patient () {

    return (
        <>
        <img className="logoGrayedOut" src="./img/Logo_urnext_400.png" alt="Logo Urnext"></img>
        <div id="patientMainContainer">
            <p className="messageText">Your estimate appointment time</p>
            <div id="timeAppointment">10:25</div>
            {/* <p className="messageText">Patients in the line ahead of you</p> */}
            {/* <div id="count">2</div> */}
            <p id="readyMessage">You are Next!</p>
            {/* <p className="messageText">Estimated time remaining {" __ "} min</p> */}
            <p className="messageText">Please get prepared - you are next in the line</p>
        </div>
        </>
    )
};

export default Patient;