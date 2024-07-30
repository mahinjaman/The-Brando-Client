import React from 'react';
import PrimaryTitle from '../../../Components/Shared/PrimaryTitle';
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Author from '../../../assets/image/author.jpeg';
import imran from '../../../assets/image/imran.png'
import mahin from '../../../assets/image/mahin.png'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const OurTeam = () => {

    useEffect(()=>{
        AOS.init({
            duration:1000
        });
      },[])
    return (
        <div className='border py-20'>
            <div>
                <PrimaryTitle>Enjoy your time in our Hotel with pleasure.</PrimaryTitle>
                <h1 className='font-serif text-3xl text-center mt-5'>Meet Our Team</h1>
                <div className='lg:w-1/3 mx-auto'>
                    <PrimaryDivider></PrimaryDivider>
                </div>
            </div>

            <div className='lg:p-7 bg-slate-50 md:border rounded-md w-10/12 mx-auto'>
                <div className='lg:p-7 bg-white md:border rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    <div data-aos="fade-up-right">
                        {/* team image & social */}
                        <div className='p-5 border rounded-md relative overflow-hidden group'>
                            <div>
                                <img src={Author} alt="" className='w-96' />
                            </div>
                            <div className='flex gap-5 flex-col text-2xl absolute bg-blue-950 bg-opacity-50 h-full w-full left-0 -top-[100%] group-hover:top-0 duration-300 justify-center items-center text-[#C2A576]'>
                                <p className='font-semibold primary-font italic text-white'>Follow Now</p>
                                <div className='flex gap-5 text-xl'>
                                    <a href="#" ><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/abdul_mannan_himel/" target='_blank' ><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/in/abdulmannan132/" ><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* About Team */}
                        <div className='flex flex-col gap-1 text-center p-5 border border-dashed mt-2 rounded-md'>
                            <h1 className='text-[#C2A576] font-bold font-serif text-lg'>Abdul Mannan</h1>
                            <h4 className='font-semibold text-sm italic'>CEO & Founder, The Brando</h4>
                            <p className='text-sm font-serif text-gray-500'>Abdul Mannan is the visionary behind The Brando, transforming it into a premier luxury destination through his passion for hospitality and dedication to excellence.</p>
                            <p className='text-[#C2A576] font-bold text-2xl'>. . .</p>
                        </div>
                    </div>

                    <div data-aos="flip-up">
                        {/* team image & social */}
                        <div className='p-5 border rounded-md relative overflow-hidden group'>
                            <div>
                                <img src={imran} alt="" className='w-96' />
                            </div>
                            <div className='flex gap-5 flex-col text-2xl absolute bg-blue-950 bg-opacity-50 h-full w-full left-0 -top-[100%] group-hover:top-0 duration-300 justify-center items-center text-[#C2A576]'>
                                <p className='font-semibold primary-font italic text-white'>Follow Now</p>
                                <div className='flex gap-5 text-xl'>
                                    <a href="https://www.facebook.com/Al.Hussain.Imran/" ><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/imran0dot/" ><FaInstagram /></a>
                                    <a href="https://github.com/imran0dot/" ><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* About Team */}
                        <div className='flex flex-col gap-1 text-center p-5 border border-dashed mt-2 rounded-md'>
                            <h1 className='text-[#C2A576] font-bold font-serif text-lg'>Al Imran</h1>
                            <h4 className='font-semibold text-sm italic'>Full Stack Web-Developer</h4>
                            <p className='text-sm font-serif text-gray-500'>Al Imran is a versatile full stack web developer, creating dynamic and user-friendly web applications with expertise in front-end and back-end technologies.</p>
                            <p className='text-[#C2A576] font-bold text-2xl'>. . .</p>
                        </div>
                    </div>

                    <div data-aos="fade-up-left">
                        {/* team image & social */}
                        <div className='p-5 border rounded-md relative overflow-hidden group'>
                            <div>
                                <img src={mahin} alt="" className='w-96' />
                            </div>
                            <div className='flex gap-5 flex-col text-2xl absolute bg-blue-950 bg-opacity-50 h-full w-full left-0 -top-[100%] group-hover:top-0 duration-300 justify-center items-center text-[#C2A576]'>
                                <p className='font-semibold primary-font italic text-white'>Follow Now</p>
                                <div className='flex gap-5 text-xl'>
                                    <a href="https://www.facebook.com/mahinjaman01" target='_blank'><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/mahinjaman01/" target='_blank' ><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/in/mahin-jaman/" ><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* About Team */}
                        <div className='flex flex-col gap-1 text-center p-5 border border-dashed mt-2 rounded-md'>
                            <h1 className='text-[#C2A576] font-bold font-serif text-lg'>Mahin Jaman</h1>
                            <h4 className='font-semibold text-sm italic'>MERN Stack Web-Developer</h4>
                            <p className='text-sm font-serif text-gray-500'>Mahin Jaman is a proficient MERN stack web developer, specializing in creating robust and interactive web applications using MongoDB, Express.js, React, and Node.js.</p>
                            <p className='text-[#C2A576] font-bold text-2xl'>. . .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;