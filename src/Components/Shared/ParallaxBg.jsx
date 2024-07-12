import React from 'react';
import counterBg from '../../assets/About/counter_bg.jpg'
import { Background, Parallax } from "react-parallax";
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ParallaxBg = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <div className='relative z-0'>
            <Parallax
                bgImage={counterBg}
                strength={500}
                className='lg:parallax-img'
            >
                <div className='bg-slate-800 bg-opacity-40 py-20'>

                    <div className='lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-serif text-white'>
                        <div className='flex flex-col gap-7 items-center' data-aos="fade-up-right">
                            <span className='text-6xl primary-font text-[#C2A576]'><CountUp duration={2.5} end={254} /></span>
                            <h1 className='py-2 border rounded-md px-5 bg-slate-700 bg-opacity-40'>NEW VISITERS EVERY WEEK</h1>
                            <p className='text-xl font-bold text-[#C2A576]'>. . .</p>
                        </div>

                        <div className='flex flex-col gap-7 items-center' data-aos="fade-up-left">
                            <span className='text-6xl primary-font text-[#C2A576]'><CountUp duration={2} end={12168} /></span>
                            <h1 className='py-2 border rounded-md px-5 bg-slate-700 bg-opacity-40'>HAPPY CUSTOMERS EVERY YEAR</h1>
                            <p className='text-xl font-bold text-[#C2A576]'>. . .</p>
                        </div>

                        <div className='flex flex-col gap-7 items-center' data-aos="fade-up-right">
                            <span className='text-6xl primary-font text-[#C2A576]'><CountUp duration={2.5} end={172} /></span>
                            <h1 className='py-2 border rounded-md px-5 bg-slate-700 bg-opacity-40'>WON AWARDS</h1>
                            <p className='text-xl font-bold text-[#C2A576]'>. . .</p>
                        </div>

                        <div className='flex flex-col gap-7 items-center' data-aos="fade-up-left">
                            <span className='text-6xl primary-font text-[#C2A576]'><CountUp duration={2.5} end={732} /></span>
                            <h1 className='py-2 border rounded-md px-5 bg-slate-700 bg-opacity-40'>WEEKLY DELIVERIES</h1>
                            <p className='text-xl font-bold text-[#C2A576]'>. . .</p>
                        </div>
                    </div>

                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxBg;