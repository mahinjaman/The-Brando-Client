import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/image/footerLogo.png';
import moment from 'moment';
import { IoChevronBackSharp } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {

    const date = moment().format("YYYY");
    return (
        <div className='bg-slate-950 text-white bottom-0 lg:fixed lg:-z-10 pt-20 lg:h-[570px] max-w-7xl'>
            <div className="flex gap-5 items-center justify-center">
                <div className='w-[50px] lg:w-[150px] h-[1px] bg-slate-300'></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="p-3 border border-dashed border-[#fdba74] rounded-full">
                    <div className="w-4 h-4 bg-[#fdba74] rotate-45"></div>
                </div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className='w-[50px] lg:w-[150px] h-[1px] bg-slate-300'></div>
            </div>

            <div className='md:w-10/12 mx-auto py-10'>
                <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div>
                        <h3 className='font-serif text-2xl text-[#C2A576]'>About Us</h3>
                        <p className='pr-3 text-justify'>Welcome to The Brando, a luxury resort on Tetiaroa, French Polynesia. Enjoy our exclusive rooms and villas amidst stunning beaches and lush landscapes. We are committed to eco-friendly practices, ensuring a memorable and sustainable stay. Experience paradise with us.</p>
                        <Link to={'/about'} className='text-[#C2A576] duration-300 hover:text-white underline'>Read More</Link>
                    </div>

                    <div>
                        <h3 className='font-serif text-2xl text-[#C2A576]'>Contact Info</h3>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-semibold'>Call:    <span className='font-normal ml-9'>+8801916899544</span></li>
                            <li className='font-semibold'>Email:   <span className='font-normal ml-7'>mahinjaman01@gmail.xom</span></li>
                            <li className='font-semibold'>Find Us: <span className='font-normal ml-3'>Balla , Kalihati, Tangail</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-serif text-2xl text-[#C2A576]'>Helpful Links</h3>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-2 items-center hover:underline hover:text-[#C2A576]'> <span><IoIosArrowForward /></span> <Link to={'/'} className="link link-hover">Our Latest News</Link></li>
                            <li className='flex gap-2 items-center hover:underline hover:text-[#C2A576]'> <span><IoIosArrowForward /></span> <Link to={'/rooms'} className="link link-hover">Rooms</Link></li>
                            <li className='flex gap-2 items-center hover:underline hover:text-[#C2A576]'> <span><IoIosArrowForward /></span> <Link to={'/contact'} className="link link-hover">Contact</Link></li>
                            <li className='flex gap-2 items-center hover:underline hover:text-[#C2A576]'> <span><IoIosArrowForward /></span> <Link to={'/about'} className="link link-hover">About</Link></li>
                            <li className='flex gap-2 items-center hover:underline hover:text-[#C2A576]'> <span><IoIosArrowForward /></span> <Link to={'/privacy_policy'} className="link link-hover">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div >
                        <div>
                            <h3 className='font-serif text-2xl text-[#C2A576]'>Subscribe</h3>
                            <p className='my-3'>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                            <div className='relative'>
                                <input type="text" placeholder="Your Email" className="md:w-full py-4 px-5 bg-slate-400 bg-opacity-10 placeholder:font-serif border border-r-0 rounded-md" />
                                <button className="py-[17px] px-5 bg-[#C2A576] text-[18px]  text-gray-900 font-semibold absolute right-0 rounded-r-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-slate-900 text-white'>
                <footer className="footer items-center p-4 w-10/12 mx-auto flex justify-center md:justify-between flex-wrap">
                    <Link to={'/'}><img src={logo} alt="The Brando" className='w-[250px]' /></Link>
                    <p>The Brando © {date} - All right reserved</p>
                    <a href={'#'} className='flex items-center gap-3 text-[#C2A576] group'>Back To Top <span className='rotate-90 duration-300 group-hover:mb-2'><IoChevronBackSharp /></span></a>
                </footer>
            </div>
        </div>
    );
};

export default Footer;