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
              <h3 key={idx}>{res.q1}</h3>
              <h3 key={idx}>{res.q2}</h3>
              <h3 key={idx}>{res.q3}</h3>
              <h3 key={idx}>{res.q4}</h3>
              <h3 key={idx}>{res.q5}</h3>
              <h3 key={idx}>{res.q6}</h3>
              <h3 key={idx}>{res.q7}</h3>
              <h3 key={idx}>{res.q8}</h3>
              <h3 key={idx}>{res.q9}</h3>
              <h3 key={idx}>{res.q10}</h3>
            </>
          )}
          </span>
          <h3>{this.props.user.matches}</h3>
          <button
            onClick={() => handleDeleteTask(user._id)}>
            Delete Yourself
          </button>
        </div>
      </section>
    );
  }
}

export default ProfilePage;

