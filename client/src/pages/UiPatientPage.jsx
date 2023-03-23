function UiPatient () {
    return (
        <div id="patientMainContainer">
            <img id="logo" src="./images/Logo_urnext_400.png" alt="Logo Urnext"></img>
            <p>Your estimate appointment time</p>
            <div id="timeAppointment">10:25</div>
            <p>Patients in the line ahead of you</p>
            <div id="count">2</div>
            <p>estimated time remaining {""} min</p>
        </div>
    )
};

export default UiPatient;