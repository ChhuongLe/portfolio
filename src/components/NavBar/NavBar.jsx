import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  LeftSide,
  RightSide,
  LogoContainer,
  StyledImage,
  StyledTitle,
  LinkWrapper,
  StyledLink,
  Bars,
  Dropdown,
  CloseButton,
  LinkContainer,
  DropdownLink
} from './NavBarElements.js';

import logo from '../Images/catLogo.jpg';

const linkStyle = {
  textDecoration: "none",
  color:"black",
};

const NavBar = () => {
  const [isClick, setIsClick] = useState(false);

  const barsClicked = () => {
    setIsClick(!isClick);
  }

  let dropDown;

  if(isClick) {
    dropDown = (
      <Dropdown>
        <CloseButton onClick={barsClicked}>X</CloseButton>
        <LinkContainer>
          <DropdownLink to='/portfolio/projects' onClick={barsClicked}>Projects</DropdownLink> <br />
          <DropdownLink to='/portfolio/resume' onClick={barsClicked}>Resume</DropdownLink> <br />
          <DropdownLink to='/portfolio/contact' onClick={barsClicked}>Contact Me!</DropdownLink>
        </LinkContainer>
      </Dropdown>
    );
  }

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
        <Bars onClick={barsClicked}/>
        {dropDown}
        <LinkWrapper>
          <StyledLink to='/portfolio/projects'>Projects |</StyledLink>
          <StyledLink to='/portfolio/resume'>Resume |</StyledLink>
          <StyledLink to='/portfolio/contact'>Contact Me</StyledLink>
        </LinkWrapper>
      </RightSide>
    </NavbarContainer>
  )
}

export default NavBar;