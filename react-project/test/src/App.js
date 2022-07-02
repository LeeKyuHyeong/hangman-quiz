import React, { Component } from 'react';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Mysection from './Mysection';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Myheader title="React" desc="Single Page Application" />
        <Mynav />
        <Mysection title="HTML" desc="Hypertext Markup Language" />
      </div>
    );
  }
}




