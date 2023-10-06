import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const { id } = useParams()
  
  console.log(id);

  const [pDetails, setPDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/stock/${id}`)
      .then(res => res.json())
    .then(data=>setPDetails(data.data))
  },[])
console.log(pDetails);
  return (
      <div>{id}</div>
  )
}

export default ProductsDetails