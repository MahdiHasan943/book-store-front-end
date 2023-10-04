import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../component/shared/loading/Loading';
import { AuthContext } from '../Context/UserContext';
import useSeller from './useSeller';


const SellerRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] =useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRout;