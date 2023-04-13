import Header from "../components/Header";
import PastUsers from "../components/PastUsers";
import FutureUsers from "../components/FutureUsers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllPatientsDataPage() {
    const [pastUsersData, setPastUsersData] = useState([]);
    const [futureUsersData, setFutureUsersData] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [isPastPatientsShown, setIsPastPatientsShown] = useState('false');
    

    const TODAY_IN_MILLISECONDS = new Date(new Date().toISOString().slice(0, 10)).getTime();

    function toggleRerender() {
        setRerender((prevRerender) => !prevRerender);
    };

    function handleChange(event) {
        console.log("TARGET SET TO THE FUNCTION:", event.target.value)

        setIsPastPatientsShown(event.target.value)
        console.log("STATE IS PAST SHOWN", isPastPatientsShown)
        // setIsPastPatientsShown(false)
    };

    useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((data) => {
                // console.log("data", data);

                const pastFilteredData = data.filter((patient) => new Date(patient.appointmentDate).getTime() < TODAY_IN_MILLISECONDS).sort((a, b) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime());
                const futureFilteredData = data.filter((patient) => new Date(patient.appointmentDate).getTime() >= TODAY_IN_MILLISECONDS).sort((a, b) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime());

                setPastUsersData(pastFilteredData);
                setFutureUsersData(futureFilteredData);
            });
    }, [rerender, TODAY_IN_MILLISECONDS]);

    return (
        <div id="canvas">
            <Header />
            <Link id="linkBackHome" to="/home">Go back to home</Link>
            <nav className="Tabs">
                    {/* --Tab 1 -- */}
                <input
                        type="radio"
                        id="tab1"
                        value="true"
                        // checked = {() => setIsPastPatientsShown(true)} // did work, but threw message in the console - did not like the function, required a string
                        checked = {isPastPatientsShown === "true"}
                        onChange = {handleChange} />
                <label htmlFor="tab1">Past patients</label>
                    {/* <button onClick={() => setIsPastPatientsShown(true)}>See past patients</button> */}

                    {/* --Tab 2 -- */}
                <input
                        type="radio"
                        id="tab2"
                        value="false"
                        checked = {isPastPatientsShown === "false"} 
                        onChange = {handleChange} 
                        />
                <label htmlFor="tab2">Current and future patients</label>
                    {/* <button onClick={() => setIsPastPatientsShown(false)}>See current and future patients</button> */}
                    
            </nav>

            <div id="dataContainer">{isPastPatientsShown === "true" ? pastUsersData.map((user, index) => <PastUsers key={user._id} user={user} index={index} toggleRerender={toggleRerender} />) : futureUsersData.map((user, index) => <FutureUsers key={user._id} user={user} index={index} toggleRerender={toggleRerender} />)}</div>
        </div>
    );
}

export default AllPatientsDataPage;
