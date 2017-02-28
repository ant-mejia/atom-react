import React from 'react';
import {Redirect} from 'react-router';
import Jumbotron from '../components/Jumbotron';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron/>
        <div className="main-section section" data-uk-height-viewport>
          <h1 className="section-title under uk-text-center uk-text-uppercase large-title">Atom Talent</h1>
          <div className="uk-column-1-3@m">
            <div className="main-panel">
              <span className="uk-display-block uk-text-center main-icon icon-puzzle icon-gradient"></span>
              <h2 className="panel-title">Meet your puzzle piece</h2>
              <p>Every candidate is unique. Find what makes you rock and rock the world!</p>
            </div>
            <div className="main-panel">
              <span className="uk-display-block uk-text-center main-icon icon-telescope icon-gradient"></span>
              <h2 className="panel-title">Discover positions</h2>
              <p>Join a network that works! Find positions in top companies that aren't available to the public.</p>
            </div>
            <div className="main-panel">
              <span className="uk-display-block uk-text-center main-icon icon-megaphone icon-gradient"></span>
              <h2 className="panel-title">Spread your awesomeness</h2>
              <p>Stand out from the rest with your awesome profile.</p>
            </div>
          </div>
        </div>
        <div className="section" data-uk-height-viewport>
          <div className="uk-container">
            <h2 className="uk-text-uppercase uk-text-center section-title">Featured Partners</h2>
            <hr className="title-divider"/>
            <div className="uk-column-1-4">
              <div className="">
                <a href="https://www.google.com/about/company/">
                  <img src="assets/img/brands/google.png" width="100%"/>
                </a>
                <h3 className="uk-text-uppercase uk-text-center">Google</h3>
              </div>
              <div className="">
                <a href="https://generalassemb.ly">
                  <img src="assets/img/brands/ga.png" width="100%"/>
                </a>
                <h3 className="uk-text-uppercase uk-text-center">General Assembly</h3>
              </div>
              <div className="">
                <a href="http://www.bigspaceship.com">
                  <img src="assets/img/brands/big-spaceship.png" width="100%"/>
                </a>
                <h3 className="uk-text-uppercase uk-text-center">Big Spaceship</h3>
              </div>
              <div className="">
                <a href="http://wwww.ad60.com">
                  <img src="assets/img/brands/ad60.jpg" width="100%"/>
                </a>
                <h3 className="uk-text-uppercase uk-text-center">AD:60</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
