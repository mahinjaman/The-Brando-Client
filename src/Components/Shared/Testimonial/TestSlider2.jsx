import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import { IoMdStar } from 'react-icons/io';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const TestSlider2 = () => {
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    const productTemplate = (testimonial) => {
        return (
            <div className='p-5 border rounded-md bg-slate-50 relative mx-3'>
            <div className='flex flex-col items-center justify-center text-center relative border rounded-md bg-white p-5 z-10'>
                <img src={testimonial.profile} alt={testimonial.name} className='w-20 h-20 absolute z-50 -top-10 rounded-full border-8 border-slate-400' />
                <h1 className='text-lg font-semibold mt-10'>{testimonial.name}</h1>
                <div className='flex text-[#C2A576] my-4'>

                    <IoMdStar className='w-4' />
                    <IoMdStar className='w-4' />
                    <IoMdStar className='w-4' />
                    <IoMdStar className='w-4' />
                    <IoMdStar className='w-4' />
                </div>
                <h4 className='text-sm font-semibold mt-2'>{testimonial.comment}</h4>
                <a href='/' className='text-sm mt-2 text-[#c4a676] uppercase font-semibold italic'>{testimonial.web_link}</a>
                <span className='text-[#C2A576] '>. . . </span>
                <span className='absolute top-5 text-[#c4a676] font-bold text-3xl left-5'><RiDoubleQuotesL /></span>
                <span className='absolute right-5 text-[#c4a676] font-bold text-3xl bottom-5'><RiDoubleQuotesR /></span>
            </div>
        </div>
        );
    };

    return (
        <div className="card w-4/5 m-auto">
            <Carousel value={data} numScroll={1}  numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}

export default TestSlider2;