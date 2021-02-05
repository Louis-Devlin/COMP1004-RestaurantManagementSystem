import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./BookTable.css";

import TextField from '@material-ui/core/TextField';

export class BookTable extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {
      id: 0,
      name: "",
      phoneNum: "",
      partySize: 0,
      date: "",
      
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
      .then(res=> {res.json()})
      .catch(err => console.log(err))

      .then(alert("Booking has been made!"))
      
  }

  render() {
    return (
      <div   class="col-75">
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
              onChange={(e) => this.setState({ partySize: parseInt(e.target.value) })}
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
            <Label>Date/Time</Label> <br/>
            <TextField 
            type = "datetime-local"
            value = {this.state.date}
            onChange = {(e) => this.setState({date: e.target.value})}
            
            />
           
          </FormGroup>
          <Button color="primary">Book</Button>
        </Form>
      </div>
    );
  }
}
