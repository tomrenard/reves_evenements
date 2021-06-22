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

export default function ContactForm() {
  return (
    <SectionContactFormStyles>
      <form name="Contact Form" method="POST" data-netlify="true" action="/">
        <h2>Obtenir un devis gratuit !</h2>
          <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <input placeholder="Votre nom et prénom" name="nom" />
        </div>
        <div>
          <input placeholder="Votre email" type="email" name="email" />
        </div>
        <div>
          <select name="type">
            <option value="autres">Type d'événements</option>
            <option value="séminaires">Séminaire</option>
            <option value="soirées d'entreprise">Soirée d'entreprise</option>
            <option value="team-buildings">Team building</option>
            <option value="voyages incentives">Voyage incentive</option>
          </select>
        </div>
        <div>
          <textarea placeholder="Votre message" name="message" />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </SectionContactFormStyles>
  );
}
