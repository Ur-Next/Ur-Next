import Header from "../components/Header";
import Form from "../components/Form";
import Users from "../components/Users";
import { useState, useEffect } from "react";


function HomePage () {
    const [usersData,setUsersData]=useState([])
    const [rerender,setRerender]=useState(false)

    function toggleRerender(){
        setRerender(prevRerender=>!prevRerender)
    
    }

    useEffect(()=>{
        fetch('/users').then(res=>res.json()).then(data=>{
            console.log(data)
            const filteredData=data.filter(patient=>patient.done===false).sort((a,b)=>parseInt(a.appointmentTime) - parseInt(b.appointmentTime))
            setUsersData(filteredData)})
    },[rerender]);
    
    return (
        <div id="canvas">
            < Header />
            < Form toggleRerender={toggleRerender}/>
            {usersData.map((user,index)=>< Users key={user._id} user={user}  index={index} toggleRerender={toggleRerender}   />)}
        </div>
    )
};


export default HomePage;