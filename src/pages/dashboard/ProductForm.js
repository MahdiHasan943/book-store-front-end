import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { BsUpload } from "react-icons/bs";


const ProductForm = ({ selectedDate }) => {

    const { user } = useContext(AuthContext)
    // console.log(user.email);

    const options=
           
             [
            "08.00  pm",
            " 08.30 pm",
            "09.00 AM ",
            " 09.30 AM " ,
            "10.00 AM" ,
            " 10.30 AM " ,
            "11.00 AM " 
             
        ]
   
            
 
    

  

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = '75db54791513826eb71372a0758663c9';

    const navigate = useNavigate();
    
    const handleAddDoctor = (data,user) => {
        // console.log(data);
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    email: data.email,
                    name:data.name, 
                    location:data.location,
                    originalprice: data.originalprice,
                    image: imgData.data.url,
                    resaleprice: data.resaleprice,
                    years: data.years,
                    time: data.time,
                    category: data.category,
                    seller: user?.displayName,
                    des:data.des

                }

                // save doctor information to the database
                fetch(' https://server-side-weld.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproducts')                })
            }
        })
    }


  return (
    <div className=''>
          <h2 className="text-4xl text-center">Add A Product</h2>
          <div className="flex justify-center">
          <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control  w-full max-w-xs">
            <label className="label"> <span className="label-text">Name</span></label>
            <input type="text" {...register("name", {
                required: "Name is Required"
            })} className="input  input-bordered input-primary w-full max-w-xs" />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                  <input type="text" {...register("email", {
                required: "email is Required"
            })}  className="input  input-bordered input-primary my-5 w-full max-w-xs"   defaultValue={user?.email} readOnly placeholder="Email Address" />

            

              <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">category</span></label>
                
            <select className='border border-primary border-spacing-2 py-[12px] rounded-lg' {...register("category", { required: true })}>
                <option value="Drama">Drama</option>
                      <option value="Novals">Novals</option>
                      <option value="Science">Science</option>
      
       </select>

        </div>




        <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">location</span></label>
            <input type="text" {...register("location", {
                required: "location is Required"
            })} className="input input-bordered input-primary w-full max-w-xs" />
            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
              </div>
              
              <div className="form-control flex-row  w-full max-w-xs">
              <div className="mx-1"><label className="label"> <span className="label-text">Original Price</span></label>
            <input type="text" {...register("originalprice", {
                required: "original price is Required"
            })} className="input input-bordered input-primary  w-full max-w-xs" />
            {errors.originalprice && <p className='text-red-500'>{errors.originalprice.message}</p>}</div>
                  <div className="mx-1"><label className="label"> <span className="label-text">resale price </span></label>
            <input type="text" {...register("resaleprice", {
                required: "resaleprice is Required"
            })} className="input input-bordered input-primary  w-full max-w-xs" />
            {errors.resaleprice  && <p className='text-red-500'>{errors.resaleprice .message}</p>}</div>
                 
              </div>
              


   
              
              <div className="form-control flex-row  w-full max-w-xs">
              <div className="mx-1"><label className="label"> <span className="label-text">Years of used</span></label>
            <input type="text" {...register("years", {
                required: "years of used is Required"
            })} className="input input-bordered input-primary  w-full max-w-xs" />
                      
            {errors.years && <p className='text-red-500'>{errors.years.message}</p>}</div>
                  
                  <div className="mx-1"><label className="label"> <span className="label-text">Time</span></label>
                  <select className='border border-primary border-spacing-2 py-[12px] rounded-lg' {...register("time", { required: true })}>
               
                          {
                                options.map((option,i) => <option
                                    value={option}
                                    key={i}
                                >{option}</option>)
                            }
       </select>
</div>
                 
        </div>





       
        <textarea className='w-full my-4 max-w-xs border  border-primary' {...register("des")} placeholder="Give a description" />

                  
        <div className="form-control w-full max-w-xs">
                      <label className="label"> <span className="label-text">Photo</span></label>
                      
                      <label for='img' className="label input border-primary input-bordered w-full max-w-xs"> <BsUpload className='text-pink-500 font-bold text-2xl'></BsUpload></label>

            <input id='img' type="file" {...register("image", {
                // required: "Photo is Required"
            })} className="input input-bordered hidden py-2 input-primary w-full max-w-xs" />
            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
              </div>
              <div className="w-full text-center">        <input className='btn btn-accent px-12 text-center mt-4' value="Add Doctor" type="submit" />
</div>
    </form>
          </div>
  
</div>
  )
}

export default ProductForm