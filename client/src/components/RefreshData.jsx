import { useState } from 'react';



function RefreshData () {

    const [usersData,setUsersData]=useState([]);

    fetch('/users').then(res=>res.json()).then(data=>{
        setUsersData(data)
    })
};


export default RefreshData;