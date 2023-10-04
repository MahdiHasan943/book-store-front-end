import React from 'react'
import Header from '../component/shared/Header/Header'
import Headere from '../component/shared/Header/Header'


import Footer from '../component/shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
      <div>
          
      <Header></Header>
      <div className="max-w-screen-xl mx-auto ">
      <Outlet></Outlet>
      </div>
          
          <Footer></Footer>

    </div>
  )
}

export default Main