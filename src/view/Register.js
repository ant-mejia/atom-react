import React from 'react';

class Register extends React.Component {

  submitForm = (event) => {
    event.preventDefault();
    let object = {
      email: this.refs.email,
      password: this.refs.password,
      firstname: this.refs.firstname,
      lastname: this.refs.lastname,
      address: this.refs.address,
      city: this.refs.city,
      state: this.refs.state,
      zip: this.refs.zip
    }
    this.props.registerUser(object)
  }
  render() {
    return (
      <div className="main-section uk-container">
        <h1 className="section-title uk-text-uppercase">Create an Account</h1>
        <form className="uk-width-large@m" onSubmit={(e) => this.submitForm(e)}>
          <h2>Account Details</h2>
          <input className="uk-input uk-form-blank" type="email" name="email" ref="email" placeholder="Email Address"/>
          <input className="uk-input uk-form-blank" type="password" name="password" ref="password" placeholder="Password"/>
          <h2>Personal Info</h2>
          <input className="uk-input uk-form-blank" type="text" name="firstname" ref="firstname" placeholder="First Name"/>
          <input className="uk-input uk-form-blank" type="text" name="lastname" ref="lastname" placeholder="Last Name"/>
          <input className="uk-input uk-form-blank" type="text" name="address" ref="address" placeholder="Address"/>
          <input className="uk-input uk-form-blank" type="text" name="city" ref="city" placeholder="City"/>
          <input className="uk-input uk-form-blank" type="text" name="state" ref="state" placeholder="State"/>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }

}

export default Register;
