import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='w-full h-screen'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='items-center justify-center flex flex-col lg:flex-row text-5xl sm:text-8xl gap-7 sm:gap-2 transition-all'>
                <Image src='/images/01 Waving hand.png' height={1000} width={1000} className='w-32 sm:w-44 scale-x-[-1] -rotate-[35deg] mt-10 '/>
                <span className='z-10'>Hi I'm</span>
                <span className='font-bold'>Prashant</span>
            </div>
            <span className='mt-5 sm:-mt-10 sm:text-4xl xl sm:ml-16 transition-all'>UIUX/Graphic Designer</span>
        </div>
    </section>
  )
}

export default HeroSection