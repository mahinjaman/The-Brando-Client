import React from 'react';
import useIsAdmin from '../Hooks/useIsAdmin';
import useAuthInfo from '../Hooks/useAuthInfo';
import RoomSkeleton from '../Components/Shared/RoomSkeleton';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
const AdminRoutes = ({children}) => {
    const {user, loading} = useAuthInfo();

    const [isAdmin, adminLoading] = useIsAdmin();

    const location = useLocation();

    if(loading || adminLoading){
        return <RoomSkeleton />
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate state={location?.pathname } to='/' />;
};

AdminRoutes.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoutes;