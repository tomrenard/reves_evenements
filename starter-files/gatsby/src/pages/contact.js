import React from 'react';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

const SectionContactStyles = styled.div`
  margin-top: 124px;
`;

export default function Contact() {
  return (
    <SectionContactStyles>
      <ContactForm />
    </SectionContactStyles>
  );
}
