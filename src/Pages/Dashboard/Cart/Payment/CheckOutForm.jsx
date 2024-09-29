import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import useAuthInfo from '../../../../Hooks/useAuthInfo';
import Swal from 'sweetalert2';
const CheckOutForm = ({client_secret, setShowPayment}) => {
    const stripe = useStripe();
    const element = useElements();
    const [ errorMessage, setErrorMessage ] = useState('');
    const { user } = useAuthInfo();
    const [ transitionId , setTransitionId ] = useState('')

    const handleSubmit = async e => {

        e.preventDefault();
        setErrorMessage('')

        if (!stripe || !element) {
            return;
        }

        const card = element.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if(error){
            setErrorMessage(error.message);
            return;
        }
        

        const {paymentIntent, error: intentError } = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card,
                billing_details:{
                    name: user.displayName,
                    email: user.email
                }
            }

        })


        if(intentError){
            setErrorMessage(intentError.message);
            return;
        }
        else{
            setShowPayment(false)
            setTransitionId(paymentIntent?.id);
            Swal.fire({
                title: "Success",
                text: `Your Payment Intent ID: ${transitionId}`,
                icon: "success"
              });
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-white p-5 border-black rounded-md'>
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
                <button type="submit" disabled={!stripe || !client_secret}>
                    Pay
                </button>
            </form>
            {
                errorMessage && <p className='text-red-500 mt-5'>{errorMessage}</p>
            }
            {
                transitionId && <div>Payment Successful. Your Payment Intent ID: {transitionId}</div>
            }
        </div>
    );
};

CheckOutForm.propTypes = {
    client_secret: PropTypes.string.isRequired
}

export default CheckOutForm;