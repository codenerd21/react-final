import React, { Component } from 'react';
import userService from '../../utils/userService';
import './MatchPage.css'

class MatchPage extends Component {

  async componentDidMount() {
    const users = await userService.index();
    this.props.handleUpdateUsers(users);
  }

  render() {
    return (
      <div className='App'>
        <section className='matchboard'>
          {this.props.users.map((user, idx) =>
            <div className='matchname' key={idx}>
              {user.name}
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default MatchPage;

