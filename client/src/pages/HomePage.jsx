import Header from "../components/Header";
import Form from "../components/Form";
import FilledBlock from "../components/FilledBlock";
import { useEffect,useState } from "react";


function HomePage () {
    const [usersData,setUsersData]=useState([])

    useEffect(()=>{
        console.log('re')
        fetch('/users').then(res=>res.json()).then(data=>{
            console.log(data)
            setUsersData(data)})
    },[])

    return (
        <div id="mainContainer">
            < Header />
            < Form />
            {usersData.map((user,index)=>< FilledBlock key={user._id} user={user}  index={index}  />)}
            
          
        </div>
    )
};


export default HomePage;