import React, { Component } from 'react';

export default class Updatesection extends Component {
  render() {

    return (
      <section>
        <article>
          <h2>Update section</h2>
          <form action="/update_process" method='post'
            onSubmit={(e) => {
              e.preventDefault();
              //this.props.onSubmit(_title, _desc);
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }}>
            <p>
              <input type="text" name='title' value={this.props.title} />
            </p>
            <p>
              <textarea name="desc" value={this.props.desc}></textarea>
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
