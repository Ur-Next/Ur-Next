function LineBlock () {
    return (
       
        <div id="lineBlock">
            <div id="numberInLine">1</div>
            <input type="text" id="firstName" placeholder="First name" required></input>
            <input type="text" id="lastName" placeholder="Last name"></input>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="tel" placeholder="Tel." required></input>
            <input type='time' id="time" placeholder="Time of appointment" required></input>
            <input type="text" id="symptoms" placeholder="Symptoms"></input>
            <form action="#______________">
                    <select name="status" id="selectOptions">
                        <option value="blank"></option>
                        <option value="canceled">Canceled</option>
                        <option value="done">Done</option>
                    </select>
            </form>
            <div id="buttonDel">X</div>
        </div>
    )
};


export default LineBlock;