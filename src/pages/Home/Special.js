import React from 'react'
import './Speacil.css'
import { FaHeartBroken,FaCartArrowDown,FaSearch,FaCompress } from "react-icons/fa";

const Special = () => {


    
  return (
      <div className='py-8  shadow-summery mt-8 px-4'>
          
          <h1 className='text-4xl my-3 font-semibold uppercase text-center'>Special Offer </h1>
          <div className="text-center flex justify-center">
              <div className=' h-[2px] w-[200px] py-0 bg-[#f1592b]'></div>
          </div>
          <div className="text-center my-2 flex justify-center">
          <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#f1592b]'></div>
              <div className=' h-[1px] w-[100px] py-0 bg-[#f1592b]'></div>
              <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#f1592b]'></div>
          </div>
          <p className='text-1xl my-6 font-semibold text-[12px]  text-[gray] text-center'>Choose any three items from this list of paperback books and CD’s and receive all three at <br />  the discounted price of $25 including shipping (US only).  Or choose one hardcover <br /> book and two of any of the others for $30 including shipping. <br /></p>
          


          <div className="grid mt-10 grid-col-1 mx-auto sm:grid-cols-3 container">
              
              <div className="" >
                  
                  <div className="img-area">
                      
                      <img src="https://cdn.shopify.com/s/files/1/0319/5758/1961/products/image_21_2fdd1b77-613e-493d-9cdb-10d44362a3f1_1024x1024.jpg?v=1581481828" alt="" />
                      
                      <div className="img-text">
                          <p className=''>
                              <span className='mx-2'><FaHeartBroken></FaHeartBroken></span>
                            <span className='mx-2'>  <FaCartArrowDown></FaCartArrowDown></span>
                              
                              <span className='mx-2'><FaSearch></FaSearch></span>
                            <span className='mx-2'><FaCompress></FaCompress></span>
                          </p>
                         
                       </div>
                       
                  </div>
          
          </div>



          <div className="" >
                  
                  <div className="img-area">
                      
                      <img src="https://cdn.shopify.com/s/files/1/0319/5758/1961/products/image_19_09db57b4-6cff-43ae-a334-9fe00e865aa1_570x.jpg?v=1581481571" alt="" />
                      
                      <div className="img-text">
                          <p className=''>
                              <span className='mx-2'><FaHeartBroken></FaHeartBroken></span>
                            <span className='mx-2'>  <FaCartArrowDown></FaCartArrowDown></span>
                              
                              <span className='mx-2'><FaSearch></FaSearch></span>
                            <span className='mx-2'><FaCompress></FaCompress></span>
                          </p>
                         
                       </div>
                       
                  </div>
          
          </div>

          <div className="" >
                  
                  <div className="img-area">
                      
                      <img src="https://cdn.shopify.com/s/files/1/0319/5758/1961/products/image_22_7693cc76-eadc-4aa9-ae2c-60a4c660fe00_300x300.jpg?v=1581481828" alt="" />
                      
                      <div className="img-text">
                          <p className=''>
                              <span className='mx-2'><FaHeartBroken></FaHeartBroken></span>
                            <span className='mx-2'>  <FaCartArrowDown></FaCartArrowDown></span>
                              
                              <span className='mx-2'><FaSearch></FaSearch></span>
                            <span className='mx-2'><FaCompress></FaCompress></span>
                          </p>
                         
                       </div>
                       
                  </div>
          
          </div>

             
              

          </div>
      
      </div>
  )
}

export default Special