import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import BookingModa from '../service/modal/BookingModal';
import ShowProducts from './ShowProducts';

const Products = () => {
    const { id } = useParams()
    console.log(id);
    const  data  = useLoaderData([]);
    // console.log(data._id);
      
    const [orders, setOrders] = useState([]);
    // console.log(orders);
    const [modalData, setModalData]=useState(null);
    console.log(orders);
    const filter=orders.filter(f=>f?.category===id)
    
// console.log(orders);        
      
        useEffect(() => {
            fetch(`http://localhost:5000/api/v1/products`)
              
            .then(res => res.json())
                .then(data => {
                    setOrders(data?.data);
                 
                })
        }, [])
        
    

  return (
      <div>
          
          




          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  

                 
                 {
              filter?.map(order=><ShowProducts  setModalData={setModalData} key={order._id}  order={order}></ShowProducts>)
          } 

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

export default Products