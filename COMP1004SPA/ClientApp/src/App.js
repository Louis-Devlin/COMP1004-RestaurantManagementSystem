import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home  from './components/Home';
//import { ViewBookings}  from './components/ViewBookings';
import  SetDetails  from './components/SetDetails';
import  BookTableFunctional  from './components/BookTableFunctional';
import BookTableValidation from './components/BookTableValidation';
import Covid from './components/MarkCovidPositive'
import './custom.css'
import ViewBookings from './components/ViewBookingsFuntional'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/SetDetails' component={SetDetails} />
        <Route path='/Book-Table' component={BookTableValidation}/>
        <Route path='/View-Bookings' component={ViewBookings} />
        <Route path ="/Covid" component = {Covid}/>

      </Layout>
    );
  }
}
