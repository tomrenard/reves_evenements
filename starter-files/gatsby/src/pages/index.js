import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SimpleSlider from '../components/SimpleSlider';
import Header from '../components/Header';
import EventsGammes from '../components/EventsGammes';
import BlocLogoCustomers from '../components/BlocLogoCustomers';
import TestimonialHomePage from '../components/TestimonialHomePage';

export default function HomePage({ data }) {
  return (
    <>
      <Header />
      <BlocLogoCustomers />
      <SimpleSlider/>
      <EventsGammes />
      <TestimonialHomePage />
      <ContactForm />
    </>
  );
}
