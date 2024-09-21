import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const paymentPublicKey = import.meta.env.VITE_PAYMENT_PUBLIC_KEY;

    const stripePromise = loadStripe(paymentPublicKey)
    return (
        <div>
            {/* Payment Form */}
            <div className='min-h-screen flex justify-center items-center'>
                <div className='bg-gray-800 p-5 text-white rounded'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm ></CheckOutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;