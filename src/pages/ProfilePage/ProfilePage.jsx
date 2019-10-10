import React, { Component } from "react";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="ProfilePage">Profile Page
    <h3>{this.props.user.name}</h3>
      <h3>{this.props.user.email}</h3>
    </div>;
  }
}

export default ProfilePage;


