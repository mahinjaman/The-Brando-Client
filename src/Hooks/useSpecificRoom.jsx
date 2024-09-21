import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecureAxios from './useSecureAxios';

const useSpecificRoom = (id) => { 
    const secureAxios = useSecureAxios()
    const {isPending, data: room, error} = useQuery({
        queryKey: ['room', id],
        queryFn: async () => {
            const res = await secureAxios.get(`/room/${id}`)
            return res.data;
        }
    })

    return [isPending, room, error]
};

export default useSpecificRoom;