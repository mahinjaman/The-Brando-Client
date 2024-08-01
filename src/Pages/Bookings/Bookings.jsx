import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { UserContext } from '../../AuthProvider/AuthContext';
import TableRow from './TableRow';
import Swal from 'sweetalert2';
import RoomSkeleton from '../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../Components/ErrorImage';

const Bookings = () => {
    const secureAxios = useSecureAxios();
    const { user } = useContext(UserContext);
    const [displayBookings, setDisplayBookings] = useState([]);


    const { isPending, data: bookingsRoom, error } = useQuery({
        queryKey: 'bookings room',
        queryFn: async () => {
            const response = await secureAxios.get(`/booking/?email=${user?.email}`)
            return response.data;
        }

    })

    useEffect(() => {
        setDisplayBookings(bookingsRoom)
    }, [bookingsRoom])


    const handleStatusCancel = (id, currentUser) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Cancelled yor room booked!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancelled it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.put(`/booking_cancelled/${id}?status=Cancelled&email=${user?.email}`, currentUser)
                    .then(res => {
                        secureAxios.patch(`/room_available/${currentUser?.room_id}`)
                        .then(() =>{
                            Swal.fire({
                                title: "Cancelled!",
                                text: "Your Room Booked has been cancelled.",
                                icon: "success"
                            })
                            const remainingRoom = displayBookings.filter(room => room._id != id);
                            const updateRoom = displayBookings.find(room => room._id === id);
                            updateRoom.orderStatus = 'Cancelled';
                            const newBookingRooms = [...remainingRoom, updateRoom]
                            setDisplayBookings(newBookingRooms);
                        })
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "Failed!",
                            text: "Failed to cancel your room booked.",
                            icon: "error"
                        });
                    })

            }
        });

    }

    if (isPending) return <RoomSkeleton></RoomSkeleton>

    if (error) return <ErrorImage />
    return (
        <div className="overflow-x-auto lg:w-10/12 mx-auto my-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Room</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        displayBookings && displayBookings.map(room => <TableRow key={room._id} room={room} handleStatusCancel={handleStatusCancel}></TableRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Bookings;