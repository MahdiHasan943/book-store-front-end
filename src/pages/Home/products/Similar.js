import React, { useRef, useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BookingModa from '../../service/modal/BookingModal';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import"./products.css"
// import required modules
import { Navigation, Pagination } from 'swiper';
import { Link, useParams } from 'react-router-dom'

const Similar = () => {
  const { id } = useParams()
  const [modalData, setModalData]=useState(null);

  const [sP, setSp] = useState([]);

  const [pDetails, setPDetails] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-kohl.vercel.app/api/v1/stock/${id}`)
      .then(res => res.json())
    .then(data=>setPDetails(data.data))
  },[])
 
  useEffect(() => {
    fetch(`https://server-side-kohl.vercel.app/api/v1/stock`)
      .then(res => res.json())
    .then(data=>setSp(data.data))
  }, [])
  console.log(sP);
  const similar=sP.filter(sp=>sp?.category===pDetails?.category)
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
          <img className='w-[280px]  sm:w-[600px] h-[480px] sm:h-[680px] mx-auto' src={pDetails?.imageURLs?.[0]} alt="" />

</div>
        {/* two */}
        <div className="px-6 pt-4 sm:px-0 two w-full sm:w-[600px] ">
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

      <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[Navigation]}
        
          
          className=" mySwiper  w-full  h-[600px]  lg:h-[800px]   mx-auto"
        >
              {
                  similar?.map(order => (<>
                    <SwiperSlide className='my-10 h-[500px]  lg:h-[690px]   sm:mx-4 '>
                    <div className="w-[280px] mx-auto   lg:w-[370px] xl:w-[400px]  py-6 sm:px-5 lg:h-[690px] slidecard">
                              <div className="h-[420px] md:h-[380px] xl:h-[580px]  group hover:scale-105 ease-linear duration-200  overflow-hidden relative bg-cover bg-center bg-no-repeat  w-full" style={{ backgroundImage: `url(${order?.imageURLs[0]})` }}>
                                  <div className="w-[35px] absolute top-[30px] right-[30px] bg-[white] h-[35px] flex justify-center items-center  border-[1px] p-2 border-[#e6e6e] rounded-full">
                                  <img className='w-[30px]  h-[30px]' src="/love-svgrepo-com.svg" alt="" />

                                  </div>
                                  <img className='w-[35px] absolute top-[30px] left-[30px] bg-[white] h-[35px] flex justify-center items-center  border-[1px] p-2 border-[#e6e6e] rounded-full' src="/hot.png" alt="" />
                              
                                  <div className="flex absolute left-0 bottom-[-100px] group-hover:bottom-0 ease-in-out duration-200 delay-200 w-full ">
                                      <div className="bg-[black] w-full  flex justify-center py-4 hover:bg-[#064532]"><Link to={`/books/${order?._id}`}>  <img className='w-[50px] h-[30px]' src="/arrow-sm-right-svgrepo-com.svg" alt="" /></Link></div>
                                      <div className="hidden  bg-[black] py-4 sm:flex justify-center w-full hover:bg-[#064532]">
                                          
                              <label
              htmlFor="booking-modal"
              onClick={() => setModalData(order)}

                        className=""
                    >                              <img onClick={''} className='eye w-[50px] h-[30px]' src="/eye-svgrepo-com.svg" alt="" />
                    </label>
    
                                      </div>

                                </div>
                              
                              </div>
                              <div className="mt-4">
                                  <img className='mx-auto' src="/startCopy.png" alt="" />
                                  <p className='text-center capitalize text-[#064532] font-semibold text-[18px] py-4  font-popping'>{order?.name}</p>
                                  <p className='text-center capitalize text-[red] font-semibold text-[18px]   font-popping'><span className='text-[#111]'>Price : </span>{order?.price}$</p>

                              </div>
                    </div>
                    </SwiperSlide>

                    </>
                      
                  ))
                  
              }
                
                 
                
        </Swiper>


      </div>
      
      { modalData &&
              
              <BookingModa
              modalData={modalData}
              setModalData={setModalData}
    
           
        ></BookingModa>
    
          
              }
                   
    
      </div>
  )
}

export default Similar