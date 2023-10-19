import { Link, useLoaderData, useParams } from 'react-router-dom'
import BookingModa from '../../service/modal/BookingModal';
import React, { useRef, useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import"./products.css"
// import required modules
import { Navigation, Pagination } from 'swiper';
import Loading from '../../../component/shared/loading/Loading';
const Products = () => {
    const { id } = useParams()
    const  data  = useLoaderData([]);
    // console.log(data._id);
      
    const [orders, setOrders] = useState([]);
    // console.log(orders);
    const [modalData, setModalData]=useState(null);
    const filter=orders.filter(f=>f?.category===id)
          
        useEffect(() => {
            fetch(`https://server-side-kohl.vercel.app/api/v1/stock`)
              
            .then(res => res.json())
                .then(data => {
                    setOrders(data?.data);
                 
                })
        }, [])
        
        const [loading, setLoading] = useState(true);
        useEffect(()=>{
          setTimeout(() => {
            setLoading(false); // Set loading to false after 500ms delay
          }, 1500);
        },[])
      

  return (
      <div>
       
        <h1 className='sm:pl-8  text-[#064532] font-semibold leading-7 text-[30px] pb-8 pt-20  font-popping'>Trending on Book Store</h1>
      {loading ? (<Loading/>)
      
        :
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
                  filter?.map(order => (<>
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
    } 
      
        
          
          
          { modalData &&
              
          <BookingModa
          modalData={modalData}
          setModalData={setModalData}

       
    ></BookingModa>

      
          }
         
          


    </div>
  )
}

export default Products