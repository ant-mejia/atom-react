import React from 'react';
import {Redirect} from 'react-router';
import UIkit from 'uikit';

class Login extends React.Component {

  render() {
    if (this.props.isUserAuth()) {
      return <Redirect to={'/profile'}/>
    }
    return (
      <div>
        <h1>Login</h1>
        <form className="uk-form" onSubmit={(e) => {
          e.preventDefault();
          this.props.signInUser(this.refs.email.value, this.refs.password.value)
        }}>
          <input className="uk-input uk-form-blank" type="email" name="email" ref="email" placeholder="Email Address"/>
          <input className="uk-input uk-form-blank" type="password" name="password" ref="password" placeholder="Password"/>
          <button className="uk-button uk-button-default uk-width-1-2 uk-align-center" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default Login;
