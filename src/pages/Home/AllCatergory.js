import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';

const AllCatergory = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5000/api/v1/category')
          .then(res => res.json())
        .then(data=>setServices(data?.data))
  },[])
  
  return (
    <div className="max-w-screen-xl mx-auto">
          <h1 className='d text-4xl font-semibold my-6 text-center '>Select  Your Best Category</h1>
          <div className="text-center flex justify-center">
              <div className=' h-[2px] w-[200px] py-0 bg-[#ff4157]'></div>
          </div>
          <div className="text-center my-2 flex justify-center">
          <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
              <div className=' h-[1px] w-[100px] py-0 bg-[#ff4157]'></div>
              <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
          </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4'>{
           services.map(service=><CategoryCard key={service._id} service={service}></CategoryCard>)          
      }
      
          </div>
          
          
      </div>
  )
}

export default AllCatergory