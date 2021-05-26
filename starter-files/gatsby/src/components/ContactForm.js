import React from 'react';
import styled from 'styled-components';

const SectionContactFormStyles = styled.section`
  margin: 0px auto;
  padding-top: 40px;
  padding-bottom: 80px;
  width: 422px;
  max-width: 100%;
  h2 {
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    padding: 0px 32px;
  }
`;

const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  gap: 1em;
  input {
    border: 3px solid #000;
    border-radius: 5px;
    height: 50px;
    line-height: normal;
    color: #282828;
    display: block;
    width: 100%;
    padding-left: 12px;
  }
  button {
    width: 50%;
  }
`;

export default function ContactForm() {
  return (
    <SectionContactFormStyles>
      <h2>Obtenir un devis gratuit !</h2>
      <ContactFormStyles>
        <label>
          <input type="text" placeholder="Votre nom et prénom" name="firstName-lastname" />
        </label>
        <label>
          <input type="text" placeholder="Votre email" name="email" />
        </label>
        <label>
          <input type="text" placeholder="Type d'événements" name="type" />
        </label>
        <label>
          <input type="text" placeholder="Votre message" name="text-input" />
        </label>
        <button type="submit">Envoyer</button>
      </ContactFormStyles>
    </SectionContactFormStyles>
  );
}
