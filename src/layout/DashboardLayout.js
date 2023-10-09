import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from '../component/shared/Header/Header'
import { AuthContext } from '../Context/UserContext'
import useTitle from '../Router/hook/useTitle'
import useAdmin from '../Router/useAdmin'
import useBuyer from '../Router/useBuyer'
import useSeller from '../Router/useSeller'
import Products from '../pages/Home/Products'
import ProductCategory from '../pages/Home/ProductCategory'
import GoToTop from '../component/shared/goto-top/GotoTop'
import TopBtn from '../component/shared/goto-top/TopBtn'


const DashboardLayout = () => {
  useTitle('dashboard page')

    const {user}=useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)

  const location = useLocation();


  return (
      <div>
          <div>
  <Header></Header>
      <div className="drawer  drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
            <Outlet></Outlet>
            {
             location.pathname === "/dashboard" ? <div className=" mx-auto text-center py-4">
              
             <h1 className=" text-[#064532] font-Arimo text-[40px]  sm:text-[60px]  font-bold">Welcome To <span className='text-[#f1592b]'>bookstore</span> </h1>
               <h2 className='  text-[#064532] font-Arimo text-[40px] mt-[-4px] sm:text-[60px]  font-bold'>Dashboard</h2>
               
               <img className='w-[90%] mx-auto h-[500px]' src="/images.jpeg" alt="" />
               {/* <ProductCategory/> */}
             </div>:''
            }
           
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2 " className="drawer-overlay"></label> 
    <ul className=" outline-none p-4 w-80   bg-[#f1f1f1]  text-base-content">


  
              
    {
                isSeller || isAdmin  ?<>
                  <li className=' border-[2px] my-2 rounded-md'><Link to={'addproducts'}><a className='text-[#f1592b]'>Add Products</a></Link></li>
                  <li className=' border-[2px] my-2 rounded-md'><Link to={'myproducts'}><a className='text-[#f1592b]'>My Products</a></Link></li>


                  

                  
          
</>:''
              }
              { 
                isBuyer || !isSeller  ?  <>
                 <Link to={'myorders'}> <li className='py-3 px-4 border-[1.5px] border-[#f1592b] my-2 outline-none rounded-md'><a className='bg-[none] font-popping font-semibold text-[#f1592b]'>My orders</a></li></Link> 
                

                  
             
</>:''
              }




            {
                isAdmin &&  <>
                
      
            
                  <Link to={'allbuyer'}> <li className='py-3 px-4 border-[1.5px] border-black my-2 outline-none rounded-md'><a className='bg-[none] text-[#f1592b]'>All buyer</a></li></Link> 

                  <Link to={'allseller'}> <li className='py-3 px-4 border-[1.5px] border-black my-2 outline-none rounded-md'><a className='bg-[none] text-[#f1592b]'>All seller</a></li></Link> 


</>
            }
    </ul>
  
  </div>
</div>    
      
    </div>

    <GoToTop/>
      <TopBtn/>
    </div>
    
  )
}

export default DashboardLayout