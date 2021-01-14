import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {  ViewBookings } from './components/ViewBookings';
import { Counter } from './components/Counter';
import {BookTable} from './components/BookTable';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/SetDetails' component={Counter} />
        <Route path='/Book-Table' component={BookTable}/>
        <Route path='/View-Bookings' component={ViewBookings} />

      </Layout>
    );
  }
}
