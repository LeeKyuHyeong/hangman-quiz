/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Mynav extends Component {
  render() {
    //console.log('Mynav.js실행');
    var lists = [];
    var data = this.props.data; //리팩토링
    var i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}>
        <a href=""
          data-id={data[i].id}
          onClick={(e) => {
            e.preventDefault();
            this.props.onChangePage(e.target.getAttribute('data-id'));
            // this.props.onChangePage(e.target.dataSet.id);
          }}>{data[i].title}</a>
      </li >);
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
