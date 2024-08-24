import React, { useEffect } from 'react';
import useSecureAxios from './useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import useAuthInfo from './useAuthInfo';

const useIsAdmin = () => {
    const secureAxios = useSecureAxios()
    const {user} = useAuthInfo();

    const {isPending: adminLoading ,data: isAdmin, refetch} =  useQuery({
        queryKey: ['isAdmin'],
        queryFn: async () => {
            if(user){
                const res = await secureAxios.get(`/is_admin/${user?.email}`);
                return res.data.isAdmin;
            }
        }
        
    })



    useEffect(()=>{
        refetch()
    },[refetch, user])

    return [isAdmin, adminLoading];
};



export default useIsAdmin;