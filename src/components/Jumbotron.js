import React from 'react';
import {Link} from 'react-router';

class Jumbotron extends React.Component {

  render() {
    return (
      <div className="uk-width-1-1" data-uk-height-viewport>
        <div className="uk-cover-container" data-uk-height-viewport>
          <img src="assets/img/scene.jpg" alt="Hero Scene" data-uk-cover/>
          <div className="jumbotron">
            Jumbo
            <Link to="/register">
              <button className="uk-button rounded transparent wt medium-text lato uk-position-medium uk-position-bottom-center">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default Jumbotron;
