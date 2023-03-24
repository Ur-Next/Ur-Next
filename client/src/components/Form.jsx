import { useState } from "react";


function Form () {
    const [formData, setFormData] = useState({firstName:'',lastName:'',phone:'', email: "", symptoms: "" });

    function handleFormDataChange(e) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch('/user',{method:'POST', body:JSON.stringify(formData),    headers: {
            "Content-Type": "application/json",
         
          }})
    
    }


    return (
        <div id="formContainer">
            <div id="lineContainer">
                <div id="lineBlock">
                    {/* <input id="numberInLine" hidden></input> */}
                    <input type="text" className="input" placeholder="First name" name='firstName' required value={formData.firstName} onChange={handleFormDataChange}></input>
                    <input type="text" className="input" placeholder="Last name"name='lastName' value={formData.lastName} onChange={handleFormDataChange}></input>
                    <input type='date' id="date"  name="date" required></input>
                    <input type='time' id="time" required></input>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input" name='phone' placeholder="Tel." required value={formData.phone}onChange={handleFormDataChange}></input>
                    <input type="email" className="input" placeholder="Email"name='email' required value={formData.email}onChange={handleFormDataChange}></input>
                    <input type="text" className="input" placeholder="Symptoms"></input>

                    {/* <div action="#______________">
                            <select name="status" id="selectOptions">
                                <option value="blank"></option>
                                <option value="canceled">Canceled</option>
                                <option value="done">Done</option>
                            </select>
                    </form> */}

                    <button className="submit" onClick={handleFormSubmit}>Submit</button>  
                </div>
            </div>
        </div>
    )
};


export default Form;