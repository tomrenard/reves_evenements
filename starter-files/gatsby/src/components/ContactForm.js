import React from 'react';
import styled from 'styled-components';

const SectionContactFormStyles = styled.section`
  padding: 0px 40px;
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;

const DivContactFormStyles = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  h2 {
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    padding: 0px 38px;
    margin-bottom: 14px;
  }
`;

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input, textarea, select {
    border: 3px solid #000;
    border-radius: 5px;
    padding: 8px;
    min-width: 500px;
    line-height: normal;
    margin: 8px 0px;
    font-family: 'Work-sans', sans-serif;
  }
  textarea {
    height: 100px;
  }
  select {
    width: 100%;
  }
`;

export default function ContactForm() {
  return (
    <SectionContactFormStyles>
    <DivContactFormStyles>
        <FormStyles name="Contact Form" method="POST" data-netlify="true" action="/">
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
        </FormStyles>
      </DivContactFormStyles>
    </SectionContactFormStyles>
  );
}
