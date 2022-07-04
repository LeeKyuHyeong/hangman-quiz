import React, { Component } from 'react';

export default class Createsection extends Component {
  render() {
    var _title, _desc = null;
    return (
      <section>
        <article>
          <h2>Create section</h2>
          <form action="/create_process" method='post'
            onSubmit={(e) => {
              e.preventDefault();
              //console.log(_title, _desc);
              //this.props.onSubmit(_title, _desc);
              this.props.onSubmit(e.target.title.value,e.target.desc.value);
            }}>
            <p>
              <input type="text" name='title' placeholder='title' onChange={(e) => {
                _title = e.target.value;
              }} />
            </p>
            <p>
              <textarea name="desc" placeholder='description' onChange={(e) => {
                _desc = e.target.value;
              }}></textarea>
            </p>
            <p>
              <input type="submit" value='전송'></input>
            </p>
          </form>
        </article>
      </section>
    );
  }
}
