import { useState } from "react";

function Form({ toggleRerender }) {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", symptom: "", appointmentDate: "", appointmentTime: "" });

    function handleFormDataChange(e) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch("/user", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.text())
            .then((data) => {
                toggleRerender();
                setFormData({ firstName: "", lastName: "", phone: "", email: "", symptom: "", appointmentDate: "", appointmentTime: "" });
            })
            .catch((err) => {
                console.log(err);
                window.alert("Something's wrong. Please try again.");
            });
    }

    return (
        <div id="formWrapper">
            <form id="form">
                <div id="emptySpace"></div>
                <input className="textTypeData" type="text" placeholder="First name" name="firstName" required value={formData.firstName} onChange={handleFormDataChange}></input>
                <input className="textTypeData" type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleFormDataChange}></input>
                <input type="date" name="appointmentDate" required value={formData.appointmentDate} onChange={handleFormDataChange}></input>
                <input type="time" name="appointmentTime" required value={formData.appointmentTime} onChange={handleFormDataChange}></input>
                <input className="textTypeData" type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="phone" placeholder="Tel." required value={formData.phone} onChange={handleFormDataChange}></input>
                <div id="requirementsTel">Your telephone must be 10 characters, no other symbols.</div>
                <input className="textTypeData" type="email" placeholder="Email" name="email" required value={formData.email} onChange={handleFormDataChange}></input>
                <div id="requirementsEmail">Please enter a valid email address</div>
                <input className="textTypeData" type="text" placeholder="Symptoms" name="symptom" value={formData.symptom} onChange={handleFormDataChange}></input>
                <button onClick={handleFormSubmit}>Submit</button>
                <div id="emptySpace"></div>
            </form>
        </div>
    );
}

export default Form;
