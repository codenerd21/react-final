import React from 'react';
import { Link } from 'react-router-dom';
import './PageNavBar.css';

const PageNavBar = () => {
  return (
    <div className='PageNavBar'>
      <Link to="/login" className='PageNavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='PageNavBar-link'>SIGN UP</Link>
    </div>
  );
};

export default NavBar;