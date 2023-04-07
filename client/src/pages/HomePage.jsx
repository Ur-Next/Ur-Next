import Header from "../components/Header";
import Form from "../components/Form";
import Users from "../components/Users";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [usersData, setUsersData] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [isUserTableShown, setUserTableShown] = useState(false);

    function toggleRerender() {
        setRerender((prevRerender) => !prevRerender);
    }

    function handleSorting(e) {
        switch (e.target.dataset.column) {
            case "firstName":
                setUsersData((prevUsersData) => [...prevUsersData.sort((a, b) => a.firstName.localeCompare(b.firstName))]);
                break;
            case "lastName":
                setUsersData((prevUsersData) => [...prevUsersData.sort((a, b) => a.lastName.localeCompare(b.lastName))]);
                break;
            case "appointmentTime":
                setUsersData((prevUsersData) => [...prevUsersData.sort((a, b) => parseInt(a.appointmentTime.replace(":", "")) - parseInt(b.appointmentTime.replace(":", "")))]);
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((patient) => patient.done === false && new Date(patient.appointmentDate).toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)).sort((a, b) => parseInt(a.appointmentTime.replace(":", "")) - parseInt(b.appointmentTime.replace(":", "")));
                console.log(filteredData)
                setUsersData(filteredData);
                {filteredData[0] ? setUserTableShown(true) : setUserTableShown(false)};
            });
    }, [rerender]);

    return (
        <div id="canvas">
            <Header />
            <Link id="seeAllPatientsLink" to="/home/allPatients">See all patients</Link>
            <Form toggleRerender={toggleRerender} />


            {/* SORTING */}
            {
                isUserTableShown ? (
                <nav id="sortingContainer">
                    <div></div>
                    <button className="sortingBtn" data-column="firstName" onClick={handleSorting}>
                        Sort By First Name
                    </button>
                    <button  className="sortingBtn" data-column="lastName" onClick={handleSorting}>
                        Sort By Last Name
                    </button>
                    <div></div>
                    <button className="sortingBtn" data-column="appointmentTime" onClick={handleSorting}>
                        Sort By Time
                    </button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </nav>
                ): console.log('sorting tools hidden')
            }

            {/* USERS */}
            <div id="dataContainer">
                {usersData.map((user, index) => (
                    <Users key={user._id} user={user} index={index} toggleRerender={toggleRerender} />
                ))}
            </div>

        </div>
    );
}

export default HomePage;
