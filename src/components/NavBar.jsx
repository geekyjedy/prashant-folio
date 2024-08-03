'use client';
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';
import Link from 'next/link';

const navLinks=[
    {
        title:'My work',
        href:'#work',
        id:'work'
    },
    {
        title:'About Me',
        href:'#about',
        id:'about'
    },
    {
        title:'Connect',
        href:'#connect',
        id:'connect'
    }
]
const navLinkStyle = 'border border-white py-2 px-3 rounded-full hover:bg-gray-400 hover:border-gray-400';
const NavBar = () => {
    const [navBarOpen,changeNavBar] = useState(false);
    const [tabSelected,selectTab] = useState('');
    const [visibility,changeVisibility] = useState('-translate-y-full top-0 opacity-0');    

  return (
    <nav className='fixed w-[90%] sm:w-full z-10'>
        <div className='flex flex-row justify-between items-center py-7 md:px-14'>
            <div>
                <h1 className='text-3xl font-extrabold'><Link onClick={()=>selectTab('')} href='/'>Logo</Link></h1>
            </div>
            <div className='block sm:hidden z-10 absolute top-8 right-2'>
                {
                    !navBarOpen?(
                        <button onClick={()=>{
                            changeNavBar(true)
                            changeVisibility('translate-y-0 top-5 opacity-100')
                        }}><Bars3Icon className='w-5 h-5' /></button>

                    ):(<button onClick={()=>{
                        changeNavBar(false)
                        changeVisibility('-translate-y-full top-0 opacity-0')
                        }} className='text-black bg-white rounded-full'><XMarkIcon className='w-5 h-5' /></button>
                )
                }
            </div>
            <div className='menu hidden sm:block'>
                <ul className='flex flex-row gap-5'>
                    {
                        navLinks.map((link,index)=>{
                            return <li key={index} className={`text-lg font-extralight`}><NavLink onClick={()=>selectTab(link.id)} href={link.href} title={link.title} isActive={tabSelected === link.id}/></li>
                        })
                    }
                </ul>
            </div>
        </div>
            <div className={`bg-black border border-white mx-auto py-10 rounded-3xl absolute w-full ${visibility} transition-all duration-200 ease-in-out`}>
                <ul className='flex flex-col items-center gap-10'>
                    {
                        navLinks.map((link,index)=>{
                            return <li className={`text-sm  w-fit`} key={index}><MenuOverlay onClick={()=>{
                                changeNavBar(false)
                        changeVisibility('-translate-y-full top-0 opacity-0')
                            }} links={link} /></li>
                        })
                    }
                </ul>
            </div>
    </nav>
  )
}

export default NavBar