import React from 'react';
import styled from 'styled-components';

const SectionContactFormStyles = styled.section`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  h2 {
    margin: 0 auto;
    tex
  }
`;

const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    width: 100%;
  }
`;

export default function ContactForm() {
  return (
    <SectionContactFormStyles>
      <h2>Obtenir un devis gratuit !</h2>
      <ContactFormStyles>
        <label>
          <input type="text" placeHolder="Votre nom et prénom" name="firstName-lastname" />
        </label>
        <label>
          <input type="text" placeHolder="Votre email" name="email" />
        </label>
        <label>
          <input type="text" placeHolder="Type d'événements" name="type" />
        </label>
        <label>
          <input type="text" placeHolder="Votre message" name="text-input" />
        </label>
        <button type="submit">Envoyer</button>
      </ContactFormStyles>
    </SectionContactFormStyles>
  );
}
