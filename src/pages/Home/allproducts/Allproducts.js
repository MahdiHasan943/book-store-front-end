import React, { useEffect, useState } from "react";
import AllproductsCard from "./AllproductsCard";

const Allproducts = () => {
  const [orders, setOrders] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);

  return (
    <div>
      {orders.map((order) => (
        <AllproductsCard order={order} key={order._id}></AllproductsCard>
      ))}
    </div>
  );
};

export default Allproducts;
