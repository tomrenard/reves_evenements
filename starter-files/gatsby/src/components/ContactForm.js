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
      <form name="Contact Form" method="POST" data-netlify="true">
        <h2>Obtenir un devis gratuit !</h2>
          <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Votre email :</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message :</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </SectionContactFormStyles>
  );
}
