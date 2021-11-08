import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {
  NavbarContainer,
  LeftSide,
  RightSide,
  LogoContainer,
  StyledImage,
  StyledTitle,
} from './NavBarElements.js';

import logo from '../Images/catLogo.jpg';

const linkStyle = {
  textDecoration: "none",
  color:"black",
};

const NavBar = () => {
  return (
    <NavbarContainer >
      <LeftSide>
        <Link style={linkStyle} to ='/portfolio/home'>
          <LogoContainer>
            <StyledImage src={logo} alt="not available" />
            <StyledTitle>Chhuong's Corner</StyledTitle>
          </LogoContainer>
        </Link>
      </LeftSide>
      <RightSide>
        <Link className="btn" to='/portfolio/projects'>Projects</Link>
        <Link className="btn" to='/portfolio/resume'>Resume</Link>
        <Link className="btn" to='/portfolio/contact'>Contact Me</Link>
      </RightSide>
    </NavbarContainer>
  )
}

export default NavBar;