import React from 'react';
import { FaStar } from 'react-icons/fa';
import PrimaryTitle from '../../../Components/Shared/PrimaryTitle';
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import bg from '../../../assets/map_bg5.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// image

import img1 from '../../../assets/Gallery/1.jpg';
import img2 from '../../../assets/Gallery/2.jpg';
import img3 from '../../../assets/Gallery/3.jpg';
import img4 from '../../../assets/Gallery/4.jpg';
import img5 from '../../../assets/Gallery/5.jpg';

const OurGallery = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 5,
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
                    initialSlide: 2
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
    };

    return (
        <div className="grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-4 gap-5 bg-slate-900 bg-opacity-95 ">
            <div className="lg:col-span-1 lg:p-5 bg-no-repeat bg-opacity-35 relative lg:h-[500px]">
                <div className="absolute opacity-20 w-full flex items-center justify-center mt-20">
                    <img src={bg} className="" alt="" />
                </div>

                <div className="border border-slate-700 p-5 rounded-md shadow-md h-full">

                    <div className="mt-10 h-full flex flex-col justify-center ">
                        <PrimaryTitle>Enjoy your time in our Hotel with pleasure.</PrimaryTitle>
                        <h1 className="text-4xl text-center text-white  font-serif my-3">
                            Our Gallery
                        </h1>
                        <PrimaryDivider></PrimaryDivider>

                        <div className="flex flex-col w-full items-center justify-center mt-5 gap-5">
                            
                            <div className="flex gap-5 items-center mb-5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="p-2 border border-dashed border-[#fdba74] rounded-full">
                                    <div className="w-2 h-2 bg-[#fdba74] rotate-45"></div>
                                </div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider */}

            <div className="lg:col-span-3 flex">
                <div className="w-4/5 m-auto">
                    <Slider {...settings} className='relative'>
                        <div className='p-5 mx-5'>
                            <img src={img1} alt="" className='rounded-md  ' />
                        </div>
                        <div className='p-5'>
                            <img src={img2} alt="" className='rounded-md ' />
                        </div>
                        <div className='p-5'>
                            <img src={img3} alt="" className='rounded-md ' />
                        </div>
                        <div className='p-5'>
                            <img src={img4} alt="" className='rounded-md ' />
                        </div>
                        <div className='p-5 '>
                            <img src={img5} alt="" className='rounded-md' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurGallery;