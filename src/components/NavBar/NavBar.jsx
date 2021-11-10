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
  LinkWrapper
} from './NavBarElements.js';

import logo from '../Images/catLogo.jpg';

const linkStyle = {
  textDecoration: "none",
  color:"black",
};

const styledLink = {
  textDecoration: "none",
  color: "black",
  fontSize: "18px",
}

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
        <LinkWrapper>
          <Link style={styledLink} to='/portfolio/projects'>Projects</Link>
          <Link style={styledLink} to='/portfolio/resume'>Resume</Link>
          <Link style={styledLink} to='/portfolio/contact'>Contact Me</Link>
        </LinkWrapper>
      </RightSide>
    </NavbarContainer>
  )
}

export default NavBar;