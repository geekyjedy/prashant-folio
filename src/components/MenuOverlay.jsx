import React from 'react'
import Link from 'next/link'

const MenuOverlay = ({links,onClick}) => {
  return (
    <Link onClick={onClick} className='border border-white py-2 px-3 rounded-full hover:bg-gray-400 hover:border-gray-400' href={links.href}>{links.title}</Link>
  )
}

export default MenuOverlay