import styled from 'styled-components';

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
`;

export const RightSide = styled.div`
  display: flex;
  padding-top: 40px;
  padding-right: 20px;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  height: 100%;
`;