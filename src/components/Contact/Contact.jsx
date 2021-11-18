import React, { useState } from 'react';
import { send } from 'emailjs-com';

import {
  ContactContainer,
  Intro,
  StyledBackground,
  Salutations,
  StyledForm,
  StyledEllipses } from './ContactElements.js';
import background from '../Images/Mountains_edit.png';
import { AiOutlineArrowDown } from 'react-icons/ai';

const style = {
  position:"absolute",
  margin: "350px 0 0 0",
}

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <StyledEllipses> . . . . .</StyledEllipses>
      <StyledForm onSubmit={handleSubmit}>
        <label>Email: </label><br />
        <input
          type="email"
          placeholder="Email"
          name="from_name"
          defaultValue={toSend.from_name}
          onChange={handleChange}
        />
        <br/>
        <br/>
        <label>Message to Me: </label><br />
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
        <button type="submit">Send it!</button>
      </StyledForm>
    </ContactContainer>
  )
}

export default Contact;