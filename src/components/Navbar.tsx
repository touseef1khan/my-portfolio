import { Menu } from 'lucide-react';
import React from 'react'


const Navbar = () => {
  return (
    <div className='container pt-8 w-screen'>
        <div className='flex mx-2 justify-between items-center'>
            <div className='text-xl font-medium'>Mohammed Touseef</div>
            <div className='gap-10 lg:gap-16 hidden md:flex'>
                <span className='menulink'><a href='#hero'>Home</a></span>
                <span className='menulink'><a href='#about'>About</a></span>
                <span className='menulink'><a href='#skills'>Skills</a></span>
                <span className='menulink'><a href='#contact'>Contact</a></span>
            </div>
           <span> <Menu  className="md:hidden block" size={30} /></span>
        </div>
      
    </div>
  )
}

export default Navbar