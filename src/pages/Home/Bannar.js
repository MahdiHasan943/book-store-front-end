import React from 'react'
import Buttontwo from '../../component/shared/Button/Buttontwo'
import './Bannar.css'


const Bannar = () => {
  return (
    <>
      
      
      <div className="hero   h-[500px]" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0319/5758/1961/files/image_1.png?v=1613790095")` }}>
  <div className=""></div>
  <div className="hero-content mt-[-50px] text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-1xl uppercase text-[gray] font-bold">Special Trend For old Book</h1>
      <p className="mb-5 text-4xl  uppercase text-black">Online Book Store</p>
            <Buttontwo>ORDER NOW</Buttontwo>
          </div>
  </div>
</div>


      </>
  )
}

export default Bannar