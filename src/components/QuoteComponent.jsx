import React from 'react'
import WhiteBlock from './WhiteBlock'
import Image from 'next/image'
const QuoteComponent = () => {
  return (
    <WhiteBlock 
    elements={
      <div>
      <h1 className='text-white text-xl md:text-3xl text-center opacity-100'>"Everything is <b><i>designed</i></b>. Few things are <b><i>designed well.</i></b> "</h1>
      <Image src='/images/02 Write.png' height={1000} width={1000} className='w-14 sm:w-40 absolute -top-1/3 md:-top-2/3 right-1/2 translate-x-1/2' />
      </div>
    }
    css='my-20 p-5 md:px-20 md:py-14 relative'
    />
  )
}

export default QuoteComponent