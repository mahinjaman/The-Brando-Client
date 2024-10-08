import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import useAuthInfo from '../../../Hooks/useAuthInfo';
import BookingRow from './BookingRow';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../../Components/ErrorImage';

const BookingRooms = () => {

    const secureAxios = useSecureAxios();

    const { user } = useAuthInfo()

    const { isPending, data: bookings, error } = useQuery({
        queryKey: ['bookingRooms'],
        queryFn: async () => {
            const res = await secureAxios.get(`/confirm-booking/${user.email}`)
            return res.data;
        }
    })



    if (isPending) {
        return <RoomSkeleton />
    }

    if (error) {
        <ErrorImage />
    }



    return (

        <div className="rounded-sm border border-stroke  shadow-default ">
            <div className="py-6 px-4 md:px-6 xl:px-7">
                <h4 className="text-xl font-semibold text-black">
                    Total Bookings
                </h4>
            </div>

            <div className="grid grid-cols-6 border-t border-stroke py-4 px-4 sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <p className="font-medium">Product Name</p>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="font-medium">Date</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Email</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Price</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Status</p>
                </div>
            </div>

            {bookings.map((product, key) => (
                <div
                    className="grid grid-cols-6 border-t border-stroke py-4 px-4 text-black dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                    key={key}
                >
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-16 p-1 rounded-md">
                                <img src={product.thumb} alt="Product" className='rounded' />
                            </div>
                            <p className="text-sm text-black ">
                                {product.room_name}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black ">
                            {product?.bookDate}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black ">
                            {product?.email}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black ml-6">${product?.price}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-meta-3 text-green-500">{product?.status}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default BookingRooms;