import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../font-awesome/css/font-awesome.min.css';
import img from '../images/1.jpg';
import './profile.css';

class Profile extends Component {
  render () {
    return (
    <section className="bg-light" id="profile">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="team-member">
              <img className="mx-auto rounded-circle image" src={img} alt=""/>
              <h4>Jan Paulan</h4>  
              <p class="text-muted">Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.twitter.com/janpaulan" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/jan1310" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/jan-paulan-0bb748102/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>            
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Profile;