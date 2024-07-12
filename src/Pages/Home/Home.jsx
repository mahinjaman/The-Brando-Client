import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';
import About from './About/About';
import PopularRooms from './PopularRooms/PopularRooms';
import ExtraService from './ExtraService/ExtraService';
import Cooperation from './Cooperation/Cooperation';
import RoomFacility from './RoomFacility/RoomFacility';
import LatestNews from './LatestNews/LatestNews';
import Testimonial from '../../Components/Shared/Testimonial/Testimonial';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Home = () => {

    useEffect(()=>{
        AOS.init({
            duration:1000
        });
      },[])
    return (
        <div className='bg-white'>
            <Helmet>
                <title>The Brando | Home</title>
            </Helmet>
            {/* Hero */}
            <div  data-aos="zoom-out">
                <Hero />
            </div>

            {/* About */}

            <div data-aos="zoom-in-right">
                <About />
            </div>

            {/* Popular Rooms */}
            <div data-aos="zoom-in-left">
                <PopularRooms />
            </div>

            {/* Extra Service  */}
            <div data-aos="zoom-in-right"> 
                <ExtraService />
            </div>

            {/* Cooperation */}
            <div>
                <Cooperation />
            </div>

            {/* Room Facility */}
            <div  data-aos="zoom-out">
                <RoomFacility />
            </div>

            {/* Latest News */}
            <div data-aos="zoom-in-left">
                <LatestNews />
            </div>

            {/* Testimonials */}

            <div data-aos="zoom-in-right">
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;