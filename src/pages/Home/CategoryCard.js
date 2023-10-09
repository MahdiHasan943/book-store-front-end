import React from 'react'
import { Link } from 'react-router-dom';
import Button3 from '../../component/shared/Button/Button3';
import Buttontwo from '../../component/shared/Button/Buttontwo';

const CategoryCard = ({ service }) => {
    
    const { name, imageUrl, total,_id } = service;

     

  return (
    <Link to={`/service/${service?.name}`}><div className='p-4'>
       <div className=" flex  border-[8px] transition duration-150  hover:ease-in hover:border-[4px]  hover:translate-x-0 border-[#f1592b]  shadow-2xl">
        <div className="py-6 px-4">
        <img className='h-[180px] w-[160px]' src={imageUrl} alt="Shoes" />
            </div>
          
          <div className="px-5 flex  justify-center items-center">
          <span className='text-black text-[20px] font-sofia  sm:text-4xl font-bold sm:text-[30px] capitalize'> {name}  Book</span>
        
         </div>
       

 
                 
                 
    
  
</div>
         
    </div>
    </Link>
  )
}

export default CategoryCard