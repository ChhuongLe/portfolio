import React, { useState } from 'react';
import { send } from 'emailjs-com';

import {
  ContactContainer,
  Intro,
  StyledBackground,
  Salutations,
  StyledForm,
  StyledEllipses,
  StyledImage,
  StyledLabel,
  StyledButton,
  FormContainer,
  Modal } from './ContactElements.js';
import background from '../Images/Mountains_edit.png';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ContactImage from '../Images/Loki.jpg';

const style = {
  position:"absolute",
  margin: "350px 0 0 0",
}

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(!sent);
    send(
      'service_xvogkdw',
      'template_42h1wri',
      toSend,
      'user_CWvDaUwJyr3ZgRiAYPp2Q'
    )
    .then((res)=>{
      console.log('Sent!', res.status, res.text);
    })
    .catch((err)=>{
      console.log('Failed: ' + err);
    });

  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setToSend({... toSend,[e.target.name]: e.target.value});
  }

  const handleClick = () => {
    setSent(!sent);
  }

  let formView = (
    <StyledForm className="form" onSubmit={handleSubmit}>
      <StyledLabel>Email: </StyledLabel><br />
      <input
        type="email"
        placeholder="Email"
        name="from_name"
        defaultValue={toSend.from_name}
        onChange={handleChange}
      />
      <br/>
      <br/>
      <StyledLabel>Message to Me: </StyledLabel><br />
      <textarea
        placeholder="What's on your mind?"
        type="text"
        name="message"
        defaultValue={toSend.message}
        onChange={handleChange}
        rows="5"
        cols="23"
      />
      <br/>
      <StyledButton type="submit">Send it!</StyledButton>
    </StyledForm>
  );

  let modal;

  if (sent) {
    modal = (
      <Modal>
        <div>Sent!</div>
      </Modal>
    )
  }

  return (
    <ContactContainer>
      <Intro>
        <StyledBackground src={background} />
        <Salutations>
          Want to touch base or just talk about cats and photography?
          <br/>
          <br/>
          Shoot me a message!
        </Salutations>
        <AiOutlineArrowDown style={style} size={30}/>
      </Intro>
      <FormContainer>
        {/* <StyledEllipses> . . . . .</StyledEllipses> */}
        <StyledImage className="contactImage" src={ContactImage} />
        {formView}
        {modal}
      </FormContainer>
    </ContactContainer>
  )
}

export default Contact;