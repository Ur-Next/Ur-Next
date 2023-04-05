
import { useState, useEffect } from 'react';


function InfoForPatient () {
    
    // const [usersData, setUsersData] = useState([]);
    const [appointmentTime, setAppointmentTime] = useState([]);
    
    const userId = '6426e467d26cef4f2ce4b07f';
    
    useEffect(() => {

        fetch("/users")
        .then((res) => res.json()
        .then ((usersData) => {
            
        const appointmentTime  = usersData.filter((x) => x._id === userId)[0].appointmentTime;
        
        const timeRemaining = new Date()
        console.log('Time is ', timeRemaining);

            setAppointmentTime(appointmentTime)

        }))},[]);


        
        
    return (
        <>
            <img className="logoGrayedOut" src="./img/Logo_urnext_400.png" alt="Logo Urnext"></img>


            <div id="patientMainContainer">
                <p className="messageText">Your estimate appointment time</p>
                <div id="timeAppointment">{appointmentTime}</div>
                <p className="messageText">Patients in the line ahead of you</p>
                <div id="count">2</div>
                <p className="messageText">Estimated time remaining {" __ "} min</p>

            </div>

            <div id="patientMainContainer">
                <p className="messageText">Your estimate appointment time</p>
                <div id="timeAppointment">{appointmentTime}</div>
                <p id="readyMessage">You are Next!</p>
                <p className="messageText">Please get prepared - you are next in the line</p>
            </div>
        </>
    )
};

export default InfoForPatient;