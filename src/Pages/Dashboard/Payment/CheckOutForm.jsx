import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutForm = () => {

    const stripe = useStripe();
    const element = useElements()

    const handleSubmit = async e =>{
        e.preventDefault()
        console.log('form submit');

        if( !stripe || !element ){
            return;
        }
        const card = element.getElement(CardElement);

        if( card === null){
            return;
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        
        if(error){
            console.error('Error creating payment method', error);
            return;
        }
        
        console.log('payment method created', paymentMethod);

    }
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-semibold primary-font'>Payment Now</h1>
            <form onSubmit={handleSubmit} className='min-w-96 flex flex-col gap-5 border border-green-600 p-5 rounded-md'>
                <CardElement 
                 options={
                    {
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4'
                                }
                            },
                            invalid: {
                                color: '#9e2141',
                            },
                        }
                    }
                 }
                ></CardElement>
                <button type="submit" disabled={!stripe} className='font-semibold px-5 py-1.5 bg-green-400 rounded'>Pay</button>
            </form>
        </div>
    );
};

export default CheckOutForm;