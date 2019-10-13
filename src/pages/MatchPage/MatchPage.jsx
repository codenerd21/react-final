import React, { Component } from 'react';
import userService from '../../utils/userService';
import './MatchPage.css'

class MatchPage extends Component {

  async componentDidMount() {
    const users = await userService.index();
    this.props.handleUpdateUsers(users);
  }

  handleSearch = e => {
    let users = this.state.users;
    if (e.target.value) {
      users = users.filter(s => {
        return s.code.includes(e.target.value);
      });
    }
    this.setState({ users });
  };

  render() {
    return (
      <div>
        <h3>My Preferences:</h3>
        <section className="radio">
          <label className="radiolabel">
            My Study Choice:<br />
            <input
              type="radio"
              name="study-type"
              value="a"
              onChange={e => this.handleSearch(e)}
            />
            Software Engineering<br />
            <input
              type="radio"
              name="study-type"
              value="b"
              onChange={e => this.handleSearch(e)}
            />
            UX Design
          </label>
          <br />
          <br />


          <label className="radiolabel">
            Which is worse?<br />
            <input
              type="radio"
              name="worse"
              value="c"
              onChange={e => this.handleSearch(e)}
            />
            Waiting for the Elevator at GA<br />
            <input
              type="radio"
              name="worse"
              value="d"
              onChange={e => this.handleSearch(e)}
            />
            Waiting for the Bathroom at GA
          </label>
          <br />
          <br />


          <label className="radiolabel">
            My Status:<br />
            <input
              type="radio"
              name="relationship"
              value="e"
              onChange={e => this.handleSearch(e)}
            />
            Single<br />
            <input
              type="radio"
              name="relationship"
              value="f"
              onChange={e => this.handleSearch(e)}
            />
            In a Relationship
          </label>
          <br />
          <br />

          <label className="radiolabel">
            Which would you be willing to GIVE UP?:<br />
            <input
              type="radio"
              name="giveup"
              value="g"
              onChange={e => this.handleSearch(e)}
            />
            Coffee<br />
            <input
              type="radio"
              name="giveup"
              value="h"
              onChange={e => this.handleSearch(e)}
            />
            Chocolate
          </label>
          <br />
          <br />


          <label className="radiolabel">
            My Exp. Level: (Programming | Design | Data)<br />
            <input
              type="radio"
              name="exp"
              value="i"
              onChange={e => this.handleSearch(e)}
            />
            Beginner<br />
            <input
              type="radio"
              name="exp"
              value="j"
              onChange={e => this.handleSearch(e)}
            />
            Intermediate
          </label>
          <br />
          <br />


          <label className="radiolabel">
            Lunch Preference:<br />
            <input
              type="radio"
              name="lunch"
              value="k"
              onChange={e => this.handleSearch(e)}
            />
            Brown Bagging It<br />
            <input
              type="radio"
              name="lunch"
              value="l"
              onChange={e => this.handleSearch(e)}
            />
            Eat Out
          </label>
          <br />
          <br />


          <label className="radiolabel">
            First Date:<br />
            <input
              type="radio"
              name="date"
              value="m"
              onChange={e => this.handleSearch(e)}
            />
            Man Should Pay Bill or One Person<br />
            <input
              type="radio"
              name="date"
              value="n"
              onChange={e => this.handleSearch(e)}
            />
            Ok to Split
          </label>
          <br />
          <br />


          <label className="radiolabel">
            Sports Team:<br />
            <input
              type="radio"
              name="sports"
              value="o"
              onChange={e => this.handleSearch(e)}
            />
            Oakland Raiders<br />
            <input
              type="radio"
              name="sports"
              value="p"
              onChange={e => this.handleSearch(e)}
            />
            SF 49ers
          </label>
          <br />
          <br />


          <label className="radiolabel">
            Do you have a FEAR OF:<br />
            <input
              type="radio"
              name="fear"
              value="q"
              onChange={e => this.handleSearch(e)}
            />
            Success<br />
            <input
              type="radio"
              name="fear"
              value="r"
              onChange={e => this.handleSearch(e)}
            />
            Failure
          </label>
          <br />
          <br />


          <label className="radiolabel">
            My Ideal Friday Night (Blow off steam):<br />
            <input
              type="radio"
              name="friday"
              value="s"
              onChange={e => this.handleSearch(e)}
            />
            Drinks and Happy Hour<br />
            <input
              type="radio"
              name="friday"
              value="t"
              onChange={e => this.handleSearch(e)}
            />
            Dancing and Clubs
          </label>
          <br />
          <br />
        </section>
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

