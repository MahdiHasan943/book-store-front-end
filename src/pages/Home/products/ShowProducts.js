
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ShowProducts = ({ order,setModalData }) => {
    const { price,quantity,imageURLs,des,location,time,name,years,seller,_id} = order;
    
 


  return (
  //     <div className='px-4 my-6'>
  //        <div className="card bg-base-100 shadow-xl">
  // <figure><img className='' src={imageURLs[0]} alt="Shoes" /></figure>
  // <div className="card-body h-[500px]">
  //   <h2 className="card-title">
  //     {name}
  //     <div className="badge badge-secondary">NEW</div>
  //   </h2>
  //                 <div className='flex my-2 font-semibold justify-between'>
  //                     <span className=''>Price : <span className='text-[#95831d]'> {price}$</span></span>
  //                     <span>quantity: <span className='text-[#95831d]'>{quantity}$</span></span>
  //                 </div>
                  
  //                 <div className='flex my-2  font-semibold  justify-between'>
  //                     <span className=''>Adress :  {location}</span>
  //                     <span>Posted Time {time}</span>
  //                 </div>
  //         <p className='font-semibold my-2 '> Only {years} old</p>
  //         <div className='font-semibold my-2 '> <span className=''>Seller : {seller}</span>
  //         <p className='font-semibold my-2 '> Description {des? des : 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras...'}</p>

  //         <input type="checkbox" className="checkbox mx-6" disabled checked /></div>

          
  //         <div className="card-actions justify-end">
            
  //         <label
  //             htmlFor="booking-modal"
  //             onClick={() => setModalData(order)}

  //                       className="btn bg-[#f4516c] rounded-full   text-white"
  //                   >Booking Now</label>
    
  //                 </div>
  // </div>
  //     </div>
     
    //   </div>  
    <SwiperSlide>
            <div className="exsm:w-[353px] py-6 px-5  exsm:h-[300px] slidecard">
              <div className="flex items-center justify-center gap-4">
                <img className="inline" src="/images/ellip.webp" alt="" />
                <p className="text-[#313131] text-[20px] font-lato font-semibold">
                  {name}
                </p>
                <div className="flex  items-center gap-2">
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                  <img src="/images/starts.svg" alt="" />
                </div>
              </div>
              <div className="flex py-2 gap-4 pr-4 justify-end items-center">
                <p className="text-[#313131] text-[18px] font-lato">On</p>
                <img src="/images/fb2.webp" alt="" />
                <img src="/images/goggl2.webp" alt="" />
                <img src="/images/fresh.webp" alt="" />
              </div>
              <p className="text-[#06040A] py-4 font-lato text-center leading-[30px] text-[16px]">
                Lorem ipsum dolor sit amet elit, consectetur adipiscing  elit
                cursus imperdiet ementum Quam  aliquam. Quam vel aliquam sit
                vulputate.
              </p>
            </div>
                  </SwiperSlide>
  )
}

export default ShowProducts