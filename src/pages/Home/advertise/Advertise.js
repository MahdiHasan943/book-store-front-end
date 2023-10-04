import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../Context/UserContext';
import AdvertisCard from './AdvertisCard';
import './Advertise.css';


const Advertise = () => {

  
    const { user } = useContext(AuthContext);






    const url = 'http://localhost:5000/';
  
    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(url)
                
            const data = await res.json();
            return data;
        }
    })

    // console.log(advertise);
    const [item, setItem] = useState(null);



    return (
        <>
            { item &&
                 <div className="">
                <h1 className='text-4xl mt-16 mb-3 font-semibold uppercase text-center'>Highlight Books</h1>
                <div className="text-center flex justify-center">
          <div className=' h-[2px] w-[200px] py-0 bg-[#ff4157]'></div>
      </div><div className="text-center my-2 flex justify-center">
      <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
          <div className=' h-[1px] w-[100px] py-0 bg-[#ff4157]'></div>
          <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
      </div>
            </div> 
            

            }

            <div className="grid px-4 mt-10 grid-col-1 gap-4 sm:grid-cols-3 container1">
                {
                    advertise?.map(item => <AdvertisCard setItem={setItem} key={item._id} item={item}></AdvertisCard>)
                
            }
           </div>
        </>
  )
}

export default Advertise