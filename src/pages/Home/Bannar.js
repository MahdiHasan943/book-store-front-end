import Buttontwo from '../../component/shared/Button/Buttontwo'
import React, { useRef, useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Bannar.css'
import {motion} from "framer-motion";


import { Navigation, Pagination } from 'swiper';
import { heroText } from '../../Context/motion';

const Bannar = () => {
  const bannars = [
    {
      "id": 1,
      "img": "./hsi2.png",

      "title": "",
      "des": "",
      "button":""
    },
    {
      "id": 2,
      "img": "./hsi1.png",

      "title": "",
      "des": "",
      "button":""
    },
    {
      "id": 3,
      "img": "./hsi3.png",
      "title": "",
      "des": "",
      "button":""

    }
  ]
  return (
    <>
      

      
      <div className="mt-[-30px]" >
      <Swiper
         
          slidesPerView={1}
        
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
        
          modules={[Navigation,Pagination]}
        
          
          className=" mySwiper  w-full h-[650px] sm:h-[750px]  my-auto  mx-auto"
        >
          {/* #f1592b
          #064532 */}
          {
            bannars.map(b => (
              <SwiperSlide className='my-10 h-[550px] sm:h-[600px] w-full   '>
              <div className=" py-6 sm:px-5 h-[550px] sm:h-[600px] w-full slidecard">
                        <div className="h-[550px] sm:h-[600px] ease-linear duration-200  overflow-hidden relative bg-cover bg-center bg-no-repeat  w-full" style={{ backgroundImage: `url(${b.img})` }}>
                           
                        <div className=" absolute top-0 left-0 px-6 sm:px-24 w-full h-full flex flex-col justify-center   ">

                      {
                        b.id ===1&&<motion.div variants={heroText} initial="hidden" whileInView="show" className=" my-auto">
                        <h1 className=" text-[#064532] font-popping text-[40px]  sm:text-[60px]  font-bold">Biggest <span className='text-[#f1592b]'>bookstore</span> </h1>
                        <h2 className='  text-[#064532] font-popping text-[40px] mt-[-4px] sm:text-[60px]  font-bold'>in Europe</h2>
  <p className="mb-5 text-[15px] font-popping  text-gray-400">$15,343,695.75 raised for local bookstores</p>
      <button className='text-white font-semibold text-[14px] font-lato py-3 px-6 bg-[#f1592b]'>Meet OUR BESTSELLER</button>
      </motion.div>
                      }
                       {
                        b.id ===2&&<motion.div variants={heroText} initial="hidden" whileInView="show"  className=" my-auto">
                        <h1 className=" text-[#064532] font-popping text-[40px]  sm:text-[60px]  font-bold">Bestselling <span className='text-[#f1592b]'>Fiction</span> </h1>
                        <h2 className='  text-[#064532] font-popping text-[40px] mt-[-10px] sm:text-[60px]  font-bold'>Book</h2>
  <p className="mb-5 text-[15px] font-popping  text-gray-400">$15,343,695.75 raised for local bookstores</p>
      <button className='text-white font-semibold text-[14px] font-lato py-3 px-6 bg-[#f1592b]'>Meet OUR BESTSELLER</button>
      </motion.div>
                       }

{
                        b.id ===3&&<motion.div variants={heroText} initial="hidden" whileInView="show"  className=" my-auto">
                        <h1 className=" text-[#064532] font-popping text-[40px]  sm:text-[60px]  font-bold">Biggest <span className='text-[#f1592b]'>bookstore</span> </h1>
                        <h2 className='  text-[#064532] font-popping text-[40px] mt-[-4px] sm:text-[60px]  font-bold'>in Europe</h2>
  <p className="mb-5 text-[15px] font-popping  text-gray-400">$15,343,695.75 raised for local bookstores</p>
      <button className='text-white font-semibold text-[14px] font-lato py-3 px-6 bg-[#f1592b]'>Meet OUR BESTSELLER</button>
      </motion.div>
                       }




    </div> 
                        </div>
                       
              </div>
              </SwiperSlide>
            
        ))
          }
                  
              
                
                 
                
        </Swiper>
        

</div>


      </>
  )
}

export default Bannar


