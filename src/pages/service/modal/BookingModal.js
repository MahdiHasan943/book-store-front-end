import React, { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../../Context/AddTocartContext';

const BookingModa = ({ modalData, setModalData }) => {
    const { user } = useContext(AuthContext);
    const {cart,setCart}=useContext(ProductsContext)
    const {imageURLs,name,brand,price,category} = modalData;
    const [quentity, setQuentity] = useState(1)
    const navigate=useNavigate()
    const totalPrice = price * quentity;

    const handleMin = () => {
        if (quentity > 1) {
            const min = quentity - 1;
        setQuentity(min)
        }
        
    }
    const handleMax = () => {
        if (quentity <= 19) {
            const max = quentity + 1;
        setQuentity(max)
        }
    }

    const addtocart = {
        name: name,
        price: totalPrice,
        email: user?.email,
        image: imageURLs[0],
        quantity:quentity
    }
    console.log(addtocart);
    const AddTocart = () => {
        fetch('https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addtocart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success(`${name} is added successfully`);
            navigate('/AddToCart');
            
            // Fetch the updated cart data immediately after a successful POST
            fetch('https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart')
                .then(res => res.json())
                .then(newData => {
                    // Assuming 'setCart' is a function to set your cart state
                    setCart(newData);
                })
                .catch(error => {
                    console.error('Error fetching updated cart data:', error);
                });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }
    
      console.log(cart,'from booking model');
      


  return (
      <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal h-[100vh] py-10 w-full">
              <div className="h-[700px] w-full">
                   <div className="grid grid-cols-1 snap-y gap-4 sm:gap-0 sm:grid-cols-2 relative  shadow-ButtonShadow w-[90%] lg:w-[800px] mx-auto h-full">
              <label htmlFor="booking-modal" className=" text-[black] btn-circle absolute right-4 top-4 text-[30px]">✕</label>
                  <div className="overflow-hidden"><img className='w-[280px] mx-auto sm:w-full h-[540px]  sm:h-full' src={imageURLs[0]} alt="" /></div>
                  <div className="overflow-hidden w-[280px] mx-auto sm:w-full h-[540px] flex justify-center items-center py-10 px-2 sm:px-4 sm:h-full  bg-white">
                      <div className="">         
                          <h2 className='  text-[#064532] font-Arimo text-[25px] mt-[-4px] capitalize  font-bold'>{name}</h2>
                          <div className="flex gap-4 items-center py-2"><img className='h-[30px]' src="/startCopy2.png" alt="" /> <span className='font-popping text-[14px]'>Brand : {brand.name}</span></div>
                          <p className='font-Arimo font-semibold text-[24px] text-[#000]'> <span className='line-through text-gray-400'>${price+100}.00</span>  ${totalPrice}.00</p>
                         <div className="h-[0.5px] my-5 w-full bg-gray-400"></div>
                          <p className='font-Arimo  capitalize  text-[14px] text-[#000]'>Category : {category}</p>
                          <div className="flex items-center pt-6 pb-2 gap-4">
                                  <div className="border py-[6px] px-10 text-[#262626] grid grid-cols-3 gap-4 items-center w-[140px] font-Arimo font-semibold border-[#bebbbb] "> <a className='text-[30px]' onClick={() => { handleMin() }}>-</a> <a href="">{quentity}</a> <a className='text-[20px]' onClick={() => { handleMax() }}>+</a> </div>
                          <Link  >                              <button onClick={AddTocart} className='py-2 px-10 hover:bg-[#064532] bg-[#262626] ease-linear  duration-200 font-Arimo font-semibold text-white'>ADD TO CART</button>
</Link>
                              </div>
                          <div className="text-center mx-auto py-2">
                          <button className='py-2 px-10 bg-[#064532] hover:bg-[#262626] ease-linear duration-200  text-[15px] font-Arimo w-[90%] font-semibold text-white'>BUY NOW</button>
                          </div>
                    </div>
                  </div>
                </div>
             </div>
            </div> 
        </>
    )
}

export default BookingModa