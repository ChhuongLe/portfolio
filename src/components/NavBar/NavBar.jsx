import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  LeftSide,
  RightSide,
  LogoContainer,
  StyledImage,
  StyledTitle,
  LinkWrapper,
  StyledLink
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
        <LinkWrapper>
          <StyledLink to='/portfolio/projects'>Projects </StyledLink>
          <StyledLink to='/portfolio/resume'>Resume</StyledLink>
          <StyledLink to='/portfolio/contact'>Contact Me</StyledLink>
        </LinkWrapper>
      </RightSide>
    </NavbarContainer>
  )
}

export default NavBar;