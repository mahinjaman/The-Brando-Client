import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/restaurant/13.jpg'
import img2 from '../../assets/restaurant/8.jpg'
import img3 from '../../assets/restaurant/9.jpg'

const RestaurantSlider = () => {
    return (
        <div className='rounded-md overflow-hidden'>
            <Carousel
            
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
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
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 600,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 700
                        },
                        items: 1,
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
               <img className='rounded-md' src={img1} alt="" />
               <img className='rounded-md' src={img2} alt="" />
               <img className='rounded-md' src={img3} alt="" />
            </Carousel>
        </div>
    );
};

export default RestaurantSlider;




