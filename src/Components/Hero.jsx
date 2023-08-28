import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px]  w- full h-screen flex flex-col items-center justify-center mx-auto  '>
        <p className='text-[#00df9a] p-2 font-bold text-3xl text-center'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold text-center'> Grow with data</h1>  
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl md:py-3 pl-16'> Fast, Flexible Financing for <Typed
                strings={['BTC','BNB','ETH']}
                     typeSpeed={120}
                    backSpeed={130}
                    loop/>
                    
                    
                   
          </p>
              <p className='md:text-2xl text-xl font-medium text-gray-400 text-center' >Monitor your data analytics to increase revenue for BTC, ETH & SASS platforms</p>
                    
         
              <div className='flex items-center justify-center w-full'>
                <button className='text-black font-medium text-lg text-center  bg-[#00df9a] px-16 py-2 m-5  rounded '>Get Started</button>
              </div>
                
        </div>

      
      </div>
    </div>
  )
}

export default Hero