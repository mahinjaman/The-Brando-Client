import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../../Components/ErrorImage';

const PaymentHistory = () => {

    const secureAxios = useSecureAxios();
    const { user } = useAuthInfo();

    const { isPending, data: paymentHistory = [], error, } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await secureAxios.get(`/payment-history/${user?.email}`)
            return res.data;
        }
    })

    if(isPending){
        return <RoomSkeleton />
    }

    if(error){
        return <ErrorImage />
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Method</th>
                            <th>Amount</th>
                            <th>Transition ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((payment, index) => {
                                return(
                                    <tr key={payment._id}>
                                    <th className='font-semibold '>{index+1}</th>
                                    <td className='font-semibold '>{payment?.date}</td>
                                    <td className='font-semibold capitalize'>{payment.paymentMethod[0]}</td>
                                    <td className='font-semibold '>${payment?.amount}</td>
                                    <td className='font-semibold '><mark>{payment?.transition_id}</mark></td>
                                    <td className='font-semibold text-green-500'>{payment?.status}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;