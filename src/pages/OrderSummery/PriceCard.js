import React from 'react'

const PriceCard = ({ price }) => {
  return (
    <div className="" >
                              
    <div className="my-4 grid grid-cols-4 items-center gap-4 ">
        <img className='w-[63px] h-[63px] rounded-md' src={price?.image} alt="" />
        <div className="col-span-2">
            <p>{price?.name}  X {price?.quantity}</p>
            <p>color : {price?.color}</p>
        </div>
        <p>{price?.price}</p>
    </div>
          <img className='my-4' src="/summerLine.png" alt="" />
          
      </div>
      
  )
}

export default PriceCard