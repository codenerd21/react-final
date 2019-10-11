import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <h1>GA Connections</h1>
      <h2>Connecting Students with Similar Interests</h2>
      <hr></hr>
      <span role="img" aria-label="emoji">👨👩🏽‍🦰👴🏿👱🏻‍</span>
      <footer className="match-footer">
        <h3>Made at GA - SF</h3>
      </footer>
    </div>
  );
};

export default HomePage;