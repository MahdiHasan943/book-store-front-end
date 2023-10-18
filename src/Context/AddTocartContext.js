
import { createContext, useEffect, useState } from "react";
import useLocalStorageState from 'use-local-storage-state';
export const ProductsContext = createContext({});

export function AddTocartContext({ children }) {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart')
      .then(res => res.json())
      .then(data => {
        // Group items by 'name' and 'email' properties and aggregate quantities
        const groupedCart = groupAndAggregateItems(data?.data);
        setCart(groupedCart);
      });
  }, [cart]);
  
  const groupAndAggregateItems = (cartData) => {
    const groupedCart = {};
  
    if (Array?.isArray(cartData)) {
      cartData?.forEach(item => {
        const { name, email, quantity, ...rest } = item;
  
        if (name && email) {
          const key = `${name}_${email}`;
          if (!groupedCart[key]) {
            groupedCart[key] = { ...rest, name, email, quantity: 0 };
          }
          groupedCart[key].quantity += quantity;
        }
      });
    }
  
    // Convert the groupedCart object back to an array
    const aggregatedCart = Object.values(groupedCart);
    return aggregatedCart;
  };
  const updateCartItemQuantity = (itemId, newQuantity) => {
    // Find the item in the cart and update its quantity.
    const updatedCart = cart?.map((item) => {
      if (item?._id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Update the cart state with the updated item.
    setCart(updatedCart);
  };
  const deleteCartItem = async (itemId) => {
    // Make a DELETE request to the server to delete the item from the database
    try {
      const response = await fetch(`https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Item deleted successfully from the server
        // Update the cart state with the updated cart without the deleted item
        const updatedCart = cart?.filter((item) => item?._id !== itemId);
        setCart(updatedCart);
      } else if (response.status === 404) {
        // Handle the case where the cart item is not found
      } else {
        // Handle other possible errors
      }
    } catch (error) {
      // Handle network errors or other exceptions
    }
  };
  
    return (<>   
      <ProductsContext.Provider value={{cart,setCart,updateCartItemQuantity,deleteCartItem }}>{children}</ProductsContext.Provider>
      
      </>
    );
  };
  