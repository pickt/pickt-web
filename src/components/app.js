import React, { Component } from 'react';
import Navbar from './navbar'

export default class App extends Component {
  render() {
    return (
      <div className='row'>
        <Navbar links={['Sign In', 'Contact']} />
      </div>
    );
  }
}
