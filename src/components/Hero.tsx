import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
const Hero = () => {
  return (
    <div id="hero" className='h-screen '
    >
      <Navbar />
      <div className='container  flex  mt-10 gap-x-10 mx-4 h-[calc(100vh-60px)]'>
        <div className='flex justify-center items-center'>
      <Image
          src="/portfolio.jpeg"
          alt="person-image"
          width={384}
          height={384}
          className="object-cover rounded-full w-96 h-96 "
        />
     </div>
        <div className='text-[80px] sim:text-[100px] font-bold leading-tight flex justify-center items-center text-center'>
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p data-aos="zoom-in-up">Mohammed Touseef</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero