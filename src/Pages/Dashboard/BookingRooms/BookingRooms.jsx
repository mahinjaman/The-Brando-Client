import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import BookingRow from './BookingRow';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../../Components/ErrorImage';

const BookingRooms = () => {

    const secureAxios = useSecureAxios();

    const { user } = useAuthInfo()

    const {isPending, data: bookings, error} = useQuery({
        queryKey: ['bookingRooms'],
        queryFn: async () => {
            const res = await secureAxios.get(`/confirm-booking/${user.email}`)
            return res.data;
        }
    })

    console.log(bookings);
    

    if(isPending){
        return <RoomSkeleton />
    }

    if(error){
        <ErrorImage />
    }



    return (
        <div className="overflow-x-auto lg:w-10/12 mx-auto my-10">

            <h1>hh : {bookings.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Room</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                         bookings.map(room => <BookingRow key={room._id} room={room}></BookingRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default BookingRooms;