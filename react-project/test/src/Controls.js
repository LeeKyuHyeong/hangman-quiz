import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/create" className='btn' onClick={(e) => {
            e.preventDefault();
            this.props.onChangePage('create');
          }}>create</a>
        </li>
        <li>
          <a href="/udpate" className='btn' onClick={(e) => {
            e.preventDefault();
            this.props.onChangePage('update');
          }}>update</a>
        </li>
        <li>
          <input type="button" value="delete" onClick={() => {
            this.props.onChangePage('delete');
          }} />
        </li>
      </ul>
    );
  }
}


