import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from 'gatsby';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImgSliderStyles = styled.div`
  width: 100%;
  Img {
    max-width: 60rem;
    width: 100%;
    margin: auto auto;
    margin-top: 2em;
    max-height: 30rem;
    margin-bottom
    position: relative;
    z-index: -100;
  }
  h3 {
    position: absolute;
    z-index: 100;
    bottom: 1em;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    font-size: 2em;
    padding-left: 1em;
  }
`;

export default function SimpleSlider() {
  const data = useStaticQuery(graphql`query Slider {
    allSanityHomePage {
      nodes {
        title2
        event1
        event2
        event3
        imagelastevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagelastevent2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagelastevent3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`)
  const content = data.allSanityHomePage.nodes[0];
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <ImgSliderStyles>
        <Img fluid={content.imagelastevent1.asset.fluid} alt={content.event1} />
        <h3>{content.event1}</h3>
      </ImgSliderStyles>
      <ImgSliderStyles>
        <Img fluid={content.imagelastevent2.asset.fluid} alt={content.event2} />
        <h3>{content.event2}</h3>
      </ImgSliderStyles>
      <ImgSliderStyles>
        <Img fluid={content.imagelastevent3.asset.fluid} alt={content.event3} />
        <h3>{content.event3}</h3>
      </ImgSliderStyles>
    </Slider>
  );
}
