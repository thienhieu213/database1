import React, { Component } from 'react';


class Demo extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Demo;
  