import React, { Component } from "react";
import './ProfilePage.css'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        Profile Page
        <div className="profilelist">
          <h3>{this.props.user.name}</h3>
          <h3>{this.props.user.email}</h3>
          <span>{this.props.user.responses.map((res, idx) =>
            <>
              <h3 key={idx}>{res.question1}</h3>
              <h3 key={idx}>{res.question2}</h3>
              <h3 key={idx}>{res.question3}</h3>
              <h3 key={idx}>{res.question4}</h3>
              <h3 key={idx}>{res.question5}</h3>
            </>
          )}
          </span>
          <h3>{this.props.user.matches}</h3>
        </div>
      </section>
    );
  }
}

export default ProfilePage;

