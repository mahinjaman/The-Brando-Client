import React, { useEffect, useState } from 'react';
import useSecureAxios from './useSecureAxios';

const useRooms = (activePage, limit) => {
    const [rooms, setRooms ] = useState([])
    const secureAxios = useSecureAxios();
    
    useEffect(() => {
        secureAxios.get(`/rooms?page=${activePage}&limit=${limit}`)
        .then(res=>{
            setRooms(res?.data)
        })
    }, [activePage, limit, secureAxios])
    return rooms;
};

export default useRooms;