import React, { useEffect } from 'react'

const IpAddress = () => {

    async function getIP(){
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return response.status === 200 ? data : "err"
    }

    useEffect( () => {
        getIP().then(data => console.log(data))
    },[])

    return (
        <div>{getIP}</div> 
    );
};


export default IpAddress
