import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyHeader title="React" desc="Single Page Application" />
        <MyNav />
        <MySection title="HTML" desc="Hypertext Markup Language" />
      </div>
    );
  }
}
class MyHeader extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

class MyNav extends Component {
  render() {
    return (
      <ul>
        <li onClick={() => { }}>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    );
  }
}

class MySection extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      </section>
    );
  }
}
