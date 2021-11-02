import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import './NavBar.css';

import logo from '../Images/catLogo.jpg';

const NavBar = () => {
  return (
    <div className="ContainerNavBar">
        <Link className="logoLink" to ='/home'>
          <div className="logoContainer">
            <img className="logo" src={logo} alt="not available" />
            <h1 className="title">Loki's Den</h1>
          </div>
        </Link>
    <div className="buttonContainer">
        <Link className="btn" to='/projects'>Projects</Link>
        <Link className="btn" to='/about'>About</Link>
        <Link className="btn" to='/contact'>Contact Me</Link>
      </div>
    </div>
  )
}

export default NavBar;