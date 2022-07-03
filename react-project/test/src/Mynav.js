import React, { Component } from 'react';

export default class Mynav extends Component {
  render() {
    var lists = [];
    var data = this.props.data; //리팩토링
    var i = 0;
    while (i < data.length) {
      lists.push("<li>" + data[i].title + "</li>");
      console.log(lists);
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
