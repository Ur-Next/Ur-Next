import { useState } from 'react';



function Users ({user,index}) {

    const [editBtn, setEditButton] = useState('Edit');

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
                <button id="buttonDel" >X</button>
            </div>

            </div>

    )
};


export default Users;