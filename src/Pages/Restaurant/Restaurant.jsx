import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import img from '../../../src/assets/About/10.jpg'
import { FaPlay } from 'react-icons/fa';
import video from '../../../src/assets/moreAbout/1.mp4'
import TriangleIcon from '../../Components/TriangleIcon';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RestaurantSlider from './RestaurantSlider';


const Restaurant = () => {
    const [showVideo, setShowVideo] = useState(false);
    const handleVideo = () => {
        setShowVideo(true);
    }

    const handleCloseClick = () => {
        setShowVideo(false);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        // About Our Restaurant
        <section className=''>
            <Helmet>
                <title>The Brando | Restaurant</title>
            </Helmet>
            {/* Start About  */}

            <div className='z-10'>
                <div className="home_about relative grid grid-cols-1 lg:grid-cols-2 lg:p-32 gap-10 lg:gap-0 lg:mx-5 border border-dashed rounded-md mb-5 items-center">
                    {/* Content */}
                    <div className={`p-5 flex flex-col gap-3 items-start`}>
                        <p className="text-[#c4a676] text-lg font-semibold">
                            <hr className="w-16 border border-[#c4a676] mb-2" />
                            Special selection
                        </p>
                        <h1 className="text-5xl font-semibold my-2 font-serif">
                            About Our Restaurant
                        </h1>
                        <div className="text-gray-500 text-sm leading-7 mb-3">
                            <h3 className='font-semibold text-black text-xl mb-5'>Welcome to The Brando</h3>
                            <p className="first-letter:text-6xl first-letter:text-[#c4a676]">
                                Nestled in the heart of [Location], The Brando offers an unparalleled retreat for those seeking luxury and tranquility. Our hotel is designed to provide guests with a perfect blend of modern comfort and natural beauty. From our elegantly appointed rooms to our serene surroundings, every detail at The Brando is crafted to ensure a memorable stay.
                            </p>
                            <br />
                            <h3 className='font-semibold text-black text-xl mb-5'>Dining at The Brando</h3>
                            <p>
                                Within The Brando, you'll find our exquisite restaurant, a culinary haven that promises a delightful dining experience. Our restaurant features a diverse menu, showcasing both local and international cuisine, prepared with the freshest ingredients by our skilled chefs. Whether you're in the mood for a leisurely breakfast, a sumptuous lunch, or an elegant dinner, our restaurant provides the perfect setting to indulge your taste buds.
                                <br />
                                <br />
                                Join us at The Brando, where luxury meets nature, and every meal is a celebration of flavor.
                            </p>
                        </div>
                        <button className="custom-btn bg-slate-900 text-[#c4a676] hover:bg-[#c4a676] hover:text-black uppercase">
                            <a href={"#"}>Explore Our Menu</a>
                        </button>
                    </div>

                    {/* Slider */}

                    <div className="">
                        <RestaurantSlider />
                    </div>

                    {/* Design */}

                    <div className='hidden lg:absolute lg:flex items-center gap-5 top-[52%]'>
                        <div className='w-10 h-[1px] bg-slate-500'></div>
                        <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
                            <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                        </div>
                    </div>

                    <div className='hidden lg:absolute lg:flex items-center gap-5 top-[47%] right-0'>
                        <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
                            <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                        </div>
                        <div className='w-14 h-[1px] bg-slate-500'></div>
                    </div>


                </div>

                <div className='hidden lg:flex items-center justify-center w-full absolute z-10'>
                    <TriangleIcon></TriangleIcon>
                </div>
            </div>
        </section>
    );
};

export default Restaurant;