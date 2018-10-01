import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './jumbotron.css';

class Jumbotron extends Component {
  render () {

    function profile(e) {
      e.preventDefault();
      document.querySelector("#profile").scrollIntoView({
      behavior: 'smooth'
      });
    }

    return (
        <header className="masthead">
          <div className="jumbotron jumbotron-fluid" id="page-top">
            <div className="intro-text">
              <h1 className="display-4 intro-lead-in">{this.props.title}</h1>
                <p className="display-3 lead text-uppercase intro-heading">{this.props.subtitle}</p>
              <Link onClick={profile} className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="#profile" role="button">{this.props.cta}</Link>
            </div>
          </div>
        </header>
    );
  }
}

export default Jumbotron;