import React, { Component } from "react";
import "./style.css";


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="row">
          
            <div className="col-md-4">
              {this.props.message}</div>
            <div className="col-md-4">
              <p className="card-text">Score: {this.props.count}</p>
              <p className="card-text">TopScore: {this.props.topScore}</p>
            </div>
            <div className="col-md-4">
              <a href="/" id="start">Start Again</a>
            </div>
          </div>
      </nav>

    )
  }
}

export default NavBar;