function LineBlock () {
    return (
        <div id="formContainer">
            <div id="lineContainer">
                <div id="lineBlock">
                    <div id="numberInLine" hidden >""</div>
                    <input type="text" className="input" placeholder="First name" required></input>
                    <input type="text" className="input" placeholder="Last name"></input>
                    <input type='time' id="time" placeholder="Time of appointment" required></input>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input" placeholder="Tel." required></input>
                    <input type="text" className="input" placeholder="Symptoms"></input>

                    {/* <form action="#______________">
                            <select name="status" id="selectOptions">
                                <option value="blank"></option>
                                <option value="canceled">Canceled</option>
                                <option value="done">Done</option>
                            </select>
                    </form> */}

                    <button className="submit">Submit</button>  
                </div>
                <div id="buttonDel">X</div>
            </div>
        </div>
    )
};


export default LineBlock;