import React, { Component } from 'react';
import userService from '../../utils/userService';
import './MatchPage.css'

class MatchPage extends Component {

  constructor() {
    super();
    this.state = {
      responses: [],
      user: ""
    };
  }

  async componentDidMount() {
    const users = await userService.index();
    console.log("---> users in MatchPage: " + users);
    this.props.handleUpdateUsers(users);
    this.state.user = this.props.user;
  }

  handleSearch = async e => {
    console.log("You have answered question: " + e.target.name + e.target.value);
    // 1) We need the user info
    let user = this.state.user;
    console.log("===> user : " + JSON.stringify(user));
    // 2) Question number and the answer / value  
    let questionNumber = e.target.name;
    let value = e.target.value;
    console.log("===> questionNumber : " + questionNumber);
    console.log("===> value : " + value);
    // 3) Update data in the db
    // Check what question was answered and update that question only
    let responses = user.responses[0]; // {question1: "Male", question2: "Cars"}
    responses.question2 = "Cars";
    responses.question3 = "Sailing";
    //user.responses[0] = { question1: "Male" };
    const updatedUser = await userService.update(user);




    // const newTasksArray = this.state.tasks.map(task =>
    //   task._id === updatedTask._id ? updatedTask : task
    // );
    // this.setState(
    //   { tasks: newTasksArray },
    //   // Using cb to wait for state to update before rerouting
    //   () => this.props.history.push('/')
    // );

    // 2) Update question in the db
    // 3) Filter users based on answer

    // let users = this.state.users;
    // if (e.target.value) {
    //   users = users.filter(user => {
    //     let otherUsersResponses = user.responses[0];
    //     if (questionNumber == "3"){
    //        let answer = otherUsersResponses.question3 
    //        if(answer.includes(e.target.value){
    //          return true;
    //}
    //}
    //     1) 
    //     2) If a single response matches / includes e.target.value return treu an 
    //     return user.responses[0].includes(e.target.value);
    //   });
    // }
    // this.setState({ users });
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
              name="1"
              value="Software Engineering"
              onChange={e => this.handleSearch(e)}
            />
            Software Engineering<br />
            <input
              type="radio"
              name="1"
              value="UX Design"
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
              name="2"
              value="Waiting for the Elevator at GA"
              onChange={e => this.handleSearch(e)}
            />
            Waiting for the Elevator at GA<br />
            <input
              type="radio"
              name="2"
              value="Waiting for the Bathroom at GA"
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
              name="3"
              value="Single"
              onChange={e => this.handleSearch(e)}
            />
            Single<br />
            <input
              type="radio"
              name="3"
              value="In a Relationship"
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
              name="4"
              value="Coffee"
              onChange={e => this.handleSearch(e)}
            />
            Coffee<br />
            <input
              type="radio"
              name="4"
              value="Chocolate"
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
              name="5"
              value="Beginner"
              onChange={e => this.handleSearch(e)}
            />
            Beginner<br />
            <input
              type="radio"
              name="5"
              value="Intermediate"
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
              name="6"
              value="Brown Bagging It"
              onChange={e => this.handleSearch(e)}
            />
            Brown Bagging It<br />
            <input
              type="radio"
              name="6"
              value="Eat Out"
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
              name="7"
              value="Man Should Pay Bill or One Person"
              onChange={e => this.handleSearch(e)}
            />
            Man Should Pay Bill or One Person<br />
            <input
              type="radio"
              name="7"
              value="Ok to Split"
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
              name="8"
              value="Oakland Raiders"
              onChange={e => this.handleSearch(e)}
            />
            Oakland Raiders<br />
            <input
              type="radio"
              name="8"
              value="SF 49ers"
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
              name="9"
              value="Success"
              onChange={e => this.handleSearch(e)}
            />
            Success<br />
            <input
              type="radio"
              name="9"
              value="Failure"
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
              name="10"
              value="Drinks and Happy Hour"
              onChange={e => this.handleSearch(e)}
            />
            Drinks and Happy Hour<br />
            <input
              type="radio"
              name="10"
              value="Dancing and Clubs"
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

