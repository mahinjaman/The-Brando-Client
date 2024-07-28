import React, { useContext } from 'react';
import { UserContext } from '../AuthProvider/AuthContext';

const useAuthInfo = () => {
    return  useContext(UserContext)
};

export default useAuthInfo;