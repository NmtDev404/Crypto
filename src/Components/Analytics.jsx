import React from 'react'
import Image from '../assets/data-img.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white '>
  <div className='max-w-[1240px] m-auto grid md:grid-cols-2 content-center items-center'>
  

    <img src={Image} className='p-12'/>
  
   
   <div className='flex mx-auto flex-col p-4'>
    <p className='text-[#00df9a] font-bold text-2xl '>DATA ANALYTICS DASHBOARD</p>
    <h1 className='text-3xl font-bold pt-3 md:4xl sm:3xl ' >Manage Data Analytics with Ease</h1>
    <p className='text-xl  pt-2 text-justify pr-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <div>  <button className='text-[#00df9a]  font-medium text-lg bg-[#000] px-16 py-2 mt-10 lg:ml-24 md:ml-20 sm:ml-52 rounded'>Get Started</button>  </div>
            
   </div>
   
   </div>
    
    </div>
  )
}

export default Analytics