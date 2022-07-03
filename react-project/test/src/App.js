import React, { Component } from 'react';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Mysection from './Mysection';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'React', desc: 'Single Page Application' },
      menus: [
        {
          id: 1,
          title: 'HTML',
          desc: 'Hypertext Markup Language'
        },
        {
          id: 2,
          title: 'CSS',
          desc: 'Cascade Style Sheet'
        },
        {
          id: 3,
          title: 'Javascript',
          desc: 'Javascript is for interactive'
        },
        {
          id: 4,
          title: 'react',
          desc: 'component state props'
        }

      ]
    }
  }
  render() {
    return (
      <div className='App'>
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} />
        <Mynav data={this.state.menus} />
        <Mysection title="HTML" desc="Hypertext Markup Language" />
      </div>
    );
  }
}




