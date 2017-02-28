import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-narbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <a className="" href="#">
                  Atom
                </a>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-text-uppercase">
                <a className="" href="/">
                  Home
                </a>
              </li>
              <li className="uk-text-uppercase">
                <a className="" href="/about">
                  About
                </a>
              </li>
              <li className="uk-text-uppercase">
                <a className="" href="#">
                  Jobs
                </a>
              </li>
              <li className="uk-text-uppercase">
                <a className="" href="/login">
                  <button className="uk-button">Sign In</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
