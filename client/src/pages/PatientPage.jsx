import { useState } from "react";



function InfoForPatient() {

  const [userTel, setUserTel] = useState("");
  const [responseData, setResponseData] = useState({appointmentTime: "", peopleAhead: ""});
  const [isFormShown, setIsFormShown] = useState(true);



  function handleSubmitTel() {
    fetch(`/users/${userTel}`).then((res) =>
      res.json().then((usersData) => {

        setResponseData({ appointmentTime: usersData.appointmentTime, peopleAhead: usersData.peopleAhead });
        setIsFormShown(false);
      })
    );
  };

  function handleFormChange(e) {
    setUserTel(e.target.value);
  }

  return (
    <>
      <img className="logoGrayedOut" src="./img/Logo_urnext_400.png" alt="Logo Urnext"></img>
      
      {isFormShown ?

        <form class="patientMainContainer">
          <p className="messageText">Enter your phone number<br />to see when you are going to be admitted</p>
          <input type="tel" placeholder="xxxxxxxxxx" onChange={handleFormChange} value={userTel}></input>
          <button type="submit" onClick={handleSubmitTel}>Submit</button>
        </form>
      :
        <div class="patientMainContainer">
          <p className="messageText">Your estimate appointment time</p>
          <div id="timeAppointment">{responseData.appointmentTime}</div>
          <p className="messageText">Patients in the line ahead of you</p>
          <div id="count">{responseData.peopleAhead}</div>
          <p className="messageText">Estimated time remaining {" __ "} min</p>
        </div>
      }

      {/* <div id="patientMainContainer">
                <p className="messageText">Your estimate appointment time</p>
                <div id="timeAppointment">{appointmentTime}</div>
                <p id="readyMessage">You are Next!</p>
                <p className="messageText">Please get prepared - you are next in the line</p>
            </div> */}
    </>
  );
}

export default InfoForPatient;
