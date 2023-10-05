import React, { useEffect, useState } from 'react'
import Loading from '../../component/shared/loading/Loading';
import {useQuery}  from '@tanstack/react-query'
import CategoryCard from './CategoryCard';

import Buttontwo from '../../component/shared/Button/Buttontwo'
import { Link } from 'react-router-dom';

const ProductCategory = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/category')
            .then(res => res.json())
          .then(data=>setServices(data.data))
    },[])
console.log(services);
    const filter = services.slice(6);
    console.log(filter);
  return (
    
      <div className="max-w-screen-xl mx-auto">
          <h1 className='d text-4xl font-semibold my-6 text-center '>Choose  Your Books Category</h1>
          <div className="text-center flex justify-center">
              <div className=' h-[2px] w-[200px] py-0 bg-[#ff4157]'></div>
          </div>
          <div className="text-center my-2 flex justify-center">
          <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
              <div className=' h-[1px] w-[100px] py-0 bg-[#ff4157]'></div>
              <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
          </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4'>{
           filter.map(service=><CategoryCard key={service._id} service={service}></CategoryCard>)          
      }
      
          </div>
          <div className="mx-auto text-center">
          
           <Link to={'/allCategory'}><Buttontwo>See All</Buttontwo> </Link> 
          </div>
          
      </div>
  )
}

export default ProductCategory