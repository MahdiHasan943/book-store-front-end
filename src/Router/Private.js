import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useState, CSSProperties } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from '../Context/UserContext';



const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location  = useLocation();

    if(loading){
        console.log('yes loading found');
        return <div className='h-[50vh] w-full flex justify-center items-center'><ClipLoader size={100} color="#36d7b7" /></div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default Private;