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
import TriangleIcon from '../../TriangleIcon';
import RoomSkeleton from '../RoomSkeleton';
import ErrorImage from '../../ErrorImage';


const Testimonial = () => {

    const secureAxios = useSecureAxios();

    const { isPending, data, error } = useQuery({
        queryKey: 'testimonial',
        queryFn: async () => {
            const res = await secureAxios.get('/testimonials')
            return res.data;
        }
    })


    if (isPending) {
        return <RoomSkeleton></RoomSkeleton>
    }
    if (error) {
        return <ErrorImage />
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
        <div className='border rounded-md py-10 relative z-10 bg-white'>
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

            {/* Triangle Icon */}
            <div className='relative flex justify-center'>
                <div className='absolute top-[41px]'>
                    <TriangleIcon></TriangleIcon>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;