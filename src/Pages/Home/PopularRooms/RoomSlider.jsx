import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types'
import PopularRoomCard from './PopularRoomCard';
const RoomSlider = ({rooms}) => {
  return (
    <div className='w-[95%] md:w-11/12 m-auto'>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        autoPlay={true}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 600,
              min: 0
            },
            
            items: 1,
            partialVisibilityGutter: 30,
            
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 700
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {
          rooms?.map(room => {
            return <div key={room._id} className="p-2"><PopularRoomCard item={room}></PopularRoomCard></div>
          })
        }
      </Carousel>
    </div>
  );
};

RoomSlider.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default RoomSlider;
