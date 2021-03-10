import React, {useEffect, useState} from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "./BookTable.css"
import { Button } from "reactstrap";

function SetDetails() {
  const [tables,setTables]  = useState(0)
  const [open,SetOpen] = useState("")
  const [close,setClose] = useState("")
  const[details,setDetails] = useState([])
  async function updateDetails() {
    const responce = fetch("https://localhost:5001/api/details/",{
      method:"POST",
      body: JSON.stringify({
        numOfTables : parseInt(tables),
        openTime: open,
        closeTime:close
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(responce => responce.json) 
      .then(json => console.log(json))

  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(tables + "," + open + "," + close)
    
    updateDetails();
  } 
  
  async function  fetchDetails () {
      console.log("Press")
      const response =  await fetch("https://localhost:5001/api/details/")
      .then(responce => responce.json())
      .then(data => setDetails(data))
      .then(console.log(details));
      
    
  }

  useEffect(() => {
    fetchDetails();
  },[]);
  return (
    <div className="col-75"> 
      <h1>Set Details</h1>
      <AvForm onSubmit = {handleSubmit}>
        <AvField
          name="Number of tables"
          label="Number of tables"
          type="text"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter the number of tables",
            },
          }}
          value = {tables}
          onChange = {(e) => setTables(parseInt(e.target.value))}
        />
        <div className="inline">
        <p id="Open">Openning Time</p>
        <p id="Close">Closing Time</p>
        </div>
        <AvField className="DateTimeLeft" name="Open Time" type="Time" value = {open} onChange = {(e) => SetOpen(e.target.value)}/>
        <AvField className="DateTimeRight" name="Close Time" type="Time" value ={close} onChange = {(e) => setClose(e.target.value)}/>
        <Button color="primary">Submit</Button>
      </AvForm> <br/>
      <h1> Current Details</h1>
      <p>Number of Tables: {details.numOfTables}</p>
      <p>Openning Time: {details.openTime}</p>
      <p>Closing Time: {details.closeTime}</p>
     
    </div>
  );
  
}

export default SetDetails;
