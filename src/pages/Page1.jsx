import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'

const Page1 = () => {
  return (
    <div id='home' className='w-full h-fit '>
        <Navbar/>
        <Introduction/>
    </div>
  )
}

export default Page1