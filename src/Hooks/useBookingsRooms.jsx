import { useQuery } from '@tanstack/react-query';
import useAuthInfo from './useAuthInfo';
import useSecureAxios from './useSecureAxios';
import RoomSkeleton from '../Components/Shared/RoomSkeleton';
import ErrorImage from '../Components/ErrorImage';
import { useContext, useEffect, useState } from 'react';
import { refresh } from 'aos';
import { UserContext } from '../AuthProvider/AuthContext';

const useBookingsRooms = () => {
    // const [bookingsRoom, setBookingRooms ] = useState([])
    const { user } = useContext(UserContext);


    const secureAxios = useSecureAxios()


    const { data: bookingsRoom = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            if (user?.email) {
                try {
                    const response = await secureAxios.get(`/booking/?email=${user?.email}`);
                    return response.data;
                } catch (err) {
                    console.log('error while fetching bookings room', err);
                    throw err; // This will properly handle the error in the useQuery hook
                }
            }
        },
    });

    


    // useEffect(()=>{
    //     user?.email && secureAxios.get(`/booking/?email=${user?.email}`)
    //     .then(res =>{
    //         setBookingRooms(res.data);
    //     })
    //     .catch(err => {
    //         console.log('error while fetching bookings room', err);
    //     })
    // },[secureAxios ,user?.email])


    return [bookingsRoom,refetch];
};

export default useBookingsRooms;