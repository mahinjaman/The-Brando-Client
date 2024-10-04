import Swal from 'sweetalert2';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import TableRow from '../../Bookings/TableRow';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { useEffect, useState } from 'react';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import { MdOutlinePayment } from "react-icons/md";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Payment/CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { GrClose } from "react-icons/gr";
import useCartRooms from '../../../Hooks/useCartRooms';

const Carts = () => {
    const [loading, setLoading] = useState(true);
    const [cartRooms, refetch] = useCartRooms();
    const [showPayment, setShowPayment] = useState(false);
    const secureAxios = useSecureAxios();
    const { user } = useAuthInfo();
    const [paymentError, setPaymentError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [ transitionId , setTransitionId] = useState('')

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLIC_KEY);


    

    



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
                secureAxios.put(`/cart_cancelled/${id}?status=Cancelled&email=${user?.email}`, currentUser)
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


    const totalPrice = cartRooms.reduce((sum, room) => sum + room?.price, 0);


    useEffect(() => {
        if (totalPrice > 0) {
            secureAxios.post('/create-payment-intents', { price: totalPrice })
                .then(res => {
                    setClientSecret(res?.data?.clientSecret);
                })
                .catch(err => {
                    console.log('error while creating payment intents', err);
                })
        }
    }, [secureAxios, totalPrice])


    return (
        <div className='p-5'>
            <div className='flex justify-between my-5 '>
                <h1 className='font-bold primary-font text-xl'>Total Order: {cartRooms?.length}</h1>
                <h1 className='font-bold primary-font text-xl'>Total Order: {totalPrice}$</h1>
                {
                    cartRooms?.length < 1 ?
                        <button disabled className='py-3 px-5 bg-green-500 rounded-md flex items-center gap-2 font-semibold'><span><MdOutlinePayment /></span> Pay Now</button>

                        :
                        <button onClick={() => {
                            setShowPayment(true);
                            setPaymentError('')
                        }
                        }
                            className='py-3 px-5 bg-green-500 rounded-md flex items-center gap-2 font-semibold'><span><MdOutlinePayment /></span> Pay Now</button>
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
                                    cartRooms && cartRooms.map(room => <TableRow key={room._id} room={room} handleStatusCancel={handleStatusCancel}></TableRow>)
                                }
                            </tbody>



                        </table>
                }
            </div>

            {
                showPayment &&
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
                    <div className='flex justify-center items-center flex-col h-full w-md'>
                        <div className='p-5 bg-white rounded-md min-w-[500px] relative'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm clientSecret={clientSecret} setPaymentError={setPaymentError} setTransitionId={setTransitionId} setShowPayment={setShowPayment}></CheckoutForm>
                            </Elements>
                            <button onClick={() => setShowPayment(false)} className='absolute -top-5 -right-5 text-white text-xl bg-red-500 p-2 rounded-full'><GrClose /></button>
                            {
                                paymentError &&
                                <p className='text-red-500 mt-5 text-center'>{paymentError}):</p>
                            }
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Carts;