import { useState, useEffect } from "react";

function InfoForPatient() {
  const [userTel, setUserTel] = useState("");

  // const [usersData, setUsersData] = useState([]);
  const [responseData, setResponseData] = useState({
    appointmentTime: "",
    peopleAhead: "",
  });
  const [isFormShown, setIsFormShown] = useState(true);
  const userId = "6426e467d26cef4f2ce4b07f";

  // useEffect(() => {

  //     fetch("/users")
  //     .then((res) => res.json()
  //     .then ((usersData) => {

  //     const appointmentTime  = usersData.filter((x) => x._id === userId)[0].appointmentTime;

  //     const timeRemaining = new Date()
  //     console.log('Time is ', timeRemaining);

  //         setAppointmentTime(appointmentTime)

  //     }))},[]);

  function handleSubmitTel() {
    fetch(`/users/${userTel}`).then((res) =>
      res.json().then((usersData) => {
        setResponseData({
          appointmentTime: usersData.appointmentTime,
          peopleAhead: usersData.peopleAhead,
        });
      })
    );
  }

  function handleChange(e) {
    setUserTel(e.target.value);
  }

  return (
    <>
      <img
        className="logoGrayedOut"
        src="./img/Logo_urnext_400.png"
        alt="Logo Urnext"
      ></img>
      {isFormShown ? (
        <form id="patientTelInput">
          <input type="tel" onChange={handleChange} value={userTel}></input>
          <button type="submit" onClick={handleSubmitTel}>
            submit
          </button>
        </form>
      ) : (
        <div id="patientMainContainer">
          <p className="messageText">Your estimate appointment time</p>
          <div id="timeAppointment">{responseData.appointmentTime}</div>
          <p className="messageText">Patients in the line ahead of you</p>
          <div id="count">{responseData.peopleAhead}</div>
          <p className="messageText">Estimated time remaining {" __ "} min</p>
        </div>
      )}

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
