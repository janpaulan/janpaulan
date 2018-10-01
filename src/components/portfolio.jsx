import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import thum1 from '../images/portfolio/makatiindex-thumbnail.jpg';
import thum2 from '../images/portfolio/xbox-thumbnail.png';
import thum3 from '../images/portfolio/energizer.png';
import port1 from '../images/portfolio/makatiindex-full.jpg';


class Portfolio extends Component {

  render () {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
            </div>
          </div>
          <div className="row">
            {/* //  <!-- Makati Index --> */}
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link className="portfolio-link" data-toggle="modal" to="#portfolioMakatiIndex">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={thum1} alt=""/>
              </Link>
              <div className="portfolio-caption">
                <h4>Makati Index</h4>
              </div>
            </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <Link className="portfolio-link" data-toggle="modal" to="#portfolioMakatiIndex">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
              <img className="img-fluid" src={thum2} alt=""/>
          </Link>
          <div className="portfolio-caption">
            <h4>Microsoft Xbox Newsletter</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <Link className="portfolio-link" data-toggle="modal" to="#portfolioMakatiIndex">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
              <img className="img-fluid" src={thum3} alt=""/>
          </Link>
          <div className="portfolio-caption">
            <h4>Energizer Asia</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio-modal modal fade" id="portfolioMakatiIndex" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                {/* Project Details Go Here*/}
                <h2 className="text-uppercase">Microsoft Xbox Newsletter</h2>
                  <p className="item-intro text-muted">Newsletter creation and localization</p>
                  <img className="img-fluid d-block mx-auto" src={port1} alt=""/>
                  <p>Creates responsive HTML templates for e-mail blasts across different APAC markets.
                     Markets: AU, NZ, SG, IN, HK, TW</p>
                  <ul className="list-inline">
                    <li>Date: April 2017</li>
                    <li>Client: Microsoft Xbox <i>under Wunderman Manila</i></li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
  }
}
export default Portfolio;