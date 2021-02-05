import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
 <h1>Welcome</h1>
 <p>Welcome to the restaurant management system, you are currently logged in as a staff member.
   <br/>This means you can make, ammend and cancel bookings
   <br/>You can also set the restaurant details

 </p>
      </div>
    );
  }
}
