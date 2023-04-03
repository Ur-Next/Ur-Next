import Header from "../components/Header";
import PastUsers from "../components/PastUsers";
import FutureUsers from "../components/FutureUsers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllPatientsDataPage() {
    const [pastUsersData, setPastUsersData] = useState([]);
    const [futureUsersData, setFutureUsersData] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [isPastPatientsShown, setIsPastPatientsShown] = useState(false);

    const TODAY_IN_MILLISECONDS = new Date(new Date().toISOString().slice(0, 10)).getTime();

    function toggleRerender() {
        setRerender((prevRerender) => !prevRerender);
    }

    useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);

                const pastFilteredData = data.filter((patient) => new Date(patient.appointmentDate).getTime() < TODAY_IN_MILLISECONDS).sort((a, b) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime());
                const futureFilteredData = data.filter((patient) => new Date(patient.appointmentDate).getTime() >= TODAY_IN_MILLISECONDS).sort((a, b) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime());

                setPastUsersData(pastFilteredData);
                setFutureUsersData(futureFilteredData);
            });
    }, [rerender, TODAY_IN_MILLISECONDS]);

    return (
        <div id="canvas">
            <Header />
            <nav>
                <button onClick={() => setIsPastPatientsShown(true)}>See past patients</button>
                <button onClick={() => setIsPastPatientsShown(false)}>See current and future patients</button>
                <Link to="/home">Go back to home</Link>
            </nav>
            <div id="dataContainer">{isPastPatientsShown ? pastUsersData.map((user, index) => <PastUsers key={user._id} user={user} index={index} toggleRerender={toggleRerender} />) : futureUsersData.map((user, index) => <FutureUsers key={user._id} user={user} index={index} toggleRerender={toggleRerender} />)}</div>
        </div>
    );
}

export default AllPatientsDataPage;
