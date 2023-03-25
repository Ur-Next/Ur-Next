import { useState } from "react";


function Form () {
    const [formData, setFormData] = useState({ firstName:"", lastName:"", phone:"", email:"", symptoms:"" });

    function handleFormDataChange(e) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch('/user', {
            method:'POST',
            body:JSON.stringify(formData),
            headers: { "Content-Type": "application/json"}})
    };

    return (
        <div id="formWrapper">
            <div id="form">
                <input type="text" className="textTypeData" placeholder="First name" name='firstName' required value={formData.firstName} onChange={handleFormDataChange}></input>
                <input type="text" className="textTypeData" placeholder="Last name"name='lastName' value={formData.lastName} onChange={handleFormDataChange}></input>
                <input type='date' className="dateTime" name="date" required></input>
                <input type='time' className="dateTime" required></input>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="textTypeData" name='phone' placeholder="Tel." required value={formData.phone}onChange={handleFormDataChange}></input>
                <input type="email" className="textTypeData" placeholder="Email" name='email' required value={formData.email}onChange={handleFormDataChange}></input>
                <input type="text" className="textTypeData" placeholder="Symptoms"></input>
                <button id="buttonSubmit" onClick={handleFormSubmit}>Submit</button>  
            </div>
        </div>
    )
};


export default Form;