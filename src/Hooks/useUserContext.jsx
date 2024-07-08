import React, { useContext } from 'react';
import { UserContext } from '../AuthProvider/AuthContext';

const useUserContext = () => {
    const userContext = useContext(UserContext)
    return userContext;
};

export default useUserContext;