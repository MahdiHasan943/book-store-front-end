import React from 'react'
import useTitle from '../../Router/hook/useTitle'
import Advertise from './advertise/Advertise'
import Allproducts from './allproducts/Allproducts'
import Bannar from './Bannar'
import ProductCategory from './ProductCategory'
import Special from './Special'

import SubBannar from './SubBannar'

const Home = () => {

  useTitle(' Home page')
  return (
    <div>

      <Bannar></Bannar>
      <SubBannar></SubBannar>
      <ProductCategory></ProductCategory>



      <Special></Special>

      <Advertise></Advertise>


    </div>
  )
}

export default Home