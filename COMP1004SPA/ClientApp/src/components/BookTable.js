import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./BookTable.css";
export class BookTable extends Component {
 
  render() {
    return (
      <div class="col-75">
        <Form onSubmit={this.submitNew}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              id="TestName"
              placeholder="Enter Your Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone number</Label>
            <Input
              type="text"
              name="phoneNum"
              id="phoneNum"
              placeholder="Enter Phone Number"
            />
          </FormGroup>
          <FormGroup>
            <Label>Number of Guests</Label>
            <Input type="select" name="SelectPartySize" id="partySize">
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
            <Input type="datetime"></Input>
          </FormGroup>
          <Button color="primary">Book</Button>
        </Form>
      </div>
    );
  }
}
