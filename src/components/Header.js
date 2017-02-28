import React from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import {Link} from 'react-router';
import $ from 'jquery';

class Header extends React.Component {

  render() {
    let AuthButton = () => {
      if (this.props.user) {
        return (
          <Link to="/profile">
            {this.props.user.email}
          </Link>
        )
      }
      return (
        <Link to="/login">
          <button className="uk-button">Sign In</button>
        </Link>
      )
    }
    return (
      <header data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className={`uk-navbar-container uk-navbar-transparent`} data-uk-navbar ref="nav">
          <div className="uk-narbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <a className="" href="#top" data-uk-scroll>
                  <ReactSVG path="../logo.svg"/>
                  Atom
                </a>
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
                {AuthButton()}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
