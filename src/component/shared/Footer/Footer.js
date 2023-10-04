import React from 'react'

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="px-4 sm:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto FLEX">
        <div className="">
          <h3 className='text-[#064532] font-semibold text-[18px] py-4  font-popping'>NEED HELP?</h3>
          <p className='text-[16px] text-[#767a79] font-popping '>          Help Center
</p>
          <p className='text-[16px] text-[#767a79] font-popping  py-2'>Shipping FAQs
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>Pick up in Store
</p>
          <p className='text-[16px] text-[#767a79] font-popping py-2'>Order Status
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>Product Recalls
</p>
          <p className='text-[16px] text-[#767a79] font-popping py-2'>Corrections & Updates
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>Gift Cards
</p>


        </div>
        <div className="">
        <h3 className='font-semibold text-[#064532] text-[18px] py-4 font-popping'> ABOUT US
 </h3>
 <p className='text-[16px] text-[#767a79] font-popping '>        Contact Us
</p>
          <p className='text-[16px] text-[#767a79] font-popping  py-2'>Track Your Order
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>Returns Policy
</p>
          <p className='text-[16px] text-[#767a79] font-popping py-2'>Delivery Information
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>Loyalty Program
</p>
         
        </div>
        <div className="">
        <h3 className='text-[#064532] text-[18px] font-semibold font-popping py-4'> CATEGORIES
</h3>
<p className='text-[16px] text-[#767a79] font-popping '>        Coupons
</p>
          <p className='text-[16px] text-[#767a79] font-popping  py-2'>RX Prescription
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>Scholarship Program
</p>
          <p className='text-[16px] text-[#767a79] font-popping py-2'>Brand Directory
</p>
          <p className='text-[16px] text-[#767a79] font-popping '>POrder Form
</p>
          <p className='text-[16px] text-[#767a79] font-popping py-2'>CBlog
</p>
        </div>
        <div className="">
        <h3 className='text-[#064532] text-[18px]  font-semibold py-4 font-popping'>Email Us</h3>
        <p className='text-[16px] text-[#767a79] font-popping py-2'>Contact us for early booking
          </p>
          <div className="flex  items-center">
            <input placeholder='your email address' className='placeholder:text-[#767a79] px-4  border-[1px] border-[#e6e6e] py-4 bg-[#f0f0f0]' type="text" name="" id="" />
            <div className="py-[14px] bg-[#064532] px-6 hover:bg-[#f1592b]">
            <img className=' w-[30px]  h-[30px]' src="/gmail-svgrepo-com.svg" alt="" />

            </div>
            </div>
        </div>

      </div>
      <div className="border-[1.5px] px-4 sm:px-16 py-4   sm:flex items-center gap-4  sm:justify-between   border-[#e6e6e] border-l-0 border-r-0 ">
        <div className="flex justify-center sm:justify-start gap-4">
          <img className='w-[40px] h-[40px] border-[1px] p-2 border-[#e6e6e] rounded-full' src="/twitter.png" alt="" />
          <img className='w-[40px] h-[40px] border-[1px] p-2 border-[#e6e6e] rounded-full' src="/facebook.png" alt="" />
          <img className='w-[40px] h-[40px] border-[1px] p-2 border-[#e6e6e] rounded-full' src="/instagram.png" alt="" />
          <img className='w-[40px] h-[40px] border-[1px] p-2 border-[#e6e6e] rounded-full' src="/whatsapp.png" alt="" />

        </div>
        <img className='mx-auto sm:mx-[1px]' src="/payment.png" alt="" />
        
         </div>
      <div className="px-4 sm:px-16 bg-[#fafafa]  py-6 shadow-xl text-center lg:text-start lg:flex justify-between">
        <div className="justify-center lg:justify-start flex py-4 lg:py-0 gap-4">
          <p className='text-[#767a79] font-popping text-[18px] '>Terms of Use</p>
          <p  className='text-[#767a79] font-popping text-[18px] '>Copyright & Trademark
</p>
          <p  className='text-[#767a79] font-popping text-[18px] '>Terms of Use</p>
        </div>
        <p  className='text-[#767a79] font-popping text-[18px] '>© 2021 Book Store. All Rights Reserved</p>
      </div>
     </div>
  )
}

export default Footer