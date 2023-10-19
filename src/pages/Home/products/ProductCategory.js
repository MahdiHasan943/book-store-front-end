import React, { useEffect, useState } from 'react'
import {useQuery}  from '@tanstack/react-query'
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const ProductCategory = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://server-side-kohl.vercel.app/api/v1/category')
            .then(res => res.json())
          .then(data=>setServices(data.data))
    },[])
    const filter = services.slice(6);
  return (
    
      <div className="max-w-screen-xl py-8 mx-auto">
          <h1 className='d text-4xl font-semibold my-6 text-center '>Choose  Your Books Category</h1>
          <div className="text-center flex justify-center">
              <div className=' h-[2px] w-[200px] py-0 bg-[#f1592b]'></div>
          </div>
          <div className="text-center my-2 flex justify-center">
          <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#f1592b]'></div>
              <div className=' h-[1px] w-[100px] py-0 bg-[#f1592b]'></div>
              <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#f1592b]'></div>
          </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4'>{
           filter.map(service=><CategoryCard key={service._id} service={service}></CategoryCard>)          
      }
      
          </div>
          <div className="mx-auto text-center">
          
              <div className="py-8">
                  
           <Link to={'/allCategory'}>      <button className='text-white font-semibold text-[14px] font-lato py-3 px-6 bg-[#f1592b]'>See All</button>
</Link> 
              </div>
          </div>
          
      </div>
  )
}

export default ProductCategory