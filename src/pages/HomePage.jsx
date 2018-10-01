import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/jumbotron.jsx';
import Profile from '../components/profile.jsx';
import Footer from '../components/footer.jsx';
import Portfolio from '../components/portfolio.jsx';

class HomePage extends Component {
  render () {
    return (
      <div>
          <Navbar profile="Profile" portfolio="Portfolio"/>
          <Jumbotron title="Welcome to my Studio!" subtitle="It's Nice to Meet You" cta="Tell Me More" id="page-top"/>
          <Profile />
          <Portfolio />
          <Footer />
      </div>
    );
  }
}

export default HomePage;