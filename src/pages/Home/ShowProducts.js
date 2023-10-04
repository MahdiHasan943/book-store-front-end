import React from 'react'
import Button3 from '../../component/shared/Button/Button3';


const ShowProducts = ({ order,setModalData }) => {
    const { resaleprice,originalprice,imageURLs,des,location,time,name,years,seller,_id} = order;
    
 


  return (
      <div className='px-4 my-6'>
         <div className="card bg-base-100 shadow-xl">
  <figure><img className='' src={imageURLs[0]} alt="Shoes" /></figure>
  <div className="card-body h-[500px]">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
                  <div className='flex my-2 font-semibold justify-between'>
                      <span className=''>Current Price : <span className='text-[#95831d]'> {resaleprice}$</span></span>
                      <span>Original Price : <span className='text-[#95831d]'>{originalprice}$</span></span>
                  </div>
                  
                  <div className='flex my-2  font-semibold  justify-between'>
                      <span className=''>Adress :  {location}</span>
                      <span>Posted Time {time}</span>
                  </div>
          <p className='font-semibold my-2 '> Only {years} old</p>
          <div className='font-semibold my-2 '> <span className=''>Seller : {seller}</span>
          <p className='font-semibold my-2 '> Description {des? des : 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras...'}</p>

          <input type="checkbox" className="checkbox mx-6" disabled checked /></div>

          
          <div className="card-actions justify-end">
            
          <label
              htmlFor="booking-modal"
              onClick={() => setModalData(order)}

                        className="btn bg-[#f4516c] rounded-full   text-white"
                    >Booking Now</label>
    
                  </div>
  </div>
      </div>
     
    </div>  
  )
}

export default ShowProducts