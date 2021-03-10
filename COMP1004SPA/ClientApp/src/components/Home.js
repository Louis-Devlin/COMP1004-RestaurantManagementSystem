import React, { useState,useEffect} from "react";
import {Button} from 'reactstrap'
export default function Home() {
  const [details,setDetails]  =useState([])
  async function fetchDetails(){
    const response =  await fetch("https://localhost:5001/api/details/")
      .then(responce => responce.json())
      .then(data => setDetails(data));
      
  }
  useEffect(() => {
    fetchDetails();
  },[]);
  return (
   
    <div >
      <h1>Welcome</h1>
      <p>
        Welcome to the restaurant management system, you are currently logged in
        as a staff member.
        <br />
        This means you can make, ammend and cancel bookings
        <br />
        You can also set the restaurant details
        
      </p>
      
      <h1>Restaurant Details</h1>
      <p>Number of Tables: {details.numOfTables}</p>
      <p>Openning Time: {details.openTime}</p>
      <p>Closing Time: {details.closeTime}</p>
      
    </div>
    
  );
}
