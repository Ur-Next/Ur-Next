function LineBlock () {
    return (
        <div id="formContainer">
            <div id="lineContainer">
                <div id="lineBlock">
                    {/* <input id="numberInLine" hidden></input> */}
                    <input type="text" className="input" placeholder="First name" required></input>
                    <input type="text" className="input" placeholder="Last name"></input>
                    <input type='date' id="date" required></input>
                    <input type='time' id="time" required></input>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input" placeholder="Tel." required></input>
                    <input type="email" className="input" placeholder="Email" required></input>
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
            </div>
        </div>
    )
};


export default LineBlock;