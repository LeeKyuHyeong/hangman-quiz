import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyHeader />
        <MyNav />
        <MySection />
      </div>
    );
  }
}
class MyHeader extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">React</h1>
        <p>Single Page Application</p>
      </header>
    );
  }
}

class MyNav extends Component {
  render() {
    return (
      <ul>
        <li><a href="">HTML</a></li>
        <li><a href="">CSS</a></li>
        <li><a href="">Javascript</a></li>
      </ul>
    );
  }
}

class MySection extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>HTML</h2>
          <p>Hypertext Markup Language</p>
        </article>
      </section>
    );
  }
}
