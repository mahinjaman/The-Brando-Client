import Swal from 'sweetalert2';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import useBookingsRooms from '../../../Hooks/useBookingsRooms';
import TableRow from '../../Bookings/TableRow';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { useEffect, useState } from 'react';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import ErrorImage from '../../../Components/ErrorImage';

const Carts = () => {
    // const [displayBookings, setDisplayBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bookingsRoom, refetch] = useBookingsRooms();
    const secureAxios = useSecureAxios();
    const { user } = useAuthInfo();

    // useEffect(() => {
    //     setDisplayBookings(bookingsRoom)
    // }, [bookingsRoom])

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
        <div>
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
                            {
                                bookingsRoom.length ?
                                    <tbody>
                                        {
                                            bookingsRoom && bookingsRoom.map(room => <TableRow key={room._id} room={room} handleStatusCancel={handleStatusCancel}></TableRow>)
                                        }
                                    </tbody>
                                    :
                                    <ErrorImage />
                            }

                        </table>
                }
            </div>

            <div>
                <h4>Total Price: ${totalPrice}</h4>
                <button className="btn btn-primary">Checkout</button>
                <button className="btn btn-danger ml-2">Delete All</button>
            </div>
        </div>
    );
};

export default Carts;