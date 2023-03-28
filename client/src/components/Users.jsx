import { useState } from 'react';
// const ObjectId = require("mongodb").ObjectId;


        // DELETE PATIENTS - CLIENT SIDE

function Users ({user,index}) {

    const [editBtn, setEditButton] = useState('Edit');

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
                <button id="buttonDone" >Done</button>  
                <button id="buttonDel" onClick={DeletePatient}>X</button>
            </div>

            </div>

    )
};


export default Users;