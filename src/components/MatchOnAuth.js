import React, {Component} from 'react';
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import Profile from '../view/Profile';

class MatchOnAuth extends React.Component {
  render() {
    return (
      <div>
        <Match pattern="/profile" exactly render={() => (this.props.isUserAuth()
          ? (<Profile {...this.props}/>)
          : (<Redirect to="/login"/>))}/>
      </div>
    )
  }
}

export default MatchOnAuth;
