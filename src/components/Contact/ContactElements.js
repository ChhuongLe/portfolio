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
  margin-top: 30px;
  padding-top: 40px;
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
  border-radius: 20px;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gird-template-rows: 1fr 1fr;
  grid-template-areas:
    ". contactImage form .";
  background: #3c6487;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-type: column;
  }
`;

export const StyledLabel = styled.label`
  color: #FFF;
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  background-color: green;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  padding: 7px 20px 7px 20px;
  color: white;

  :hover{
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  inset: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition-duration: 4s;
  justify-content: center;
  background-color: rgba(0,0,0,0.4);
  display: flex;
`;

export const MessageSent = styled.div`
  background-color: white;
  margin-top: 500px;
  padding: 50px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
`;