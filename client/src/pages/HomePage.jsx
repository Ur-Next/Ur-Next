import Header from "../components/Header";
import Form from "../components/Form";
import Users from "../components/Users";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [usersData, setUsersData] = useState([]);
    const [rerender, setRerender] = useState(false);

    function toggleRerender() {
        setRerender((prevRerender) => !prevRerender);
    }

    function handleSorting(e) {
        console.log(e.target.dataset.column);
        switch (e.target.dataset.column) {
            case "appointmentTime":
                setUsersData((prevUsersData) => prevUsersData.sort((a, b) => parseInt(a.appointmentTime.replace(":", "")) - parseInt(b.appointmentTime.replace(":", ""))));
                break;
            case "firstName":
                setUsersData((prevUsersData) => prevUsersData.sort((a, b) => a.firstName.localeCompare(b.firstName)));
                break;
            case "lastName":
                setUsersData((prevUsersData) => prevUsersData.sort((a, b) => a.lastName.localeCompare(b.lastName)));
                break;
        }
    }

    useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((patient) => patient.done === false && new Date(patient.appointmentDate).toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)).sort((a, b) => parseInt(a.appointmentTime.replace(":", "")) - parseInt(b.appointmentTime.replace(":", "")));
                setUsersData(filteredData);
            });
    }, [rerender]);

    return (
        <div id="canvas">
            <Header />
            <Form toggleRerender={toggleRerender} />
            <nav>
                <button data-column="appointmentTime" onClick={handleSorting}>
                    Sort By Appointment Time
                </button>
                <button data-column="firstName" onClick={handleSorting}>
                    Sort By First Name
                </button>
                <button data-column="lastName" onClick={handleSorting}>
                    Sort By Last Name
                </button>
            </nav>
            {usersData.map((user, index) => (
                <Users key={user._id} user={user} index={index} toggleRerender={toggleRerender} />
            ))}
            <Link to="/home/allPatients">See all patients</Link>
        </div>
    );
}

export default HomePage;
