import React, { Component } from "react";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return <div className="ProfilePage">Profile Page</div>;
  }
}

export default ProfilePage;
