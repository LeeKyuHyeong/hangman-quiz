/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Mysection from './Mysection';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: { title: 'React', desc: 'Single Page Application' },
      welcome: { title: 'Welcome', desc: 'Welcome to React' },
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
        }
      ]
    }
  }
  render() {
    //console.log('App.js실행');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.menus[0].title;
      _desc = this.state.menus[0].desc;
    } else {

    }

    return (
      <div className='App'>
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangePage={() => {
            this.setState({
              mode: 'welcome',
            })
          }}
        />

        <Mynav data={this.state.menus} />
        <Mysection title={_title} desc={_desc} />
      </div >
    );
  }
}




