import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from 'gatsby';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from 'gatsby-image';
import styled from 'styled-components';

const SliderStyles = styled.div`
  margin: 1em auto;
  max-width: 30em;
  .slick-arrow, .slick-next {
    background: transparent;
  }
  .slick-next:before, .slick-prev:before {
    color: #000;
  }
  .slider-hp {
  }
`;

const ImgSliderStyles = styled.div`
  Img {
    border-radius: 1em;
  }
  h3 {
    position: absolute;
    bottom: 10px;
    padding: 5px 5px;
    margin-left: 80px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    font-weight: 400;
    font-size: 1.1em;
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
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <>
      <SliderStyles>
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
      </SliderStyles>
      </>
  );
}
