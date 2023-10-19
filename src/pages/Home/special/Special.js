import React, { useState ,useEffect} from 'react'
import './Speacil.css'
import { FaHeartBroken,FaCartArrowDown,FaSearch,FaCompress } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Special = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetch(`https://server-side-kohl.vercel.app/api/v1/stock`)
      
    .then(res => res.json())
        .then(data => {
            setSpecials(data?.data);
         
        })
  }, [])
  const filters = specials.filter(s=>s.special)
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
          <p className='text-1xl my-6 font-popping font-semibold text-[12px]  text-[gray] text-center'>Choose any three items from this list of paperback books and receive all three at <br />  the discounted price of $25 including shipping (US only).  Or choose one hardcover <br /> book and two of any of the others for $30 including shipping. <br /></p>
          


          <div className="grid mt-10 grid-col-1 mx-auto sm:grid-cols-3 container">
        {
          filters?.map(special => (
            
            <div className=""key={special._id} >
            <Link to={`/books/${special?._id}`}>          
            <div className="img-area py-4 w-full h-auto mx-auto">
                
                <img className=' mx-auto w-full h-full' src={special?.imageURLs[0]} alt="" />
                
                <div className="img-text">
                    <p className=''>
                        <span className='mx-2'><FaHeartBroken></FaHeartBroken></span>
                      <span className='mx-2'>  <FaCartArrowDown></FaCartArrowDown></span>
                        
                        <span className='mx-2'><FaSearch></FaSearch></span>
                      <span className='mx-2'><FaCompress></FaCompress></span>
                    </p>
                   
                 </div>
                 
                </div>
                </Link>   
    
    </div>
          ))
              }
          </div>
      
      </div>
  )
}

export default Special