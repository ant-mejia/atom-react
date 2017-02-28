import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-narbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/">
                  Atom
                </Link>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-text-uppercase">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="uk-text-uppercase">
                <Link to="/about">
                  About
                </Link>
              </li>
              <li className="uk-text-uppercase">
                <Link to="/jobs">
                  Jobs
                </Link>
              </li>
              <li className="uk-text-uppercase">
                <Link to="/login">
                  <button className="uk-button">Sign In</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
