import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='p-5 border rounded-md bg-slate-50 relative'>
            <div className='flex flex-col items-center justify-center text-center relative border rounded-md bg-white p-5 z-10'>
                <img src={testimonial.profile} alt={testimonial.name} className='w-20 h-20 absolute -top-10 rounded-full border-8 border-slate-400' />
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

export default TestimonialCard;