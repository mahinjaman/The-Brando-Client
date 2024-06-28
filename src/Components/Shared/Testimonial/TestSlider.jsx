import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard';

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
            breakpoint: 1024,
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
        <div className='w-[400px] md:w-5/6 m-auto'>
                <Slider {...settings}>
                {testimonials?.map(testimonial => {
                    return <div className='p-5'>
                        <TestimonialCard testimonial={testimonial}></TestimonialCard>
                    </div>
                })}
                </Slider>
        </div>
    );
};

export default TestSlider;