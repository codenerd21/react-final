import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import LoginPage from "../LoginHomePage/LoginPage";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import MatchPage from "../MatchPage/MatchPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      users: []
    };
  }

  handleUpdateUsers = (users) => {
    this.setState({ users });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">GA Connections</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/match"
            render={({ history }) => (
              <MatchPage
                user={this.state.user}
                users={this.state.users}
                handleUpdateUsers={this.handleUpdateUsers}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(history) => (
              this.state.user
                ?
                <ProfilePage
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
                :
                <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={history => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );

  }
}

export default App;
