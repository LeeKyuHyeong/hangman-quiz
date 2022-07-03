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
      mode: 'welcome',
      selected_id: 2,
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
      /*
      반복문.. 클릭한 그 요소의 data-id값이 menus의 각 항목들에 있는지 확인
      */
      // var i = 0;
      // while (i < this.state.menus.length) {
      //   if (this.state.menus[i].id === 1) {
      //     this.setState({ selected_id: this.state.menus[i].id })
      //   } else {
      //     continue;
      //   }
      //   i++;
      // }

      _title = this.state.menus[this.state.selected_id].title;
      _desc = this.state.menus[this.state.selected_id].desc;
    } else {

    }

    return (
      <div className='App'>
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangePage={() => {
            this.setState({ mode: 'welcome' })
          }}
        />

        <Mynav
          data={this.state.menus}
          onChangePage={(num) => {
            this.setState(
              {
                mode: 'read',
                selected_id: Number(num) - 1
              })
            debugger;
          }}

        />
        <Mysection title={_title} desc={_desc} />
      </div >
    );
  }
}




