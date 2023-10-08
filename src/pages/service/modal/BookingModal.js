import React, { useContext } from 'react'
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';


const BookingModa = ({ modalData, setModalData }) => {
    // console.log(modalData);
    const { resaleprice,originalprice,imageURLs,location,time,name,brand,price, years,seller,category} = modalData;
console.log(modalData);

    const { user } = useContext(AuthContext);


 

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;


      
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
             userName,
             name,
            time,
            location,
            originalprice,
           resaleprice,
            email,
            phone,
            image:imageURLs[0],
             meeting
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setModalData(null);
                    toast.success('Booking confirmed');
                    
                }
                else{
                    toast.error(data.message);
                }
            })

    }




  return (
      <>
         

           
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal  sm:h-[700px] py-10 w-full">
              <div className="grid grid-cols-1 snap-y gap-4 sm:gap-0 sm:grid-cols-2 relative  shadow-ButtonShadow w-[90%] lg:w-[800px] mx-auto h-full">
              <label htmlFor="booking-modal" className=" text-[black] btn-circle absolute right-4 top-4 text-[30px]">✕</label>
                  <div className="overflow-hidden"><img className='w-[280px] mx-auto sm:w-full h-[540px]  sm:h-full' src={imageURLs[0]} alt="" /></div>
                  <div className="overflow-hidden w-[280px] mx-auto sm:w-full h-[540px] flex justify-center items-center py-10 px-2 sm:px-4 sm:h-full  bg-white">
                      <div className="">
                            
                          <h2 className='  text-[#064532] font-Arimo text-[25px] mt-[-4px] capitalize  font-bold'>{name}</h2>
                          <div className="flex gap-4 items-center py-2"><img className='h-[30px]' src="/startCopy2.png" alt="" /> <span className='font-popping text-[14px]'>Brand : {brand.name}</span></div>
                          <p className='font-Arimo font-semibold text-[24px] text-[#000]'> <span className='line-through text-gray-400'>${price+100}.00</span>  ${price}.00</p>
                         <div className="h-[0.5px] my-5 w-full bg-gray-400"></div>
                          <p className='font-Arimo  capitalize  text-[14px] text-[#000]'>Category : {category}</p>
                          <div className="flex items-center pt-6 pb-2 gap-4">
                              <div className="border py-[6px] px-10 text-[#262626] flex justify-around items-center w-[140px] font-Arimo font-semibold border-[#bebbbb] "> <a>-</a> <a href="">1</a> <a>+</a> </div>
                              <button className='py-2 px-10 hover:bg-[#064532] bg-[#262626] ease-linear  duration-200 font-Arimo font-semibold text-white'>ADD TO CART</button>
                          </div>
                          <div className="text-center mx-auto py-2">
                          <button className='py-2 px-10 bg-[#064532] hover:bg-[#262626] ease-linear duration-200  text-[15px] font-Arimo w-[90%] font-semibold text-white'>BUY NOW</button>

                          </div>

                    </div>
                  </div>
           {/* <img className='h-[200px] w-full' src={imageURLs[0]} alt="" />
                    
                  <h3 className="text-lg font-bold">{name}</h3>
                  <div className='flex my-2 font-semibold justify-between'>
                      <span className=''>Current Price : <span className='text-[#95831d]'> {resaleprice}$</span></span>
                      <span>Original Price : <span className='text-[#95831d]'>{originalprice}$</span></span>
                  </div>
                  <div className='flex my-2  font-semibold  justify-between'>
                      <span className=''>Adress :  {location}</span>
                      <span>Posted Time {time}</span>
                  </div>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        
                        <input name="name" type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" />
                      <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                      <input name="meeting" type="text" placeholder="Give your meeting locaton" className="input w-full input-bordered" />

                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                  </form> */}
                </div>
            </div> 
        </>
    )
}

export default BookingModa