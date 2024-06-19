import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';
import About from './About/About';
import PopularRooms from './PopularRooms/PopularRooms';
import ExtraService from './ExtraService/ExtraService';
import Cooperation from './Cooperation/Cooperation';
import MoreAbout from './MoreAbout/MoreAbout';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* Hero */}
            <Hero></Hero>
            
            {/* About */}

            <About></About>

            {/* Popular Rooms */}
            <PopularRooms></PopularRooms> 

              {/* Extra Service  */}
              <ExtraService></ExtraService>

              {/* Cooperation */}
              <Cooperation></Cooperation>

              
        </div>
    );
};

export default Home;