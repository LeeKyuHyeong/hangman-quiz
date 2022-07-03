/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Mynav extends Component {
  render() {
    //console.log('Mynav.js실행');
    var lists = [];
    var data = this.props.data; //리팩토링
    var i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}><a href="" onClick={() => { }}>{data[i].title}</a></li>);
      i++;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}
