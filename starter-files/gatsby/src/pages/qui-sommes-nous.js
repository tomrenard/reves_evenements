import React from 'react';
import HeaderAbout from '../components/HeaderAbout';
import HistoryAbout from '../components/HistoryAbout';
import ArticleAbout from '../components/ArticleAbout';
import ValuesAbout from '../components/ValuesAbout';
import ContactForm from '../components/ContactForm';


export default function About() {
  return (
    <>
      <HeaderAbout />
      <HistoryAbout />
      <ArticleAbout />
      <ValuesAbout />
      <ContactForm />
    </>
  );
}
