import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
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
          label="date"
          type="date"
          defaultValue="2021-01-20"
          onChange={(e) => this.GetBookingByDate(e.target.value)}
        />
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
}
