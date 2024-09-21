import React from 'react';
import {useQuery} from '@tanstack/react-query'
import usePublicAxios from './usePublicAxios';

const useTotalRooms = () => {

    const publicAxios = usePublicAxios()

    const {data: totalRooms, isPending , refetch} = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const res = await publicAxios.get('/rooms')
            return res.data;
        }
    })

    return [totalRooms, isPending, refetch]
};

export default useTotalRooms;