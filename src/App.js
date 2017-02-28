import React, {Component} from 'react';
import $ from 'jquery';
import {BrowserRouter, Match, Miss} from 'react-router';
import ReactSVG from 'react-svg';
import 'uikit';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './view/Home';
import About from './view/About';
import Login from './view/Login';
import Register from './view/Register';
import Base from 're-base';
let atom = Base.createClass({
  apiKey: "AIzaSyAC2oMYQuyUvd2oNblS2nx8mv86B468gIk",
  authDomain: "atomtalent-9d67c.firebaseapp.com",
  databaseURL: "https://atomtalent-9d67c.firebaseio.com",
  storageBucket: "atomtalent-9d67c.appspot.com"
}, 'atom');
class App extends Component {

  signInUser = (email, password) => {
    atom.authWithPassword({
      email,
      password
    }, (data) => {
      console.log(data);
    });
  }
  //route
  //npm install react-router-dom@next

  render() {
    return (
      <div className="body">
        <Header/>
        <BrowserRouter>
          <div className="main-wrapper">
            <Match exactly pattern="/" component={Home}/>
            <Match exactly pattern="/about" component={About}/>
            <Match exactly pattern="/login" component={() => <Login signInUser={this.signInUser}/>}/>
            <Match exactly pattern="/register" component={Register}/>
            <Miss component={Home}/>
          </div>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
