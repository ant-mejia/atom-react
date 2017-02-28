import React from 'react';

class Profile extends React.Component {

  render() {
    return (
      <div>Profile {this.props.user.email}</div>
    );
  }

}

export default Profile;
