import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';
import About from './About/About';
import PopularRooms from './PopularRooms/PopularRooms';
import ExtraService from './ExtraService/ExtraService';
import Cooperation from './Cooperation/Cooperation';
import MoreAbout from './MoreAbout/MoreAbout';
import RoomFacility from './RoomFacility/RoomFacility';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;