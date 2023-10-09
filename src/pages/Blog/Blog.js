import React from 'react'
import { Link } from 'react-router-dom'
import Button3 from '../../component/shared/Button/Button3'
import useTitle from '../../Router/hook/useTitle'

const Blog = () => {
  useTitle(' Blog page')

  return (
    <div className='my-6 px-4 sm:px-16 mx-auto'>
      <div className="w-full overflow-hidden">
        <img className='w-full sm:w-[600px] lg:w-[700px] xl:w-[900px] mx-auto ' src="/blogHero.png" alt="" />
      </div>

     

    </div>
  )
}

export default Blog