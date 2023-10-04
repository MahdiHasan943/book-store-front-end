

import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const Loading = () => {

    
    
    return (
        <div className='h-[50vh] w-full flex justify-center items-center'><ClipLoader size={100} color="#36d7b7" /></div>
    );
};

export default Loading;