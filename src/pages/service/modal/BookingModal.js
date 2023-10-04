import React, { useContext } from 'react'
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';


const BookingModa = ({ modalData, setModalData }) => {
    // console.log(modalData);
    const { resaleprice,originalprice,imageURLs,location,time,name,years,seller} = modalData;


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
            <div className="modal">
        <div className="modal-box relative">
           <img className='h-[200px] w-full' src={imageURLs[0]} alt="" />
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
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
                  </form>
                </div>
            </div>
        </>
    )
}

export default BookingModa