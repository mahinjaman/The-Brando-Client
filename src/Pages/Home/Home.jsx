import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';
import About from './About/About';
import PopularRooms from './PopularRooms/PopularRooms';
import ExtraService from './ExtraService/ExtraService';
import Cooperation from './Cooperation/Cooperation';
import RoomFacility from './RoomFacility/RoomFacility';
import LatestNews from './LatestNews/LatestNews';
import NewsSlider from './LatestNews/NewsSlider';
import Testimonial from '../../Components/Shared/Testimonial/Testimonial';
import TestSlider2 from '../../Components/Shared/Testimonial/TestSlider2';

const Home = () => {
    return (
        <div className='bg-white'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* Hero */}
            <Hero />
            
            {/* About */}

            <About />

            {/* Popular Rooms */}
            <PopularRooms />

              {/* Extra Service  */}
              <ExtraService />

              {/* Cooperation */}
              <Cooperation />

              {/* Room Facility */}
              <RoomFacility />

              {/* Latest News */}
              <LatestNews />

              {/* Testimonials */}
 
              <Testimonial />
        </div>
    );
};

export default Home;