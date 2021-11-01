import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import './NavBar.css';

import logo from '../Images/catLogo.jpg';

const NavBar = () => {
  return (
    <div className="ContainerNavBar">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="not available" />
        <h1 className="title">Loki's Den</h1>
      </div>
      <div className="buttonContainer">
        <Router>
          <Link to='/projects'>Projects</Link>
        </Router>
        <button className="btn">Projects</button>
        <button className="btn">About</button>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  )
}

export default NavBar;