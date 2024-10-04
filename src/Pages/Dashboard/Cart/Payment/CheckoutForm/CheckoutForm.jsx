import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import PropTypes from 'prop-types'
import useAuthInfo from '../../../../../Hooks/useAuthInfo';
import Swal from 'sweetalert2';
import useCartRooms from '../../../../../Hooks/useCartRooms';
import moment from 'moment';
import useSecureAxios from '../../../../../Hooks/useSecureAxios';
const CheckoutForm = ({ clientSecret, setPaymentError, setTransitionId , setShowPayment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cartRooms, refetch] = useCartRooms();
    const { user } = useAuthInfo();
    const date = moment().format('YYYY-MM-DD');
    const secureAxios = useSecureAxios();
    console.log(date);
    
    const totalPrice = cartRooms.reduce((total, item)=> total + item?.price,0);
    
    const confirmBookingRooms = cartRooms.map(room =>{
        return (
            {
                room_id: room?.room_id,
                cart_id: room?._id,
                email: user?.email,
                price: room?.price,
                Payment_status: 'Paid',
                status: 'Confirmed',
                thumb: room?.thumb,
                room_name: room?.room_name,
                bookDate: room?.bookDate.slice(0, 10),
                currentDate: room?.currentDate,
                guests: room?.guests,
            }
        )
    })
    

    const handleSubmit = async (e) => {
        setPaymentError('')
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (methodError) {
            setPaymentError('Payment method creation failed');
            Swal.fire({
                title: "Error",
                text: `Payment method creation failed ${methodError}`,
                icon: "error"
            });
            return;
        }
        else {
            console.log('Payment method created');

        }

        if (!clientSecret) {
            setPaymentError('No client secret provided');
            Swal.fire({
                title: "Error",
                text: "No client secret provided",
                icon: "error"
            });
            return;
        }
        else {
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                }
            });
            if (error) {
                console.error('Payment failed', error?.message);
                setPaymentError('Payment failed', error?.message);
                Swal.fire({
                    title: "Error",
                    text: "Payment failed",
                    icon: "error"
                });
                return;
            }
            else {
                console.log('payment successful', paymentIntent);

                if (paymentIntent?.id) {
                    setTransitionId(paymentIntent?.id);
                    setPaymentError('');
                    setShowPayment(false);
                    const payment = {
                        amount: totalPrice,
                        currency: paymentIntent?.currency,
                        transition_id: paymentIntent?.id,
                        paymentMethod: paymentIntent?.payment_method_types,
                        name: user?.displayName,
                        email: user?.email,
                        room_ids: cartRooms?.map(cart=> cart?.room_id),
                        cart_ids: cartRooms?.map(cart=> cart?._id),
                        status: paymentIntent?.status,
                        date
                    }
                    
                    secureAxios.post('/payment', {payment, confirmBookingRooms})
                    .then(res=>{
                        const result = res.data;
                        console.log(result);
                        refetch()
                        Swal.fire({
                            title: "Successful payment",
                            icon: "success",
                            html: `
                                    <p>Your payment was successfully sent</p>
                                    <p>Your Transaction ID: <mark>${paymentIntent?.id}</mark></p>
                                `,
                        });
                    })
                    .catch(err => {
                        console.log('error while saving payment', err);
                    })
                    
                }
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !elements} className='mt-4 px-5 py-1.5 bg-green-400 md:w-1/4 rounded '>
                Pay
            </button>
        </form>
    );
};

CheckoutForm.propTypes = {
    clientSecret: PropTypes.string.isRequired,
    setPaymentError: PropTypes.func.isRequired,
    setTransitionId: PropTypes.func.isRequired,
    setShowPayment: PropTypes.func.isRequired,
};

export default CheckoutForm;