import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';
import About from './About/About';
import PopularRooms from './PopularRooms/PopularRooms';

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
        </div>
    );
};

export default Home;