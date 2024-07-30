import React, { useState } from 'react';
import Author from '../../../assets/image/author.jpeg';
import AuthorSignature from '../../../assets/moreAbout/AuthorSignature.png'
import bg from '../../../assets/moreAbout/bg.jpg'
import { FaPlay } from 'react-icons/fa';
import video from '../../../assets/moreAbout/1.mp4'

const MoreAbout = () => {
    const [showVideo, setShowVideo] = useState(false);
    const handleVideo = () => {
        setShowVideo(true);
    }

    const handleCloseClick = () => {
        setShowVideo(false);
    };


    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 border border-dotted rounded-xl overflow-hidden'>
            {/* About Content */}
            <div className=' lg:p-10'>
                <div className='border p-2 lg:p-5 rounded-md'>
                    {/* Content */}
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-serif text-[#c4a676] uppercase'>More About us</h4>
                        <h2 className='font-serif text-gray-700 text-2xl'>Luxary Premium Hotel In NewYork, USA</h2>
                        <p className='first-letter:text-7xl first-letter:text-[#c4a676]'>Qolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero adipiscing elit. Donec auctor et urnaLorem ipsum dolor sit.</p>

                        <p>Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.Cras</p>
                    </div>
                    {/* Author */}
                    <div className='flex items-center w-full gap-3  border-t mt-5'>
                        <div className='w-20'>
                            <img src={Author} alt="CEO" />
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <div className=' font-serif'>
                                <h1 className='font-semibold text-lg'>Abdul Mannan</h1>
                                <h4 className='text-[#c4a676] font-semibold'>CEO</h4>
                            </div>
                            <div>
                                <img src={AuthorSignature} alt="Signature" className='w-40 h-24' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Hotel Video */}
            <div className='h-96 lg:h-full p-5 lg:p-10 bg-center bg-contain lg:min-h-[500px]' style={{
                backgroundImage: `url(${bg})`
            }}>
                <div className='h-full w-full bg-indigo-900 bg-opacity-30 flex justify-center items-center rounded-md border border-dashed'>
                    <div>
                        <button className='bg-[#c4a676] p-4 rounded-full border-8 border-opacity-10 text-xl' onClick={handleVideo}><FaPlay /></button>
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

        </div>
    );
};

export default MoreAbout;