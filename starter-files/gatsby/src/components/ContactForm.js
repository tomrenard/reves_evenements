import React from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 1em;
`;

export default function ContactForm() {
  return (
    <>
      <ContactFormStyles>
        <label>
          Nom et prénom
          <input type="text" name="firstName-lastname" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Type d'événements
          <input type="text" name="type" />
        </label>
        <label>
          Message
          <input type="text" name="text-input" />
        </label>
        <button type="submit">Submit</button>
      </ContactFormStyles>
    </>
  );
}
