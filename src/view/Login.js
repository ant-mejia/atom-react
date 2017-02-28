import React from 'react';

class Login extends React.Component {

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.signInUser(this.refs.email.value, this.refs.password.value)
        }}>
          <input type="email" name="email" ref="email" placeholder="Email Address"/>
          <input type="password" name="password" ref="password" placeholder="Password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default Login;
