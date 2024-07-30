import React, { useState } from 'react';
import Testimonial from '../../Components/Shared/Testimonial/Testimonial';
import OurGallery from './OurGallery/OurGallery';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import img from '../../../src/assets/About/10.jpg'
import { IoMdStar } from 'react-icons/io';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';
import video from '../../../src/assets/moreAbout/1.mp4'
import Counter from '../../Components/Shared/ParallaxBg';
import TriangleIcon from '../../Components/TriangleIcon';
import OurTeam from './OurTeam/OurTeam';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const About = () => {

    const [showVideo, setShowVideo] = useState(false);
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
      },[])

    const handleVideo = () => {
        setShowVideo(true);
    }

    const handleCloseClick = () => {
        setShowVideo(false);
    };

    return (
        <div className='bg-white'>

            {/* Start Head Title */}
            <Helmet>
                <title>The Brando | About Us</title>
            </Helmet>
            {/* End Head Title */}


            {/* Start About  */}

            <div className='z-10' id='about'>
                <div className="home_about relative grid grid-cols-1 xl:grid-cols-2 lg:p-32 gap-10 lg:gap-0 lg:mx-5 border border-dashed rounded-md mb-5">
                    {/* Content */}
                    <div className={`p-5 flex flex-col gap-3 items-start`} data-aos="fade-up-right">
                        <p className="text-[#c4a676] text-lg font-semibold">
                            <hr className="w-16 border border-[#c4a676] mb-2" />
                            Enjoy your time in our Hotel
                        </p>
                        <h1 className="text-5xl font-semibold my-2 font-serif">
                            About Our Hotel
                        </h1>
                        <div className="text-gray-500 text-sm leading-7 mb-3">
                            <p className="first-letter:text-6xl first-letter:text-[#c4a676]">
                                Qed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur.Ut enim ad minima Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur.
                            </p>
                            <br />
                            <p>
                                Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam
                                condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis
                                vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec
                                lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam
                                porta facilisis. Fames massa tortor sit nisl sit. Duis nulla
                                tempus quisque et diam condimentum nisl. Rhoncus quisque elementum
                                nulla lorem at turpis vitae quisque. Vulputate duis vel et odio
                                hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt
                                viverra viverra etiam porta facilisis.
                            </p>
                        </div>
                        <button className="custom-btn bg-slate-900 text-[#c4a676] hover:bg-[#c4a676] hover:text-black uppercase">
                            <Link to={"/contact"}>Call For Reservation</Link>
                        </button>
                    </div>

                    {/* Image */}

                    <div className="flex flex-col items-center justify-center relative row-start-1 lg:row-span-2" data-aos="fade-up-left">
                        <img
                            src={img}
                            alt="img"
                            className="rounded-md"
                        />
                        <div className='bg-slate-900 text-white my-5 p-5 rounded-md lg:absolute lg:w-96 -right-20 bottom-5'>
                            <fieldset className='border rounded-md p-5'>
                                <legend className='text-[#C2A576] flex text-center px-5'>
                                    <IoMdStar className='w-2' />
                                    <IoMdStar className='w-2' />
                                    <IoMdStar className='w-2' />
                                    <IoMdStar className='w-2' />
                                    <IoMdStar className='w-2' />
                                </legend>
                                <div className='relative flex flex-col gap-3'>
                                    <p className='text-sm text-slate-300'>Your website is fully responsive so visitors can view your content from their choice of device.</p>
                                    <div>
                                        <h4 className='font-serif font-semibold text-lg text-[#C2A576]'>Abdul Mannan</h4>
                                        <h4 className='font-serif font-semibold text-sm'>The Brando CEO</h4>
                                    </div>
                                    <p className='absolute text-[#c4a676] text-xl right-0 bottom-0'><RiDoubleQuotesR /></p>
                                </div>
                            </fieldset>

                        </div>

                        <div className='absolute left-10 top-40 md:top-52 lg:bottom-10 group'>
                            <div onClick={handleVideo} className='flex items-center gap-3 cursor-pointer'>
                                <h1 className='bg-[#c4a676] duration-300 group-hover:bg-slate-900 group-hover:text-[#C2A576] p-4 rounded-full border-8 border-opacity-10 text-xl'><FaPlay /></h1>
                                <h3 className='uppercase text-white font-serif text-sm'>Play Story Presentation Video</h3>
                            </div>

                            {showVideo && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-auto">
                                    <div className="relative">
                                        <video
                                            width="800"
                                            height="450"
                                            controls
                                            className="rounded shadow-lg"
                                        >
                                            <source src={video} type="video/webm" />
                                        </video>
                                        <button
                                            className="absolute top-2 right-2 px-2 py-1  text-white rounded-full border transition duration-300"
                                            onClick={handleCloseClick}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='hidden lg:absolute lg:flex items-center gap-5 top-[52%]' data-aos="fade-up-right">
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

            {/* End About */}

            {/* Start Counter */}

            <div className='relative z-0 m-5 rounded-md overflow-hidden'  data-aos="zoom-out">
                <Counter></Counter>
            </div>
            {/* End Counter  */}

            {/* Start Our Team */}

            <div className='m-5'>
                <OurTeam></OurTeam>
            </div>

            {/* End Out Team */}


            {/* Our Gallery Start */}

            <div className='m-5 rounded-md overflow-hidden' data-aos="zoom-in-right">
                <OurGallery></OurGallery>
            </div>

            {/* Our Gallery End */}

            {/* Start Testimonial */}
            <div className='mx-5' data-aos="zoom-in-right">
                <Testimonial></Testimonial>
            </div>
            {/* End Testimonial */}
        </div>
    );
};

export default About;