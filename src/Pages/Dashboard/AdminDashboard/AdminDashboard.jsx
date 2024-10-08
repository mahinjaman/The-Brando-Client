import React from 'react';

import { useQuery } from '@tanstack/react-query'
import useSecureAxios from '../../../Hooks/useSecureAxios';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import ErrorImage from '../../../Components/ErrorImage'
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import CardDataStatsContainer from './AdminStats/CardDataStatsContainer';
import OrderChart from './OrderChart/OrderChart';
import BookingChart from './BookingChart/BookingChart';
const AdminDashboard = () => {

    const secureAxios = useSecureAxios();
    const { user } = useAuthInfo()

    const {isPending , data: adminStats, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await secureAxios.get(`/admin-stats/${user?.email}`)
            return res.data;
        }
    });

    const {isPending: bookingStatsPending, data: bookingStats, error: bookingStatsError} = useQuery({
        queryKey: ['bookings-rooms'],
        queryFn: async () => {
            const res = await secureAxios.get(`/bookings-stats`)
            return res.data;
        }
    })

    if(isPending){
        return <RoomSkeleton />
    }

    if(error){
        return <ErrorImage />
    }


    
    

    if(bookingStatsPending){
        return <RoomSkeleton />
    }

    if(bookingStatsError){
        return <ErrorImage />
    }





    return (
        <div className='py-10 px-5'>
            <div>
                <CardDataStatsContainer adminStats={adminStats} />
            </div>

            <div className='flex'>
                <div className='w-1/2'>
                    <OrderChart bookingStats={bookingStats} />
                </div>
                <div className='w-1/2'>
                    <BookingChart bookingsInfo={bookingStats} />
                </div>
            </div>
        </div>
    );

};

export default AdminDashboard;