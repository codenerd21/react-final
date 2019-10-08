import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginHomePage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import MatchBoard from '../../components/MatchBoard/MatchBoard';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      difficulty: 'Easy',
      scores: [],
      user: userService.getUser()
    };
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">GA Dates</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MatchBoard
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
            />
          } />
          <Route exact path='/login' render={() =>
            <LoginPage
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;

