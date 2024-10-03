import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import useAuthInfo from '../../../Hooks/useAuthInfo';

const PaymentHistory = () => {

    const secureAxios = useSecureAxios();
    const { user } = useAuthInfo();

    const {isPending , data:paymentHistory = [] ,error, } = useQuery({
        queryKey: ['payment'],
        queryFn: async ()=>{
            const res = await secureAxios.get(`/payment-history/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h1>Payment History: {paymentHistory.length}</h1>
        </div>
    );
};

export default PaymentHistory;