import React from 'react';
import NewsCard from './NewsCard'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const newsSlider = ({newses}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <div className='w-2/3 m-auto'>
            <div className=''>
                <Slider {...settings}>
                {newses?.map(news => {
                    return <NewsCard news={news}></NewsCard>
                })}
                </Slider>
            </div>
        </div>
    );
};

export default newsSlider;