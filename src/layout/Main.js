import React from 'react'
import Header from '../component/shared/Header/Header'
import Headere from '../component/shared/Header/Header'


import Footer from '../component/shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
import GoToTop from '../component/shared/goto-top/GotoTop'
import TopBtn from '../component/shared/goto-top/TopBtn'

const Main = () => {
  return (
      <div>
          
      <Header></Header>
      <div className=" mx-auto ">
      <Outlet></Outlet>
      </div>
          
      <Footer></Footer>

      <GoToTop/>
      <TopBtn/>
    </div>
  )
}

export default Main