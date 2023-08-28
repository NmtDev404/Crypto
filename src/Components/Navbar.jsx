import { useState } from "react"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
const Navbar = () => {
const [nav, setNav] = useState(true);

const handleNav = () =>{
  setNav(!nav);
}


  return (
  

    <div className='flex justify-between items-center h-20 max-w-[1280px] mx-auto px-4 text-white text-2xl' >

      
   <h1 className='w-full text-[#00df9a] text-3xl font-bold m-4'>React.</h1>
    

    
      <ul className='hidden md:flex'>
        <li className='p-4 w-full text-lg font-bold text-[#00df9a]'><a href="#home">Home</a></li>
        <li className='p-4 w-full text-lg font-bold text-[#00df9a]'><a href="#about">About</a></li>
        <li className='p-4 w-full text-lg font-bold text-[#00df9a]'><a href="#contact">Services</a></li>
        <li className='p-4 w-full text-lg font-bold text-[#00df9a]'><a href="#contact">Contact</a></li>
      </ul>
    
    
  
      <div onClick={handleNav}  className=' block md:hidden'>
          {!nav? <AiOutlineClose/>:<AiOutlineMenu/>}
      </div>
    

<div className={!nav?'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-300': 'fixed left-[-100%] ease-in-out duration-300'}>
 <h1 className='w-full text-[#00df9a] text-3xl font-bold m-4'>React.</h1>


<ul className='p-4 uppercase'>
        <li className='p-4  text-[#00df9a] border-b border-gray-600'><a href="#home">Home</a></li>
        <li className='p-4  text-[#00df9a] border-b border-gray-600'><a href="#about">About</a></li>
        <li className='p-4  text-[#00df9a] border-b border-gray-600'><a href="#contact">Services</a></li>
        <li className='p-4  text-[#00df9a] border-b border-gray-600'><a href="#contact">Contact</a></li>
      </ul>
</div>

    </div>
    
    
  )
}

export default Navbar