import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    return (
      <ul>
        <li><a href="/create" className='btn'>create</a></li>
        <li><a href="/udpate" className='btn'>update</a></li>
        <li><input type="button" value="delete" /></li>
      </ul>
    );
  }
}


