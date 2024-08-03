import React from 'react'
import Image from 'next/image'

const WorkCard = ({path,projectName,category}) => {
  return (
    <div className='w-full sm:w-[22%] h-44 sm:h-36 rounded-xl overflow-hidden relative group inline-block sm:m-3 my-3 transition-all duration-1000'>
        <Image src={path} height={1000} width={1000} className='w-full h-full' alt='Project '/>
        <div className='absolute bottom-2 left-2 hidden group-hover:block'>
            <h2 className='font-bold'>{projectName}</h2>
            <span>{category}</span>
        </div>
    </div>
  )
}

export default WorkCard