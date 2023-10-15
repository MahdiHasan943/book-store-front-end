import React from 'react'
import useTitle from '../../Router/hook/useTitle'
import Bannar from './Bannar'
import ProductCategory from './products/ProductCategory'
import Special from './special/Special'

const Home = () => {

  useTitle(' Home page')
  return (
    <>
    <div>

      <Bannar></Bannar>


      <div className="px-4 sm:px-16 mx-auto">
      <ProductCategory></ProductCategory>



      <Special></Special>
  </div>

    </div>
</>
  )
}

export default Home