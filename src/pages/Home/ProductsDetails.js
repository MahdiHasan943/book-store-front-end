import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const { id } = useParams()
  
  // console.log(id);

  const [pDetails, setPDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/stock/${id}`)
      .then(res => res.json())
    .then(data=>setPDetails(data.data))
  },[])
  console.log(pDetails);
  // const { imageURLs,location,time,name,brand,price, years,seller,category} = pDetails;
  return (
    <div className='h-auto py-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="px-4">   
{/*           
        <div className="w-[280px] mx-auto   lg:w-[370px] xl:w-[400px]  py-6 sm:px-5 lg:h-[690px] ">
                              <div className="h-[420px] md:h-[380px] xl:h-[580px]  group hover:scale-105 ease-linear duration-200  overflow-hidden relative bg-cover bg-center bg-no-repeat  w-full" style={{ backgroundImage: `url(${pDetails?.imageURLs})` }}>
                              </div>        
                    </div> */}
          <img className='w-[280px]  sm:w-[600px] h-[480px] sm:h-[680px] mx-auto' src={pDetails?.imageURLs} alt="" />

</div>
        {/* two */}
        <div className="px-6 sm:px-0 two w-full sm:w-[600px] ">
        <div className="">
                            
                            <h2 className='  text-[#064532] font-Arimo text-[25px] mt-[-4px] capitalize  font-bold'>{pDetails?.name}</h2>
                            <div className="flex gap-4 items-center py-2"><img className='h-[30px]' src="/startCopy2.png" alt="" /> <span className='font-popping text-[14px]'>Brand : {pDetails?.brand?.name}</span></div>
                            <p className='font-Arimo font-semibold text-[24px] text-[#000]'> <span className='line-through text-gray-400'>${pDetails?.price+100}.00</span>  ${pDetails?.price}.00</p>
                           <div className="h-[0.5px] my-8 w-full bg-gray-400"></div>
            <p className='font-Arimo  capitalize  text-[14px] text-[#000]'>Category : {pDetails?.category}</p>
            <div className="h-[0.5px] my-8 w-full bg-gray-400"></div>

            <img className='w-full' src="/addTocart.png" alt="" />
                          
            <div className="text-center sm:flex gap-5 mx-auto py-8">
            <button className='py-4 w-[250px] mb-4 sm:mb-0 hover:bg-[#064532] bg-[#262626] ease-linear text-[15px] duration-200 font-Arimo font-semibold text-white'>ADD TO CART</button>

                            <button className='py-4 w-[250px] bg-[#064532] hover:bg-[#262626] ease-linear duration-200  text-[15px] font-Arimo  font-semibold text-white'>BUY NOW</button>
  
                            </div>
  
                      </div>

        </div>
       </div>
      {/* similar products */}
      <div className="px-4 sm:px-16 py-4">

      <h1 className='sm:pl-8  text-[#064532] font-semibold leading-7 text-[30px] pb-8 pt-20  font-popping'>Similar Books</h1>

      </div>
      
    
      </div>
  )
}

export default ProductsDetails