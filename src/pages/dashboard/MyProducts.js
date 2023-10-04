import React, { useContext, useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../component/shared/loading/Loading';
import { AuthContext } from '../../Context/UserContext';
import { useQuery } from '@tanstack/react-query'
import { useLoaderData } from 'react-router-dom'
import Table from './Table';
import useTitle from '../../Router/hook/useTitle';




const MyProducts = () => {
 useTitle('my products')

  const { user } = useContext(AuthContext);
    

  const url =   ` https://server-side-weld.vercel.app/myProducts?email=${user?.email}`;

  const { data: myProducts = [],refetch } = useQuery({
      queryKey: ['myProducts', user?.email],
      queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
      }
  })
 
    
 
    
    
    
    
    

    const [item, setItem]=useState([]);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this review');
    if (proceed) {
        fetch(` https://server-side-weld.vercel.app/products/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    const remaining = myProducts.filter(odr => odr._id !== id);
                    setItem(remaining);
                }
                refetch()
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
                            <th>Photos</th>
                            <th>Products Name</th>
                            <th>Email</th>
                <th>Price</th>
                
                <th>Advertise</th>

                <th>delete</th>
                <th>Status</th>


                
                        </tr>
                    </thead>
            <tbody>


              {
                myProducts.map((product,index)=><Table handleDelete={handleDelete}  index={index} key={product._id} product={product}></Table>)
          

          }
                        
                 </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default MyProducts;