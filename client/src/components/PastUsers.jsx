import { useState, useEffect } from "react";


function PastUsers({ user, index }) {
    return (
        <div id="wrapper">
            <div id="dataGroup">
                <div id="numberInLine">{index + 1}</div>
                <p className="textTypeData">{user.firstName}</p>
                <p className="textTypeData">{user.lastName}</p>
                <p>{user.appointmentDate}</p>
                <p>{user.appointmentTime}</p>
                <p className="textTypeData">{user.phone}</p>
                <p className="textTypeData">{user.email}</p>
                <p className="textTypeData">{user.symptom}</p>
                <p className="textTypeData">{user.done ? "Done" : "Not done"}</p>
            </div>
        </div>
    );
}

export default PastUsers;
