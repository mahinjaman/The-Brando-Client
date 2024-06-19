import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import FacilityCard from './FacilityCard';

const RoomFacility = () => {

    const secureAxios = useSecureAxios();

    const { isPending, data: facility, error } = useQuery({
        queryKey: 'room_service',
        queryFn: async () => {
            const response = await secureAxios.get('/room_facility')
            return response.data;
        }
    })

    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error.message}</h1>
    }

    console.log(facility);

    return (
        <div className='mx-5 border border-dashed mt-5 bg-stone-100 rounded-md relative'>
            <div className='lg:pt-96 w-96 mx-auto'>
                <PrimaryDivider />
            </div>
            <div className='lg:w-[84%] mx-auto p-5 rounded-md bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    facility.map((facility, idx) => {
                        return <FacilityCard key={facility._id} item={facility} idx={idx}></FacilityCard>
                    })
                }
            </div>

            <div className='hidden lg:absolute lg:flex items-center gap-5 top-[69%]'>
                <div className='w-16 h-[1px] bg-slate-500'></div>
                <div className='p-3 rounded-full border border-dashed border-[#c4a676]'>
                    <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                </div>
            </div>

            <div className='hidden lg:absolute lg:flex items-center gap-5 top-[69%] right-0'>
                <div className='p-3 rounded-full border border-dashed border-[#c4a676]'>
                    <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                </div>
                <div className='w-16 h-[1px] bg-slate-500'></div>
            </div>
        </div>
    );
};

export default RoomFacility;