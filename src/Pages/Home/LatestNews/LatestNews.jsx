import React, { useState } from 'react';
import bg from '../../../assets/LatestNews/bg.jpg'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryTitle from '../../../Components/Shared/PrimaryTitle';
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import { useQuery } from '@tanstack/react-query';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import bg2 from '../../../assets/popular_bg.png'
import NewsSlider from './NewsSlider';


const LatestNews = () => {

    const secureAxios = useSecureAxios();

    const { isPending, data: news, error } = useQuery({
        queryKey: 'latestNews',
        queryFn: async () => {
            const response = await secureAxios.get('/news')
            return response.data;
        }
    })
    console.log(news);

    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error.message}</h1>
    }

    return (
        <div className='mt-5 bg-slate-900 p-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-xl overflow-hidden'>
                {/* Latest News */}
                <div className='rounded-md text-white relative'>
                    <div className='absolute w-1/4 flex items-center justify-center opacity-20 left-1/3 top-1/4'><img src={bg2} alt="" /></div>
                    <div className="border border-slate-700 p-5 rounded-md shadow-md bg-slate-400 bg-opacity-10">

                        {/* content */}
                        <div>
                            <PrimaryTitle > Our Latest News</PrimaryTitle>
                            <h1 className='text-5xl font-serif text-center my-5'>Upcoming Events & News</h1>
                            <div className='w-1/2 mx-auto'>
                                <PrimaryDivider></PrimaryDivider>
                            </div>

                            <div className=''>
                                <NewsSlider newses={news}></NewsSlider>
                            </div>

                            <div className='flex flex-col gap-5 justify-center items-center'>
                                <Link className='custom-btn'>Read All News</Link>
                                <div className="flex gap-5 items-center">
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

                {/* Our Hotel Video */}
                <div className='h-96 lg:h-full p-5 bg-center bg-contain border rounded-md' style={{
                    backgroundImage: `url(${bg})`
                }}>
                    <div className='h-full w-full bg-black bg-opacity-50 flex flex-col gap-10 justify-center items-center rounded-md border border-dashed text-white pb-5'>
                        <p className='text-5xl font-bold'>. . . . .</p>
                        <h1 className='font-serif text-3xl font-semibold text-[#c4a676]'>OUR RESTAURANT</h1>
                        <h4 className='text-xl italic font-serif'>Want to order food at number? Visit our online store.</h4>
                        <div className='group'>
                            <Link to={'/'} className='hover:text-[#c4a676] flex flex-col items-center'>
                                <hr className='w-10 border-[1px] border-[#c4a676] mb-5 duration-300 group-hover:w-7 ' />
                                <span className='font-semibold'>Visit Our Restaurant</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LatestNews;