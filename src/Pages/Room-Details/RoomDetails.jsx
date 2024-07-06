import React from 'react';
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
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error.message}</h1>
    }

    console.log(room);
    const { photo_gallery, title, details, price , description, thumb} = room;

    return (
        <div className=''>
            {/* Slider */}
            <div className='p-5 border bg-slate-50 rounded-t-md 2xl:max-w-[1800px] mx-auto'>
                <RoomSlider images={photo_gallery}></RoomSlider>
            </div>

            <div className='p-5 border rounded-b-md 2xl:max-w-[1800px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* room details */}
                    <div className='p-5 border rounded-md'>
                        <div className='p-5 border-b'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                <div className='flex flex-col gap-5 lg:col-span-2'>
                                    <h1 className='text-3xl primary-font'>{title}</h1>
                                    <div className='flex justify-between'>
                                        {/* room facilities */}
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><SlSizeActual /></span> {details?.room_size}</p>
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><FaPeopleGroup /></span> {details?.guest} Guest</p>
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><LuBedDouble /></span> {details?.bed} Bed</p>
                                        <p className='flex items-center gap-2'><span className='text-2xl text-[#C4A676]'><MdBathtub /></span> {details?.bath} Bath</p>
                                    </div>
                                </div>

                                {/* room price */}
                                <div className='flex items-center justify-center border rounded-md'>
                                    <h2 className='text-4xl primary-font font-bold text-[#947c55]'>${price}/Night</h2>
                                </div>
                            </div>
                        </div>

                        <div className='py-5 border-b '>
                            <p className='first-letter:text-7xl primary-font first-letter:text-[#C4A676] text-justify'>{description}</p>
                            <img className='w-full rounded-md mt-5' src={thumb} alt="" />
                        </div>

                        {/* Room Amenities */}
                    </div>

                    {/* Booking Field */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;