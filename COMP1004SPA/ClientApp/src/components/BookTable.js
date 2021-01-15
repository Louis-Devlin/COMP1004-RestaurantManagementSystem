import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./BookTable.css";
export class BookTable extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {
      id: 0,
      name: "",
      phoneNum: "",
      partySize: 0,
      dateTime: "",
    };
  }
  load() {
    fetch("https://localhost:5001/api/booking", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(console.log(this.state))
      .then(alert("Booking has been made!"));
  }
  submit() {
    fetch("https://localhost:5001/api/booking", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(console.log(this.state))
      .then(alert("Booking has been made!"));
  }

  render() {
    return (
      <div onLoad={this.load} class="col-75">
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone number</Label>
            <Input
              type="text"
              placeholder="Enter Phone Number"
              value={this.state.phoneNum}
              onChange={(e) => this.setState({ phoneNum: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Number of Guests</Label>
            <Input
              type="select"
              value={this.state.partySize}
              onChange={(e) => this.setState({ partySize: e.target.value })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Date/Time</Label>
            <Input
              type="datetime"
              value={this.state.dateTime}
              onChange={(e) => this.setState({ dateTime: e.target.value })}
            ></Input>
          </FormGroup>
          <Button color="primary">Book</Button>
        </Form>
      </div>
    );
  }
}
