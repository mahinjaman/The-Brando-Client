import React from 'react';
import { useParams } from 'react-router-dom';
import useSecureAxios from '../../Hooks/useSecureAxios';
import {
    useQuery,
} from '@tanstack/react-query'
import RoomSlider from './RoomSlider';
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
    const { photo_gallery } = room;

    return (
        <div className=''>
            {/* Slider */}
            <div className='p-5 border bg-slate-50 rounded-md 2xl:max-w-[1800px] mx-auto'>
                <RoomSlider images={photo_gallery}></RoomSlider>
            </div>

            <div className='p-5 border rounded-md'>
                <div>

                </div>
                
            </div>
        </div>
    );
};

export default RoomDetails;