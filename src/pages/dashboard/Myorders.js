import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import useTitle from '../../Router/hook/useTitle';

const Myorders = () => {

    useTitle('my orders')


    const { user,logOut } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    
  useEffect(() => {
    fetch(` https://server-side-weld.vercel.app/bookings?email=${user?.email}`,{
      headers: {
          authorization: `Bearer ${localStorage.getItem('bookstore-token')}`
      }
  })
      
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
      
       
        .then(data => {
            setBookings(data);
        })
}, [user?.email,bookings, logOut])
console.log(bookings);

    



//     const url = ` https://server-side-weld.vercel.app/bookings?email=${user?.email}`,{
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('Tranport-token')}`
//         }
    

//   const { data: bookings = [] } = useQuery({
//       queryKey: ['bookings', user?.email],
//       queryFn: async () => {
//           const res = await fetch(url);
//           const data = await res.json();
//           return data;
//       }
//   })

console.log(bookings);
  return (
    <div>
    <h3 className="text-3xl text-center py-2 text-slate-600 font-semibold mb-5">{user?.displayName}'s Orders Booking</h3>
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
              <th>photo</th>
              <th>Product</th>
              <th> Name</th>
              <th>Resale price Price</th>

                    <th>Location</th>
                          <th>Time</th>
                          <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                { bookings &&
                    bookings?.map((booking, i) => <tr key={booking._id}>
                        <th>{i+1}</th>
                      <td><img className='w-[50px] h-[50px]' src={booking.image} alt="" /></td>
                      <td>{booking.name}</td>
                      <td>{user?.displayName}</td>

                        <td>{booking.resaleprice}</td>
                      <td>{booking.meeting}</td>
                      <td>{booking.time}</td>

                        <td> { booking.resaleprice && !booking.paid && <Link
                                      to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        bookings.resaleprice && booking.paid && <span className='text-green-500'>Paid</span>
                                    }</td>

                    </tr>)
                }
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Myorders