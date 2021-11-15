import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const NavbarContainer = styled.div`
  background-color:#FFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color:rgba(0, 0, 0, 0.687);
  border-bottom-style: solid;
  border-bottom-width: thin;
  position: fixed;
  min-width: 100%;
  max-width: 100%;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const LeftSide = styled.div`
  display: flex;
  text-decoration: none;
`;

export const StyledImage = styled.img`
  width: auto;
  height: 80px;
  padding: 15px 0px 15px 15px;
`;

export const StyledTitle = styled.h1`
  margin-top: 33px;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  display: flex;
  padding-top: 40px;
  padding-right: 20px;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  height: 100%;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-right: 10px;
  font-size: 18px;
  font-weight: 600;
  margin-top: -10px;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  margin-top: 10px;
  font-size: 22px;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 58%;
  width: 100%;
  background-color: #000;
  height: 300px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div`

`;

export const CloseButton = styled.div`
  color: white;
  padding-left: 20px;
  padding-top: 20px;
  font-weight: bolder;
  font-family: 'Nunito', sans-serif;

  :hover{
    cursor: pointer
  }
`;

export const LinkContainer = styled.div`
  color: white;
  padding-left: 30px;
  padding-top: 20px;
  align-text: left;
`;

export const DropdownLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;
