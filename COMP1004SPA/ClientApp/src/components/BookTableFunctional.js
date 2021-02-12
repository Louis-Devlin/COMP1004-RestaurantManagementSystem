import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./BookTable.css";
import TextField from "@material-ui/core/TextField";


function submit(name,phoneNum,partySize,date) {
  fetch("https://localhost:5001/api/booking", {
    method: "POST",
    body: JSON.stringify({
        id: 0,
        name: name,
        phoneNum: phoneNum,
        partySize: partySize,
        date:date
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(console.log("SENT"))
    .then((res) => {
      res.json();
    })
    .then(alert("Booking has been made!"))
    .then(window.location.reload(false));
    
}

function BookTableFunctional() {
  const [book, setBook] = useState({
    id: 0,
    name: "",
    phoneNum: "",
    partySize: 0,
    date: "",
  });
  const [name,setName] = useState("");
  const [phoneNum,setPhoneNum] = useState("");
  const [partySize,setPartySize] = useState(0);
  const [date,setDate] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(name,phoneNum,partySize,date);
  };
  return (
    <div onSubmit={handleSubmit} className="col-75">
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone number</Label>
          <Input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Number of Guests</Label>
          <Input type="select" value={partySize} onChange={(e) => setPartySize(parseInt(e.target.value))}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Date/Time</Label> <br />
          <TextField
            type="datetime-local"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
          />
        </FormGroup>
        <Button color="primary">Book</Button>
      </Form>
    </div>
  );
}

export default BookTableFunctional;
