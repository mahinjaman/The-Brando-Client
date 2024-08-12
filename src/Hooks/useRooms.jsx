import React, { useEffect, useState } from 'react';
import usePublicAxios from './usePublicAxios';

const useRooms = (activePage, limit) => {
    const [rooms, setRooms ] = useState([])
    const publicAxios = usePublicAxios();
    
    useEffect(() => {
        publicAxios.get(`/rooms?page=${activePage}&limit=${limit}`)
        .then(res=>{
            setRooms(res?.data)
        })
    }, [activePage, limit, publicAxios]);
    
    return rooms;
};

export default useRooms;