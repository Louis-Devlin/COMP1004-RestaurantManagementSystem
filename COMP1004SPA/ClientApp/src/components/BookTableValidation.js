import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import "./BookTable.css";
function submit(name, phoneNum, partySize, date) {
  fetch("https://localhost:5001/api/booking", {
    method: "POST",
    body: JSON.stringify({
      id: 0,
      name: name,
      phoneNum: phoneNum,
      partySize: partySize,
      date: date,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(
      console.log(
        JSON.stringify({
          id: 0,
          name: name,
          phoneNum: phoneNum,
          partySize: partySize,
          date: date,
        })
      )
    )
    .then((res) => {
      res.json();
    })
    .then(alert("Booking has been made!"))
    .then(window.location.reload(false));
}

function BookTableValidation() {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [partySize, setPartySize] = useState(0);
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(name, phoneNum, partySize, date);
  };
  return (
    <div className="col-75">
      <AvForm onSubmit={handleSubmit}>
        <AvField
          name="name"
          label="Name"
          type="text"
          validate={{
            required: { value: true, errorMessage: "Please enter a name" },
            pattern: {
              value: "^[A-Za-z]+$",
              errorMessage: "Name must only contain letters",
            },
            maxLength: {
              value: 50,
              errorMessage: "Your name must be less than 50 characters",
            },
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AvField
          name="PhoneNum"
          label="Phone Number"
          validate={{
            required: {
              value: true,
              errorMessage: "You must enter a phone number",
            },
            pattern: {
              value: "^[0-9]+$",
              errorMessage: "You must only enter numbers",
            },
            minLength: {
              value: 11,
              errorMessage: "You must only enter 11 digits for phone number",
            },
            maxLength: {
              value: 11,
              errorMessage: "You must only enter 11 digits for phone number",
            },
          }}
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
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
          name="Booking Date"
          label="Date/Time"
          type="date"
          validate={{
            required: {
              value: true,
              errorMessage: "You must select a date and Time",
            },
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button color="primary">Submit</Button>
      </AvForm>
    </div>
  );
}

export default BookTableValidation;
