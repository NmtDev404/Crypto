import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black w-full '>
      <div className='max-w-[1240px] min-w-{375px}:text-xl  m-auto grid md:grid-cols-2  mt-24 p-3  font- text-white'>
      <div className='mb-7'>
           <h1 className='text-3xl    font-bold'>Want tips & triks to optimize your flow?</h1>
         <p className='pt-2 '>Sign up to our newsletter and stay up to date.</p>
      </div>
      
        <div>
         <div className=' flex flex-col md:flex-row lg:flex-row ml-16 items-center  ' >
          <input type="text" placeholder="Enter your email" className='text-left text-black p-3 py-2 rounded w-10/12  '/>
          <button className='text-black font-medium  text-center  bg-[#00df9a] px-7 py-2 m-3 w-44 rounded '>Notify me</button>
         </div>
         <p className='mt-4 text-center '>We care about the protection of your data. Read our <span className='text-[#00df9a] underline'><a href='/'>Privacy Policy</a></span>.</p>
  </div>     
      </div>
    </div>
  )
}

export default Newsletter  