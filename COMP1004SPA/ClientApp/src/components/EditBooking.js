import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import "./BookTable.css";

async function getOpenningTimes() {
  var open = "";
  fetch("https://localhost:5001/api/details/")
    .then((res) => res.json)
    .then((details) => {
      return details.openTime + "-" + details.closeTime;
    });
}
function submit(id,name,phoneNum,partySize,date,time) {
  var dateTime = date + "T" + time + ":00";

  fetch("https://localhost:5001/api/booking/", {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      name: name,
      phoneNum: phoneNum,
      partySize: partySize,
      date: dateTime,
      covidPos: false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(
      console.log(
        JSON.stringify({
          id: id,
          name: name,
          phoneNum: phoneNum,
          partySize: partySize,
          date: dateTime,
          covidPos: false
          
        })
      )
    )
    .then((res) => {
      if (res.status == 404) {
        var details = getOpenningTimes();
        alert(
          "Booking is not within openning hours \n Openning hours are :" +
            details
        );
      } else {
        alert("booking has been made");
        window.location.reload(false);
      }
    });
}

function EditBooking({id,name,phoneNum}) {
  const [partySize, setPartySize] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(id,name,phoneNum,partySize,date,time);
  };
  return (
      
    <div>
        <h1>Boooking ID:{id}</h1>
      <AvForm onSubmit={handleSubmit}>
        <AvField
          name="Party Size"
          label="Number of Guests"
          type="select"
          validate={{
            required: {
              value: true,
              errorMessage: "You must select a party size",
            },
          }}
          value={partySize}
          onChange={(e) => setPartySize(parseInt(e.target.value))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </AvField>

        <AvField
          className="DateTimeLeft"
          name="Booking Date"
          type="date"
          validate={{
            required: {
              value: true,
              errorMessage: "You must select a date",
            },
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <AvField
          className="DateTimeRight"
          name="Time"
          type="time"
          validate={{
            required: {
              value: true,
              errorMessage: "You must select a time",
            },
          }}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <br />

        <Button color="primary">Submit</Button>
      </AvForm>
    </div>
  );
}

export default EditBooking;
