import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation,  } from 'react-router-dom'
import { FaCentos } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { AuthContext } from '../../../Context/UserContext';
import Button3 from '../Button/Button3';
const Header = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then()
        .catch();
}




  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  const menu = <React.Fragment>
    <div className="flex items-center">
    <Link to={'/'}><img src="/book.png" alt="" /></Link>
      <Link to={'/'}><p className='text-[40px] text-[#064532] font-Arimo font-bold'>BookStore</p></Link>
    </div>
    <li>
      
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#f1592b]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-gray-400  transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Home
              </NavLink>
            </li>       
            <li>
              <NavLink
                to='/blog'
                aria-label='Home'
                title='blog'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#f1592b]    transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Blog
              </NavLink>
    </li>
    {
              user?.uid ?
        <> 
            
            <li>
            <NavLink
             to="/dashboard"
              aria-label='Home'
              title='blog'
              className={({ isActive }) =>
                isActive
                ? 'font-bold tracking-wide text-[#f1592b]    transition-colors duration-200 hover:text-deep-purple-accent-400'
                : 'font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400'
              }
            >
              Dashboard
            </NavLink>
          </li>
          {
                 location.pathname === "/dashboard" || location.pathname === "/dashboard/myorders" || location.pathname ==='/dashboard/addproducts' || location.pathname === '/dashboard/mybuyers'||location.pathname==='/dashboard/myproducts' ||location.pathname==='/dashboard/allseller'||location.pathname=== '/dashboard/allbuyer'||location.pathname==='/dashboard/payment/:id'?
             "":    <div className="hidden w-[600px] sm:block">
             <input  type="text" placeholder="Search book" className="input search-book  border-2 border-white bg-[#efefef]  w-full max-w-xs" />
             </div>
                }
      </>               :
        <>   
          
</>

}
  </React.Fragment>
  
  const login = <React.Fragment>
    {
              user?.uid ?
        <>          
<div className='text-white font-semibold text-[14px] font-lato  mx-2 bg-[#f1592b]' onClick={handleLogOut}><button className='text-white font-semibold text-[14px] font-lato py-2 px-6 bg-[#f1592b]'>Log Out</button></div>
<img className='w-[30px] h-[30px] rounded-full' title={user?.displayName}  src={user?.photoURL ? user.photoURL:<FaCentos></FaCentos>} alt="" />
        
      </>                 :
                  <>
          <div className="'text-white font-semibold text-[14px] font-lato py-1 px-2 mx-2 bg-[#f1592b]">
          <Link to='/login'><button className='text-white font-semibold text-[14px] font-lato py-2 px-6 bg-[#f1592b]'>Sign In</button>
</Link>                     
</div></> 
}
  </React.Fragment>
  return (
    <>
      
      <div className="navbar bg-base-100 flex justify-between sm:px-20  w-full  gap-4 px-4 ">
        <div className=" flex  justify-center">
          <p className='px-3 text-2xl font-bold text-[#f1592b]'><FaPhoneVolume></FaPhoneVolume></p>
          <div className='flex'><span className='capitalize hidden  ml-2 sm:inline'>Call Us Now</span> <br /><span className='ml-[10px]'>01843412068</span></div>
        </div>


      

        <div className="flex justify-center">
          {login}
        </div>


  
</div>

    <div className='  py-2 mx-auto sm:px-16 px-4 '>
      <div className=' '>
        <div className='relative flex items-center justify-between px-4'>
         
            <div className='lg:hidden w-full flex justify-between items-center'>
            <div className="flex items-center">
            <Link to={'/'}><img src="/book.png" alt="" /></Link>
                <Link to={'/'}>       <p className='text-[40px] text-[#064532] font-Arimo font-bold'>BookStore</p>
</Link>
              </div>
              {
                 location.pathname === "/dashboard" || location.pathname === "/dashboard/myorders" || location.pathname ==='/dashboard/addproducts' || location.pathname === '/dashboard/mybuyers'||location.pathname==='/dashboard/myproducts' ||location.pathname==='/dashboard/allseller'||location.pathname=== '/dashboard/allbuyer'||location.pathname==='/dashboard/payment/:id'?
             "":    <div className="hidden sm:block">
             <input  type="text" placeholder="Search book" className="input search-book  border-2 border-white bg-[#efefef]  w-full max-w-xs" />
             </div>
                }
              {
                 location.pathname === "/dashboard" || location.pathname === "/dashboard/myorders" || location.pathname ==='/dashboard/addproducts' || location.pathname === '/dashboard/mybuyers'||location.pathname==='/dashboard/myproducts' ||location.pathname==='/dashboard/allseller'||location.pathname=== '/dashboard/allbuyer'||location.pathname==='/dashboard/payment/:id'?
          "":
            <div
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-[#f1592b]' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </div>}
            {isMenuOpen && (
              <div className='absolute  top-0 left-0 w-full h-[80vh] z-40'>
                <div className='p-5 bg-[#f1592b] border rounded h-full shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                      <div>
                        <div className="   text center ">
         
                        </div>
        
                      
            
      
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mb-[-100px] -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-white' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                  <ul className='spacey-4'>
           
                      

                      
        {menu}

       
            
          
          </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          <ul className=' items-center hidden space-x-8 lg:flex '>
           
            
            {menu}
            </ul>
         
           
            {

              location.pathname === "/dashboard" || location.pathname === "/dashboard/myorders" || location.pathname ==='/dashboard/addproducts' || location.pathname === '/dashboard/mybuyers'||location.pathname==='/dashboard/myproducts' ||location.pathname==='/dashboard/allseller'||location.pathname=== '/dashboard/allbuyer'||location.pathname==='/dashboard/payment/:id'?
                <label htmlFor="my-drawer-2" tabIndex={1} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-[#f1592b] w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>:''

            }
         
         
        </div>
      </div>
      </div>
      </>
  )
}

export default Header