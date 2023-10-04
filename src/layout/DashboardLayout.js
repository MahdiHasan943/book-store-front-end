import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../component/shared/Header/Header'
import { AuthContext } from '../Context/UserContext'
import useTitle from '../Router/hook/useTitle'
import useAdmin from '../Router/useAdmin'
import useBuyer from '../Router/useBuyer'
import useSeller from '../Router/useSeller'


const DashboardLayout = () => {
  useTitle('dashboard page')

    const {user}=useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)


  return (
      <div>
          <div>
  <Header></Header>
      <div className="drawer  drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
          <Outlet></Outlet>
          
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2 " className="drawer-overlay"></label> 
    <ul className="menu  p-4 w-80   bg-[#ff4157]  text-base-content">


  
              
    {
                isSeller || isAdmin  ?<>
                  <li className='border border-[2px] my-2 rounded-md'><Link to={'addproducts'}><a className='text-white'>Add Products</a></Link></li>
                  <li className='border border-[2px] my-2 rounded-md'><Link to={'myproducts'}><a className='text-white'>My Products</a></Link></li>


                  

                  
          
</>:''
              }
              { 
                isBuyer || !isSeller  ?  <>
                   <li className='border border-[2px] my-2 rounded-md'><Link to={'myorders'}><a className='text-white'>My orders</a></Link></li>               

                  
             
</>:''
              }




            {
                isAdmin &&  <>
                
      
                  <li className='border border-[2px] my-2 rounded-md'><Link to={'allseller'}><a className='text-white'>All seller</a></Link></li>               
                  
                  <li className='border border-[2px] my-2 rounded-md'><Link to={'allbuyer'}><a className='text-white'>All buyer</a></Link></li>               


</>
            }
    </ul>
  
  </div>
</div>    
      
    </div>


    </div>
  )
}

export default DashboardLayout