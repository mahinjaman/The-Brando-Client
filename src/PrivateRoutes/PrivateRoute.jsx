import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { UserContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import RoomSkeleton from '../Components/Shared/RoomSkeleton';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <RoomSkeleton></RoomSkeleton>
    }
    if(!user){
        return <Navigate state={location?.pathname } to='/login' />;
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateRoute;