import React, { useEffect } from 'react'

const RGetIp = () => {

    async function getIP(){
        const response = await fetch('http://api.ipify.org/?format=json');
        const data = await response.json();
        return response.status === 200 ? data : "err"
    }

    useEffect( () => {
      getIP().then(data => console.log(data))
    }, [])

  return (
    <>
    </>
  )
}

export default RGetIp
