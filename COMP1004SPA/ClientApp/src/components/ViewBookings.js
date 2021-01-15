import React, { Component } from 'react';

export class ViewBookings extends Component {
  static displayName = ViewBookings.name;

  constructor(props) {
    super(props);
    this.state = { bookings: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static displayBookings(bookings) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Num of People</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(bookings =>
            <tr key={bookings.date}>
              <td>{bookings.date}</td>
              <td>{bookings.name}</td>
              <td>{bookings.phoneNum}</td>
              <td>{bookings.partySize}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ViewBookings.displayBookings(this.state.bookings);

    return (
      <div>
        <h1 id="tabelLabel" >View Bookings</h1>
        <p>This Shows all bookings made sorted by date </p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('https://localhost:5001/api/booking');
    const data = await response.json();
    this.setState({ bookings: data, loading: false });
  }
}
