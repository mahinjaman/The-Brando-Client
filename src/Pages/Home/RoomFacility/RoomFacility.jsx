import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import FacilityCard from './FacilityCard';
import bg from '../../../assets/popular_bg.png'
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../../Components/ErrorImage';
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
        return <RoomSkeleton />
    }

    if (error) {
        return <ErrorImage />
    }

    return (
        <div className='mx-5 border border-dashed mt-5 bg-stone-100 rounded-md relative py-5 lg:mt-20 xl:py-20 z-0 xl:mt-16 2xl:mt-0'>
            <div className='xl:pt-[18%] 2xl:pt-[20%] lg:w-96 mx-auto'>
                <PrimaryDivider />
            </div>
            <div className='lg:w-[83.5%] xl:w-[80%]  2xl:w-[83.5%] mx-auto p-5 relative z-10 rounded-md bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                {
                    facility.map((facility, idx) => {
                        return <FacilityCard key={facility._id} item={facility} idx={idx}></FacilityCard>
                    })
                }
            </div>

            {/* bg */}
            <div className=' hidden lg:block lg:absolute top-1/3 opacity-15 right-[15%] z-0'>
                <img src={bg} alt="" className='w-1/2' />
            </div>
            
            <div className=' hidden lg:block lg:absolute bottom-0 opacity-15 left-10 z-0'>
                <img src={bg} alt="" className='w-1/2' />
            </div>

            {/* bg icon */}
            <div className='hidden lg:absolute lg:flex items-center gap-5 top-[50%] xl:top-[39%]'>
                <div className='w-16 h-[1px] bg-slate-500'></div>
                <div className='p-3 rounded-full border border-dashed border-[#c4a676]'>
                    <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                </div>
            </div>

            <div className='hidden lg:absolute lg:flex items-center gap-5 top-[50%] right-0 xl:top-[39%]'>
                <div className='p-3 rounded-full border border-dashed border-[#c4a676]'>
                    <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                </div>
                <div className='w-16 h-[1px] bg-slate-500'></div>
            </div>

            
        </div>
    );
};

export default RoomFacility;