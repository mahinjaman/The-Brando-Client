import React from 'react';
import PrimaryTitle from '../PrimaryTitle';
import PrimaryDivider from '../PrimaryDivider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import TestimonialCard from './TestimonialCard';
import Slider from "react-slick";
import { Arrow } from '@egjs/flicking-plugins';
import TestSlider from './TestSlider';
import TestSlider2 from './TestSlider2';


const Testimonial = () => {

    const secureAxios = useSecureAxios();

    const { isPending, data, error } = useQuery({
        queryKey: 'testimonial',
        queryFn: async () => {
            const res = await secureAxios.get('/testimonials')
            return res.data;
        }
    })

    console.log(data);

    if (isPending) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        Arrow: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: true,
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
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    }
    return (
        <div className='border m-5 rounded-md py-10 relative z-10 bg-white lg:mb-[550px]'>
            <div className='p-10'>
                <PrimaryTitle>What said about us</PrimaryTitle>
                <h1 className='text-4xl font-serif font-semibold text-center mt-5'>Testimonials & Clients</h1>
                <div className='w-1/3 mx-auto'>
                    <PrimaryDivider></PrimaryDivider>
                </div>
            </div>

            {/* Slider */}
            <div className=''>
                <TestSlider testimonials={data}></TestSlider>
            </div>

            <div className='hidden lg:flex items-center justify-center mt-20 bg-white'>
                <div className=' absolute w-8 mb-5 h-[1px] bg-slate-500 rotate-90'></div>
                <div className=' absolute flex items-center justify-center bg-white bg-opacity-50 w-11 h-11 rotate-45 top-[97.5%]'>
                    <div className='w-9 h-9 bg-white flex items-center justify-center'><h1 className='font-extrabold text-3xl text-[#C2A576] mb-4'>.</h1></div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;