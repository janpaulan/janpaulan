import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/agency.min.css';

export default class Navbar extends Component {

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `window.addEventListener("scroll",function(e)
    {
    var navbar = document.getElementById('mainNav');

    
    if (window.pageYOffset >= 200 ){
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
    
    });`;
    this.instance.appendChild(s);
  }

  render () {
    function portfolio(e) {
      e.preventDefault();  
      document.querySelector("#portfolio").scrollIntoView({
        behavior: 'smooth'
      });
    }

    function profile(e) {
      e.preventDefault();
      document.querySelector("#profile").scrollIntoView({
      behavior: 'smooth'
      });
    }

    function pageTop(e) {
      e.preventDefault();
      document.querySelector("#page-top").scrollIntoView({
      behavior: 'smooth'
      });
    }
  
    return (
      <div ref={el => (this.instance = el)} className="container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
          <Link onClick={pageTop} className="navbar-brand" to="#page-top">://</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link onClick={profile} className="nav-link" to="#profile">{this.props.profile}</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={portfolio} className="nav-link" to="#portfolio">{this.props.portfolio}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>  
    );
  }
}