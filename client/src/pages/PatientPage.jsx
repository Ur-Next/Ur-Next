import { useState } from "react";

function InfoForPatient() {
    const [userTel, setUserTel] = useState("");
    const [responseData, setResponseData] = useState({ appointmentTime: "", peopleAhead: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormShown, setIsFormShown] = useState(true);

    function handleSubmitTel(e) {
        e.preventDefault();

        fetch(`/user/${userTel}`)
            .then((res) => res.json())
            .then((usersData) => {
                if (usersData.errorMessage) {
                    setErrorMessage(usersData.errorMessage);
                } else {
                    console.log("SERVER's RESPONSE: ", usersData);

                    setResponseData({ appointmentTime: usersData.appointmentTime, peopleAhead: usersData.peopleAhead });

                    console.log("CHECK if STATE was set correctly:", responseData.appointmentTime, responseData.peopleAhead);

                    setIsFormShown(false);
                }
            });
    }

    function handleFormChange(e) {
        setUserTel(e.target.value);
    }

    return (
        <>
            <img className="logoGrayedOut" src="./img/Logo_urnext_400.png" alt="Logo Urnext"></img>

            <div className="patientMainContainer">
                {isFormShown ? (
                    <form id="mainForm">
                        <p className="messageText">
                            <b>Enter your phone number</b>
                            <br />
                            to see when you are going to be admitted
                        </p>
                        <input id="inputTel" type="tel" placeholder="xxxxxxxxxx" onChange={handleFormChange} value={userTel}></input>
                        <p>{errorMessage}</p>
                        <button type="submit" onClick={handleSubmitTel}>
                            Submit
                        </button>
                    </form>
                ) : parseInt(responseData.peopleAhead) > 1 ? (
                    <>
                        <p className="messageText">Your estimate appointment time</p>
                        <div id="timeAppointment">{responseData.appointmentTime}</div>
                        <p className="messageText">Patients in the line ahead of you</p>
                        <div id="count">{responseData.peopleAhead}</div>
                        <p className="messageText">Estimated time remaining {responseData.peopleAhead * 15} mins</p>
                    </>
                ) : (
                    <>
                        <p className="messageText">Your estimate appointment time</p>
                        <div id="timeAppointment">{responseData.appointmentTime}</div>
                        <p id="readyMessage">You are Next!</p>
                        <p className="messageText">
                            You are next in the line
                            <br />
                            Please get prepared
                        </p>
                    </>
                )}
            </div>
        </>
    );
}

export default InfoForPatient;
