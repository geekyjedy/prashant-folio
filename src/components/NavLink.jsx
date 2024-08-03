import React from 'react'
import Link from 'next/link'

const NavLink = ({href,title,isActive,onClick}) => {
  return (
        <Link onClick={()=>onClick(name)} className={`border border-white py-2 px-3 rounded-full hover:bg-gray-400 hover:border-gray-400 ${isActive?'bg-blue-500':''} transition-all duration-200`} href={href}>{title}</Link>
  )
}

export default NavLink