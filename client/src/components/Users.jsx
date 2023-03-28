import { useState } from 'react';


        // DELETE PATIENTS - CLIENT SIDE

// function addDelEventListeners()
// {
//     const deleteBtns = document.querySelectorAll('.buttonDel');
    
//     for (let button of deleteBtns)
//         {   
//             console.log(e.target);
//             // button.addEventListener('click',(e)=>deletePatient(e.target));
//         }
    


      
// };

function Users ({user,index}) {

    const [editBtn, setEditButton] = useState('Edit');


    // function deletePatient(e)
    //     {
    //         // fetch('http://localhost:5555/artist/'+ e.value,{method:'delete'});
    //         console.log(e.target);
    //     } 

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
                {/* <button id="buttonDel" onClick={deletePatient}>X</button> */}
            </div>

            </div>

    )
};


export default Users;