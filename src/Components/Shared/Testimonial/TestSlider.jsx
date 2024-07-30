import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard';
import PropTypes from "prop-types"
const TestSlider = ({testimonials}) => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
        <div className='md:w-5/6 m-auto relative'>
                <Slider {...settings}>
                {testimonials?.map((testimonial, idx) => {
                    return <div className='p-5' key={idx}>
                        <TestimonialCard testimonial={testimonial}></TestimonialCard>
                    </div>
                })}
                </Slider>
        </div>
    );
};

TestSlider.propTypes = {
    testimonials: PropTypes.array.isRequired
}

export default TestSlider;