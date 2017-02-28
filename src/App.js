import React, {Component} from 'react';
import $ from 'jquery';
import * as UIkit from 'uikit'
import Notify from 'react-uikit-notify';
import {BrowserRouter, Match, Miss} from 'react-router';
import ReactSVG from 'react-svg';
import Icons from 'react-uikit-icons';
import logo from './logo.svg';
import MatchOnAuth from './components/MatchOnAuth';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './view/Home';
import About from './view/About';
import Login from './view/Login';
import Register from './view/Register';
import Profile from './view/Profile';
import Base from 're-base';
let atom = Base.createClass({
  apiKey: "AIzaSyAC2oMYQuyUvd2oNblS2nx8mv86B468gIk",
  authDomain: "atomtalent-9d67c.firebaseapp.com",
  databaseURL: "https://atomtalent-9d67c.firebaseio.com",
  storageBucket: "atomtalent-9d67c.appspot.com"
}, 'atom');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this.getUser();
  }

  notify = () => {}

  flashError = (msg) => {
    console.log(Notify)
  }

  getUser = () => {
    atom.onAuth((user) => this.setUser(user));
  }

  isUserAuth = () => {
    if (this.state.user === null) {
      return false;
    }
    if (Object.keys(this.state.user).length === 0) {
      return false;
    }
    return true;
  }

  setUser = (user) => {
    this.setState({user});
  }

  verifyUser = (error, user) => {
    if (error) {
      this.flashError('error');
    }
    this.setUser(user);
  }

  registerUser = (obj) => {
    atom.createUser({
      email: 'bobtony@firebase.com',
      password: 'correcthorsebatterystaple'
    }, this.verifyUser);
  }

  signInUser = (email, password) => {
    atom.authWithPassword({
      email,
      password
    }, this.verifyUser);
  }

  signOutUser = () => {
    atom.unauth()
  }
  //route
  //npm install react-router-dom@next

  render() {
    return (

      <BrowserRouter>
        {({
          ...router
        }) => (
          <div className="body uk-flex uk-flex-column" data-uk-height-viewport>
            <Header router={router}/>
            <div className="main-wrapper uk-container uk-flex-1">
              <Match exactly pattern="/" component={Home}/>
              <Match exactly pattern="/about" component={About}/>
              <Match exactly pattern="/login" component={() => <Login isUserAuth={this.isUserAuth} signInUser={this.signInUser}/>}/>
              <Match exactly pattern="/register" component={() => <Register registerUser={this.registerUser}/>}/>
              <MatchOnAuth user={this.state.user} isUserAuth={this.isUserAuth} signOutUser={this.signOutUser} pattern="/profile" component={Profile}/>
              <Miss component={Home}/>
            </div>
            <Footer/>
          </div>
        )}
      </BrowserRouter>
    )
  }
}

export default App;
