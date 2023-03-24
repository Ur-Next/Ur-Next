
function FilledBlock ({user,index}) {




    return (
       <div id="lineContainer">
            <div id="lineBlock">
                <div id="numberInLine">{index+1}</div>
                <p type="text" className="input" placeholder="First name" required>{user.firstName}</p>
                <p type="text" className="input" placeholder="Last name">{user.lastName}</p>
                <p type='time' id="time" placeholder="Time of appointment" required>{user.appointmentTime}</p>
                <p type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input" placeholder="Tel." required>{user.phone}</p>
                <p type="text" className="input" placeholder="Symptoms">{user.symptoms}</p>

                <button id="submit" disabled>Save</button>  
                <button id="submit" disabled>Done</button>  
            </div>
            <div id="buttonDel">X</div>
        </div>
    )
};


export default FilledBlock;