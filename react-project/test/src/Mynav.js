import React, { Component } from 'react';

export default class Mynav extends Component {
  render() {
    var lists = [];
    var data = this.props.data; //리팩토링
    var i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}>{data[i].title}</li>);
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
