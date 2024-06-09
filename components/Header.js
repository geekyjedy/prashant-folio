'use client'
import Link from 'next/link';
import React from 'react';


const NAVITEMS = [{
    path: 'my-work',
    title: 'My work'
}, {
    path: 'about-me',
    title: 'About Me'
}, {
    path: 'connect',
    title: 'Connect'
}]

const Header = () => {
    return (
        <>

            <nav className='flex justify-between font-Raleway'>
                <ul>
                    <Link href={'/'}>
                        <label>Logo</label>
                    </Link>
                </ul>
                <div>
                    {
                        NAVITEMS.map((item) => (
                            <Link href={item.path}>
                                <button className='border border-black rounded-xl px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white hover:border-gray-400'>{item.title}</button>
                            </Link>
                        ))
                    }

                </div>

            </nav>
        </>
    )
}

export default Header