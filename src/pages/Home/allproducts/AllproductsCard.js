import React from 'react'
import MyProducts from '../../dashboard/MyProducts'

const AllproductsCard = ({ order }) => {
    


  return (
      <div>
          
          <MyProducts order={order}></MyProducts>
    </div>
  )
}

export default AllproductsCard