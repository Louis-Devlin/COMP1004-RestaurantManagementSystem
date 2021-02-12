import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
export class ViewBookings extends Component {
  static displayName = ViewBookings.name;

  constructor(props) {
    super(props);
    this.state = { bookings: [], loading: true };
  }

  componentDidMount() {
    this.GetAllBookingData();
  }

  static displayBookings(bookings) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Num of People</th>
          </tr>
        </thead>
        <tbody>
                {bookings.map((bookings) => (
                    <tr>
                        <td>{new Date(bookings.date).toString().replace("GMT+0000 (Greenwich Mean Time)","")}</td>
              <td>{bookings.name}</td>
              <td>{bookings.phoneNum}</td>
              <td>{bookings.partySize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      ViewBookings.displayBookings(this.state.bookings)
    );

    return (
      <div>
        <h1 id="tabelLabel">View Bookings</h1>
        <p>This Shows all bookings made sorted by date </p>
        <TextField
          id="date"
          
          type="date"
          defaultValue={new Date()}
          onChange={(e) => this.GetBookingByDate(e.target.value)}
        />
      <Button  onClick = {this.press}>Reset</Button>
        {contents}
        
      </div>
    );
  }

  async GetAllBookingData() {
    const response = await fetch("https://localhost:5001/api/booking/");
    const data = await response.json();
    this.setState({ bookings: data, loading: false });
  }
  async GetBookingByDate(Udate) {
    const responce = await fetch("https://localhost:5001/api/booking/" + Udate);
    const data = await responce.json();

    this.setState({ bookings: data, loading: false });
  }
   press = () =>{
    console.log("PRESS");
    const response =  fetch("https://localhost:5001/api/booking/")
    .then(responce => responce.json())
    .then(data => this.setState({bookings: data, loading: false}));
      
      
    
  }
}
