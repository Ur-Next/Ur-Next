import Header from "../components/Header";
import Form from "../components/Form";
import Users from "../components/Users";
import { useState, useEffect } from "react";


function HomePage () {
    const [usersData,setUsersData]=useState([])

    useEffect(()=>{
        fetch('/users').then(res=>res.json()).then(data=>{
            console.log(data)
            setUsersData(data)})
    },[]);
    
    return (
        <div id="canvas">
            < Header />
            < Form />
            {usersData.map((user,index)=>< Users key={user._id} user={user}  index={index}   />)}
        </div>
    )
};


export default HomePage;