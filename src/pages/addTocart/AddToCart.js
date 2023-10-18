import React, { useContext, useEffect, useState } from 'react';
import './AddToCart.css';
import { ProductsContext } from '../../Context/AddTocartContext';
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const { cart, updateCartItemQuantity,deleteCartItem  } = useContext(ProductsContext);

  const [shippin, setShipping] = useState(5.00);
  const [subtotal, setSubtotal] = useState(0);
  const cartDetails = Array.isArray(cart) ? cart.filter(item => item?.email === user?.email) : [];

  const handleDecreaseQuantity = async (item) => {
    if (item.quantity > 1) {
      // Update the local state to reflect the change
      updateCartItemQuantity(item._id, item.quantity - 1);
  
      try {
        const response = await fetch(`https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart/${item._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: item.quantity - 1 }),
        });
  
        if (response.ok) {
          // Item quantity was successfully updated in the database
        } else if (response.status === 404) {
          // Handle the case where the cart item is not found
        } else {
          // Handle other possible errors
        }
      } catch (error) {
        // Handle network errors or other exceptions
      }
    }
  };
  
  const handleIncreaseQuantity = async (item) => {
    // Update the local state to reflect the change
    updateCartItemQuantity(item._id, item.quantity + 1);
  
    try {
      const response = await fetch(`https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });
  
      if (response.ok) {
        // Item quantity was successfully updated in the database
      } else if (response.status === 404) {
        // Handle the case where the cart item is not found
      } else {
        // Handle other possible errors
      }
    } catch (error) {
      // Handle network errors or other exceptions
    }
  };


  return (
  
  
      <div className="w-full">
      <div className="py-10 w-full hidden gm:block">
        <table className="w-full">
        <thead className=" bg-[#FF413D]   h-[76px]">
       <tr className="">
         <th className="text-start text-[18px] px-4 lg:px-8 uppercase font-lato font-bold text-white ">Product Details ( {cartDetails?.length || 0} )</th>
         <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">Price</th>
           <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">Quantity</th>
           
           <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">shipping</th>
         <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">subtotal</th>
         <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">action</th>
       </tr>
     </thead>          <tbody className="w-full">
            {cartDetails?.reverse().map((card, index) => (
              <tr className="" key={index}>
                <td className="px-2 lg:px-5 py-4">
                  <div className="flex gap-4">
                    <img className="h-[120px] w-[105px] rounded-lg" src={card?.image} alt="" />
                    <div className="">
                      <h2 className="text-[18px] font-lato font-semibold text-[#3C4242]">{card?.name}</h2>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-start">
                  <div className="">
                    <p className="text-[18px] font-lato font-semibold text-[#3C4242]">${card?.price}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex justify-between px-4 h-[36px] w-[100px] items-center gap-2 bg-[#F6F6F6] rounded-lg">
                    <button
                      onClick={() => handleDecreaseQuantity(card)} // Decrease quantity
                      className="text-[25px] text-[#3C4242] font-lato"
                    >
                      -
                    </button>
                    <p>{card?.quantity}</p>
                    <button
                      onClick={() => handleIncreaseQuantity(card)} // Increase quantity
                      className="font-lato text-[#3C4242]"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex justify-between px-4 h-[36px] w-[100px] items-center gap-2 bg-[#F6F6F6] rounded-lg">
                   
                  
                   <img onClick={()=>deleteCartItem(card?._id)} src="/deletecon.svg" alt="" />
                  </div>
                </td>

                {/* ... The rest of your table data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ... The rest of your component */}
    </div>
  

    
  );
}

export default AddToCart;
