import { useState } from "react";

function Users({ user, index, toggleRerender }) {
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [formData, setFormData] = useState({ firstName: user.firstName, lastName: user.lastName, phone: user.phone, email: user.email, symptom: user.symptom, appointmentDate: user.appointmentDate, appointmentTime: user.appointmentTime });

    function handleEditBtnClick() {
        setIsInEditMode((prevIsInEditMode) => !prevIsInEditMode);
    }

    function handleFormDataChange(e) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    // DELETE PATIENTS
    function DeletePatient() {
        console.log(user._id);

        if (window.confirm("Confirm delete?")) {
            fetch(`/user/${user._id}`, {
                method: "DELETE"
            })
                .then((response) => response.text())
                .then((data) => {
                    console.log("Patient deleted successfully", data);
                    toggleRerender();
                })
                .catch((error) => {
                    console.error("Error deleting Patient", error);
                });
        }
    }

    //DONE BUTTON
    function updatePatient(done = true) {
        let requestBody;

        if (done) {
            requestBody = JSON.stringify({ done: true });
        } else {
            requestBody = JSON.stringify(formData);
        }

        fetch(`/user/${user._id}`, {
            method: "POST",
            body: requestBody,
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.text())
            .then((data) => {
                console.log("Patient updated successfully", data);
                toggleRerender();
            })
            .catch((error) => {
                console.error("Error updating Patient", error);
            });
    }

    return (
        <div id="wrapper">
            <div id="dataGroup">
                <div id="numberInLine">{index + 1}</div>
                {isInEditMode ? (
                    <>
                        <input type="text" placeholder="First name" name="firstName" required value={formData.firstName} onChange={handleFormDataChange}></input>
                        <input type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleFormDataChange}></input>
                        <input type="date" name="appointmentDate" required value={formData.appointmentDate} onChange={handleFormDataChange}></input>
                        <input type="time" name="appointmentTime" required value={formData.appointmentTime} onChange={handleFormDataChange}></input>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" placeholder="Tel." required value={formData.phone} onChange={handleFormDataChange}></input>
                        <input type="email" placeholder="Email" name="email" required value={formData.email} onChange={handleFormDataChange}></input>
                        <input type="text" placeholder="Symptoms" name="symptom" value={formData.symptom} onChange={handleFormDataChange}></input>
                    </>
                ) : (
                    <>
                        <p className="textTypeData">{formData.firstName}</p>
                        <p className="textTypeData">{formData.lastName}</p>
                        <p>{formData.appointmentDate}</p>
                        <p>{formData.appointmentTime}</p>
                        <p className="textTypeData">{formData.phone}</p>
                        <p className="textTypeData">{formData.email}</p>
                        <p className="textTypeData">{formData.symptom}</p>
                    </>
                )}

                <button
                    id="buttonSave"
                    onClick={() => {
                        handleEditBtnClick();
                        isInEditMode && updatePatient(false);
                    }}>
                    {isInEditMode ? "Save" : "Edit"}
                </button>
                <button id="buttonDone" onClick={updatePatient}>
                    Done
                </button>
                <button id="buttonDel" onClick={DeletePatient}>
                    X
                </button>
            </div>
        </div>
    );
}

export default Users;
