import { useState } from 'react';
// import { sendNotificationSMS, sendRegistrationSMS } from '../../../server/twilio/twilio'; //OUTSIDE THE PROJECT (moved in, tons of errors - environment not set up)
// const ObjectId = require("mongodb").ObjectId;



function Users ({user,index}) {
    
    const [editBtn, setEditButton] = useState('Edit');
    const [userNotified, setNotified] = useState('false');
    
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
    };

    //DONE BUTTON (delete patient, changes status of one of 3 users, who needs to be notified, POSTs 'done patient' to the db with completed tasks)

        //delete patient from the queue

        //send notifications to NEXT patients
    function petientDone () {

        console.log(`index: ${index+1} is done`);

        if ((index+2) <= 3 && userNotified == 'false')
            {
            // sendNotificationSMS(nextPatient phone);

                fetch(`http://localhost:3002//user/`), {

                    //update user, including 'notified' to true
                }
                setNotified = 'true';
            }
    }

        

    return (
       
           <div id="wrapper">
            <div id="dataGroup">
                <div id="numberInLine" >{index+1}</div>
                <p type="text" className="textTypeData">{user.firstName}</p>
                <p type="text" className="textTypeData">{user.lastName}</p>
                <p type="time" id="time" >{user.appointmentTime}</p>
                <p type="tel" className="textTypeData" >{user.phone}</p>
                <p type="text" className="textTypeData">{user.symptoms}</p>
                <button id="submit"  disabled>{editBtn}</button>  
                <button id="buttonDone" onClick={petientDone}>Done</button>  
                <button id="buttonDel" onClick={DeletePatient}>X</button>
            </div>

            </div>

    )
};


export default Users;