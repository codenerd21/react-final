import React from 'react';
import { Link } from 'react-router-dom';
import './MatchBoard.css';
import NavBar from '../NavBar/NavBar';

const MatchBoard = (props) => (
  <div>
    <NavBar
      user={props.user}
      handleLogout={props.handleLogout}
    />
  </div>
);

export default MatchBoard;