import { useState } from "react";

function Form({toggleRerender}) {
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
        }).then(res=>res.text()).then(data=>{
            console.log(data)
            toggleRerender()
            setFormData({ firstName: "", lastName: "", phone: "", email: "", symptom: "", appointmentDate: "", appointmentTime: "" })
        })
    }

    return (
        <div id="form">
            <input type="text" className="textTypeData" placeholder="First name" name="firstName" required value={formData.firstName} onChange={handleFormDataChange}></input>
            <input type="text" className="textTypeData" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleFormDataChange}></input>
            <input type="date" className="dateTime" name="appointmentDate" required value={formData.appointmentDate} onChange={handleFormDataChange}></input>
            <input type="time" className="dateTime" name="appointmentTime" required value={formData.appointmentTime} onChange={handleFormDataChange}></input>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="textTypeData" name="phone" placeholder="Tel." required value={formData.phone} onChange={handleFormDataChange}></input>
            <input type="email" className="textTypeData" placeholder="Email" name="email" required value={formData.email} onChange={handleFormDataChange}></input>
            <input type="text" className="textTypeData" placeholder="Symptoms" name="symptom" value={formData.symptom} onChange={handleFormDataChange}></input>
            <button id="buttonSubmit" onClick={handleFormSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Form;
