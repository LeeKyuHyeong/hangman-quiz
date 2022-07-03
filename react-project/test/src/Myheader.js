/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Myheader extends Component {
  render() {
    //console.log('Myheader.js실행');
    return (
      <header>
        <h1 className="logo">
          <a href=""
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage();
            }}
          >{this.props.title}</a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}
