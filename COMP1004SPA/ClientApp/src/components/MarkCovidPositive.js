import React, { useState, useEffect } from 'react'
import {Button, Input} from 'reactstrap'
function Covid () {
    const [bookings,setBooking] = useState([])
    const [bookingID, setBookingID] = useState(0)
    useEffect(() => {
        getAll();
       },[]);
    return(
<div>
    <h1>Mark Covid Positive</h1>
    <Input
    type="select"
    value = {bookingID}
    onChange = {(e) => setBooking(e.target.value)}>
        {bookings.map((bookings) => (<option>{bookings.id+ " " +bookings.name}</option> ))
            
        
        
        
        }
        
        </Input>
       <Button color = "primary" onClick = {(e) => sendData(e,bookingID)}>Mark as Covid Positive</Button>
</div>

    );
    async function getAll (){
        
        const response =  fetch("https://localhost:5001/api/booking/")
        .then(responce => responce.json())
        .then(data => setBooking(data));
    }
    function sendData(e,id){
        e.preventDefault()
        fetch("https://localhost:5001/api/booking/" + id,{
            method: "PUT",
            
    })
    }
}
export default Covid;