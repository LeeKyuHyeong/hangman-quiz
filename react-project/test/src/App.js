/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Mysection from './Mysection';
import Controls from './Controls';
import Createsection from './Createsection';
import Readsection from './Readsection';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'update',
      selected_id: 0,
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
    var _title, _desc, _section = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _section = <Mysection title={_title} desc={_desc} />
    } else if (this.state.mode === 'read') {
      /*
      반복문.. 클릭한 그 요소의 data-id값이 menus의 각 항목들에 있는지 확인
      */
      var i = 0;
      while (i < this.state.menus.length) {
        var data = this.state.menus[i];
        if (this.state.selected_id === data.id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }

      _section = <Mysection title={_title} desc={_desc} />
    } else if (this.state.mode === 'create') {
      _section = <Createsection onSubmit={(tit, des) => {
        this.state.menus.push({
          id: this.state.menus.length + 1,
          title: tit,
          desc: des
        })

        this.setState({
          meuns: this.state.menus
        })
      }//.bind(this)
      } />
    } else if (this.state.mode === 'update') {
      _section = <Readsection />
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
                selected_id: Number(num)
              })
          }}
        />
        {_section}

        <Controls onChangePage={(str) => {
          this.setState({
            mode: str
          })
        }} />
      </div >
    );
  }
}




