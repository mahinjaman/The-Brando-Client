import Swal from 'sweetalert2';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import useBookingsRooms from '../../../Hooks/useBookingsRooms';
import TableRow from '../../Bookings/TableRow';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { useEffect, useState } from 'react';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import ErrorImage from '../../../Components/ErrorImage';
import { MdOutlinePayment } from "react-icons/md";
import { Link } from 'react-router-dom';

const Carts = () => {
    const [loading, setLoading] = useState(true);
    const [bookingsRoom, refetch] = useBookingsRooms();

    const secureAxios = useSecureAxios();
    const { user } = useAuthInfo();

    setTimeout(() => {
        setLoading(false)
    }, 1000)

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
                        secureAxios.patch(`/room_status/${currentUser?.room_id}?status=Available`)
                            .then(() => {
                                Swal.fire({
                                    title: "Cancelled!",
                                    text: "Your Room Booked has been cancelled.",
                                    icon: "success"
                                })
                                refetch()
                                // const remainingRoom = displayBookings.filter(room => room._id != id);
                                // setDisplayBookings(remainingRoom);
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


    const totalPrice = bookingsRoom.reduce((sum, room) => sum + room?.price, 0);

    return (
        <div className='p-5'>
            <div className='flex justify-between my-5 '>
                <h1 className='font-bold primary-font text-xl'>Total Order: {bookingsRoom?.length}</h1>
                <h1 className='font-bold primary-font text-xl'>Total Order: {totalPrice}$</h1>
                {
                    bookingsRoom?.length < 1 ?
                        <button disabled className='py-3 px-5 bg-green-500 rounded-md flex items-center gap-2 font-semibold'><span><MdOutlinePayment /></span> Pay Now</button>

                        :
                        <button disabled><Link to={'/dashboard/payment'} className='py-3 px-5 bg-green-500 rounded-md flex items-center gap-2 font-semibold'><span><MdOutlinePayment /></span> Pay Now</Link></button>
                }
            </div>

            <div>
                {
                    loading ? <div><RoomSkeleton /> </div> :
                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Room</th>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>


                            <tbody>
                                {
                                    bookingsRoom && bookingsRoom.map(room => <TableRow key={room._id} room={room} handleStatusCancel={handleStatusCancel}></TableRow>)
                                }
                            </tbody>



                        </table>
                }
            </div>


        </div>
    );
};

export default Carts;