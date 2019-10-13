import React, { Component } from 'react';
import userService from '../../utils/userService';

class MatchPage extends Component {

  async componentDidMount() {
    const users = await userService.index();
    this.props.handleUpdateUsers(users);
  }

  render() {
    // console.log(`all users listed: ${JSON.stringify(this.props.users)}`);
    const userNames = this.props.users.map((user, idx) => (
      <div key={idx}>
        {user.name}
      </div>
    ));

    return (
      userNames
    )
  }
}

export default MatchPage;

