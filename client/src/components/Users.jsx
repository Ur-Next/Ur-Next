import { useState, useEffect } from 'react';
import RefreshData from './RefreshData.jsx';
// import { sendNotificationSMS, sendRegistrationSMS } from '../../../server/twilio/twilio'; //OUTSIDE THE PROJECT (moved in, tons of errors - environment not set up)



function Users ({user,index}) {
    

        //AUTOMATIC NOTIFICATIONS TO 5 FIRST USERS
    if (index+1 <= 6 && user.notified === false) {
        // user.appointmentDate === true && 

        // sendNotificationSMS(user.phone);

        //fetch and update to user.notified =true
    }

    

    // DELETE PATIENTS
    function DeletePatient () {

        console.log(user._id);

        fetch(`http://localhost:3002//user/:id/`+ { _id: `${user._id}` }, {
            method: 'DELETE'})
            .then(response => response.json())
            .then(data => {
            console.log('Patient deleted successfully', data);
            })
            .catch(error => {
            console.error('Error deleting Patient', error);
            });

        RefreshData();
    };


        //DONE BUTTON
    function PetientDone () {

      //POST, not 'user.done to true', because the patient will be deleted right after the update. separate endpoint is needed?
        // fetch

        //delete patient 

        //redraw the ui
        RefreshData();
    };

  
  
    return (
       
           <div id="wrapper">
            <div id="dataGroup">
                <div id="numberInLine" >{index+1}</div>
                <p type="text" className="textTypeData">{user.firstName}</p>
                <p type="text" className="textTypeData">{user.lastName}</p>
                <p type="time" id="time" >{user.appointmentTime}</p>
                <p type="tel" className="textTypeData" >{user.phone}</p>
                <p type="text" className="textTypeData">{user.symptoms}</p>
                <button id="submit">Submit</button>  
                <button id="buttonDone" onClick={PetientDone}>Done</button>  
                <button id="buttonDel" onClick={DeletePatient}>X</button>
            </div>

            </div>

    )
};


export default Users;