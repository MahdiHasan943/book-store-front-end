import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AllsellerCard from './AllsellerCard';
import toast from 'react-hot-toast';
import useTitle from '../../../Router/hook/useTitle';
const AllBuyer = () => {

  useTitle('all buyers')
   
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    
    axios.get('https://server-side-weld.vercel.app/buyers')
      .then(res => {
        setSellers(res.data)
    })
  

  }, [])



  
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this Buyers');
    if (proceed) {
        fetch(`https://server-side-weld.vercel.app/buyers/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    const remaining = sellers.filter(odr => odr._id !== id);
                    setSellers(remaining);
                }
              
            })
    }
}
   
  

    

  return (
    <div>
            <h2 className="text-3xl overflow- py-6 shadow-2xl uppercase  bg-[#ff4157] text-white border-[4px] text-center">Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
              <th>Email</th>
              <th>Title</th>
                

                <th>delete</th>
                <th>veriify</th>


                
                        </tr>
                    </thead>
            <tbody>


              {
                sellers.map((seller,index)=><AllsellerCard handleDelete={handleDelete}  index={index} key={seller._id} seller={seller}></AllsellerCard>)
          

          }
                        
                 </tbody>
                </table>
            </div>
           
        </div>
  )
}

export default AllBuyer