import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useSecureAxios from '../../Hooks/useSecureAxios';
import {
    useQuery,
} from '@tanstack/react-query'
import { SlSizeActual } from "react-icons/sl";
import RoomSlider from './RoomSlider';
import { FaPeopleGroup } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { MdBathtub } from "react-icons/md";
import { Helmet } from 'react-helmet-async';
import RoomSkeleton from '../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../Components/ErrorImage';
import AddToCart from '../../Components/Shared/AddToCard';
const RoomDetails = () => {
    const { id } = useParams();
    const secureAxios = useSecureAxios();
    const { isPending, data: room, error } = useQuery({
        queryKey: 'room',
        queryFn: async () => {
            const response = await secureAxios.get(`/room/${id}`);
            return response.data
        }
    })

    if (isPending) {
        return <RoomSkeleton />
    }

    if (error) {
        return <ErrorImage />
    }

    const { photo_gallery, title, details, price, description, thumb, facility , status} = room;

    return (
        <div className=''>
            <Helmet>
                <title>The Brando | Room Details</title>
            </Helmet>
            {/* Slider */}
            <div className='p-5 border bg-slate-50 rounded-t-md 2xl:max-w-[1800px] mx-auto'>
                <RoomSlider images={photo_gallery}></RoomSlider>
            </div>

            <div className='p-5 border rounded-b-md 2xl:max-w-[1800px] mx-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    {/* room details */}
                    <div className='p-5 border rounded-md'>
                        <div className='p-5 border-b'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                <div className='flex flex-col gap-5 lg:col-span-2'>
                                    <h1 className='text-3xl primary-font'>{title}</h1>
                                    <div className='flex justify-between flex-wrap gap-5 md:gap-0'>
                                        {/* room facilities */}
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><SlSizeActual /></span> {details?.room_size}</p>
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><FaPeopleGroup /></span> {details?.guest} Guest</p>
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><LuBedDouble /></span> {details?.bed} Bed</p>
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><MdBathtub /></span> {details?.bath} Bath</p>
                                    </div>
                                    <p className={`py-2 px-5 border md:w-1/3 text-center rounded-md  font-serif font-semibold italic  ${status != 'Available' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-600'}`}>{status}</p>
                                </div>

                                {/* room price */}
                                <div className='flex items-center justify-center border rounded-md'>
                                    <h2 className='text-4xl primary-font font-bold text-[#947c55] p-5 md:p-0'>${price}/Night</h2>
                                </div>
                            </div>
                        </div>

                        <div className='py-5 border-b '>
                            <p className='first-letter:text-7xl primary-font first-letter:text-[#C4A676] text-justify'>{description}</p>
                            <img className='w-full lg:h-[500px] rounded-md mt-5' src={thumb} alt="" />
                        </div>

                        {/* Room Amenities */}


                        <div>
                            <h1 className='text-4xl font-serif mt-5'>Room Amenities</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-5 border rounded-md mt-5 gap-3 font-semibold'>
                                {
                                    facility.map((item, index) => (
                                        <div key={index} className='flex items-center gap-2 px-5 py-3 border rounded-md bg-orange-500 bg-opacity-15'>
                                            <img className='w-10' src={item.icon_url} alt="" />
                                            <p>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                    {/* Booking Field */}
                    <div className='text-white'>
                        <div className='md:w-8/12 mx-auto'>
                            <AddToCart room={room}>
                                Add To Cart
                            </AddToCart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;