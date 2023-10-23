import React, { useContext, useEffect, useState } from "react";
import "./AddToCart.css";
import { ProductsContext } from "../../Context/AddTocartContext";
import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import LoadingTwo from "../../component/shared/loading/LoadingTwo";

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const { cart, updateCartItemQuantity, deleteCartItem } =
    useContext(ProductsContext);

  const [shippin, setShipping] = useState(5.0);
  const [subtotal, setSubtotal] = useState(0);
  const cartDetails = Array.isArray(cart)
    ? cart.filter((item) => item?.email === user?.email)
    : [];
  const subtotalPrice = cartDetails?.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );
  const grandTotal = subtotalPrice + shippin;
  const [loading, setLoading] = useState({}); // Use an object for individual item loading states

  const handleDecreaseQuantity = async (item) => {
    if (item.quantity > 1) {
      // Update the local state to reflect the change
      updateCartItemQuantity(item._id, item.quantity - 1);
      setLoading({ ...loading, [item._id]: true }); // Set loading for this item to true

      try {
        const response = await fetch(
          `https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart/${item._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: item.quantity - 1 }),
          }
        );

        if (response.ok) {
          // Item quantity was successfully updated in the database
          setLoading({ ...loading, [item._id]: false }); // Set loading for this item back to false
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
    setLoading({ ...loading, [item._id]: true });

    try {
      const response = await fetch(
        `https://server-side-k0awgrrd8-mahdihasan943.vercel.app/api/v1/addToCart/${item._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: item.quantity + 1 }),
        }
      );

      if (response.ok) {
        toast.success("Quantity updated");
        setLoading({ ...loading, [item._id]: false });
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
    <>
      <div className="py-10 w-full hidden gm:block  ">
        <table className="w-full ">
          <thead className=" bg-[#f1592b]   h-[76px]">
            <tr className="">
              <th className="text-start text-[18px] px-4 lg:px-8 uppercase font-lato font-bold text-white ">
                Product Details ( {cartDetails?.length || 0} )
              </th>
              <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">
                Price
              </th>
              <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">
                Quantity
              </th>

              <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">
                shipping
              </th>
              <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">
                subtotal
              </th>
              <th className="text-start  text-[18px] uppercase font-lato font-bold text-white">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {cartDetails?.reverse().map((card, index) => (
              <tr className=" " key={index}>
                <td className="px-2 lg:px-5 py-4">
                  {" "}
                  <div className="flex  gap-4 ">
                    <img
                      className="h-[120px] w-[105px] rounded-lg"
                      src={card?.image}
                      alt=""
                    />

                    <div className="">
                      <h2 className="text-[18px] font-lato font-semibold text-[#3C4242]">
                        {card?.name}
                      </h2>
                      <p className="text-[14px] my-2 text-[#807D7E] font-lato ">
                        Color : {card?.color}
                      </p>
                      <p className="text-[14px] text-[#807D7E] font-lato ">
                        Size : {card?.size}
                      </p>
                    </div>
                  </div>{" "}
                </td>
                <td className="py-4 text-start ">
                  {" "}
                  <div className="">
                    <p className=" text-[18px] font-lato font-semibold text-[#3C4242]">
                      ${card?.price}
                    </p>
                  </div>{" "}
                </td>
                <td className="py-4">
                  {" "}
                  <div className="flex justify-between px-4 h-[36px] w-[100px]  items-center gap-2 bg-[#F6F6F6] rounded-lg">
                    <button
                      onClick={() => handleDecreaseQuantity(card)}
                      className="text-[25px] text-[#3C4242]  font-lato"
                    >
                      -
                    </button>
                    {loading[card?._id] ? <LoadingTwo /> : card?.quantity}
                    <button
                      onClick={() => handleIncreaseQuantity(card)}
                      className="font-lato text-[#3C4242]"
                    >
                      +
                    </button>
                  </div>{" "}
                </td>
                <td className="py-4 text-start px-4">
                  {" "}
                  <p className="text-[18px] font-lato font-semibold text-[#BEBCBD] uppercase">
                    ${shippin}.00
                  </p>{" "}
                </td>
                <td className="py-4 text-start px-4">
                  {" "}
                  <p className="text-[18px] font-lato font-semibold text-[#3C4242]">
                    ${card?.price * card?.quantity?.toFixed(2)}
                  </p>
                </td>
                <td className="py-4 text-start px-4">
                  {" "}
                  <div className="">
                    <button onClick={() => deleteCartItem(card?._id)}>
                      <img src="/deletecon.svg" alt="" />
                    </button>
                  </div>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block gm:hidden">
        <div className="">
          <div className="bg-[#f1592b] px-2 grid grid-cols-4 text-center  items-center gap-2   h-[76px]">
            <div className="">
              <p className="font-lato font-bold text-white">
                Product <br /> Details ( {cartDetails?.length || 0})
              </p>
            </div>
            <div className="">
              <p className="font-lato font-bold text-white">
                PRICE <br />
                QUANTITY{" "}
              </p>
            </div>
            <div className="">
              <p className="font-lato font-bold text-white">SHIPPING</p>
            </div>
            <div className="">
              <p className="font-lato font-bold text-white">Delete</p>
            </div>
          </div>
          <div className="">
            {cartDetails?.map((card, index) => (
              <div
                key={index}
                className="grid grid-cols-4 px-2 my-4  justify-center  items-center gap-2 "
              >
                <div className="">
                  <div className="text-center  gap-4 ">
                    <div className="">
                      <h2 className="text-[12px] my-2 font-lato font-semibold text-[#3C4242]">
                        {card?.name}
                      </h2>

                      <img
                        className="h-[80px] w-[80px] mx-auto rounded-lg"
                        src={card?.image}
                        alt=""
                      />
                    </div>

                    <div className="">
                      <p className="text-[12px] my-2 text-[#807D7E] font-lato ">
                        Color : {card?.color}
                      </p>
                      <p className="text-[12px] text-[#807D7E] font-lato ">
                        Size : {card?.size}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex text-center justify-center w-full ">
                  <div className="">
                    <p className=" text-[10px] font-lato font-semibold text-[#3C4242]">
                      ${card?.price} / per piss
                    </p>
                    <p className="text-[15px] my-2 font-lato  font-semibold text-[#3C4242]">
                      {" "}
                      <span className="text-[9px] inline"> SubTotal :</span> $
                      {card?.price * card?.quantity.toFixed(2)}{" "}
                    </p>
                    <div className="flex mx-auto justify-between px-4 h-[36px] w-[80px]  items-center gap-2 bg-[#F6F6F6] rounded-lg">
                      <button
                        onClick={() => handleDecreaseQuantity(card?._id)}
                        className="text-[25px] text-[#3C4242]  font-lato"
                      >
                        -
                      </button>
                      {loading[card?._id] ? <LoadingTwo /> : card?.quantity}
                      <button
                        onClick={() => handleIncreaseQuantity(card)}
                        className="font-lato text-[#3C4242]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <p className="text-center text-[18px] font-lato font-semibold text-[#BEBCBD] uppercase">
                  $5.00
                </p>

                {/* 4 */}
                <div className="flex justify-center">
                  <button onClick={() => deleteCartItem(card?._id)}>
                    <img src="/deletecon.svg" alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-10 flex flex-col-reverse justify-center sm:flex-row sm:justify-between bg-[#F6F6F6] sm:px-16">
        <div className="my-4 sm:my-0"></div>
        <div className="flex justify-center">
          <div className="mx-auto">
            <div className="px-4">
              <p className="text-[22px] text-[#3C4242] tracking-[0.44px] font-lato">
                {" "}
                Sub Total :{" "}
                <span className="mx-4">${subtotalPrice?.toFixed(2)}</span>
              </p>
              <p className="text-[22px] my-4 text-[#3C4242] tracking-[0.44px] font-lato">
                {" "}
                Shipping : <span className="mx-4">${shippin}.00</span>
              </p>
              <p className="text-[22px] text-[#3C4242] tracking-[0.44px] font-bold font-lato">
                {" "}
                Grand Total :{" "}
                <span className="mx-4">${grandTotal?.toFixed(2)}</span>
              </p>
            </div>
            <img className="my-4" src="/grantotalLine.png" alt="" />
            <div className="flex py-2 justify-center">
              <Link href={"/OrderSummery"}>
                <button
                  className=" rounded-lg py-[17px] px-[30px] text-white font-lato 
                     bg-[#f1592b] duration-500 ease-out  "
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
