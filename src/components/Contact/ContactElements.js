import styled from 'styled-components';

export const ContactContainer = styled.div `
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  text-align: center;
`;
export const Intro = styled.div`
  display: flex;
  margin-top: 100px;
  background-color: #DAE6F2;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const StyledBackground = styled.img`
  min-width: 1280px;
  max-width: 1280px;
`;

export const Salutations = styled.div`
  font-family: 'Ubuntu', 'sans-serif';
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  top: 0;
  margin: 350px auto auto auto;
`;

export const StyledEllipses = styled.div`
  color: #DAE6F2;
  font-size: 50px;
  padding-bottom: 10px;
`

export const StyledForm = styled.form`
  font-family: 'Ubuntu', 'sans-serif';
  font-size: 15px;
  margin-top: 20px;
  padding-top: 20px;
  width: 100%;
  height: 300px;
`;

export const StyledImage = styled.img`
  display: inline-block;
  max-width: 300px;
  min-width: 100px;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-areas:
    ". contactImage form .";
  background: 
`;