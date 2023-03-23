function FilledBlock () {
    return (
       <div id="lineContainer">
            <div id="lineBlock">
                <div id="numberInLine">1</div>
                <p type="text" className="input" placeholder="First name" required>John</p>
                <p type="text" className="input" placeholder="Last name">Smith</p>
                <p type='time' id="time" placeholder="Time of appointment" required>10:20 AM</p>
                <p type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input" placeholder="Tel." required>555-555-55-55</p>
                <p type="text" className="input" placeholder="Symptoms">cough</p>

                <button id="submit" disabled>Submit</button>  
            </div>
            <div id="buttonDel">X</div>
        </div>
    )
};


export default FilledBlock;