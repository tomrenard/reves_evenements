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
      <h2>Obtenir un devis gratuit !</h2>
      <ContactFormStyles>
        <label>
          <input type="text" placeHolder="Votre nom et prénom" name="firstName-lastname" />
        </label>
        <label>
          <input type="text" placeHolder="Votre email" name="email" />
        </label>
        <label>
          <input type="text" placeHolder="Sélectionner le type d'événements" name="type" />
        </label>
        <label>
          <input type="text" placeHolder="Votre message" name="text-input" />
        </label>
        <button type="submit">Envoyer</button>
      </ContactFormStyles>
    </>
  );
}
