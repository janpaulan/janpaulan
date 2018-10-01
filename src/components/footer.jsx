import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render () {
    return (
      <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright © 2018</span>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;