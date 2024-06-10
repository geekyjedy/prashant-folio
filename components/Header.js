'use client'
import Link from 'next/link';
import React from 'react';


const Header = () => {
    return (
        <>

            <header class="text-gray-600 sticky top-0">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link href={'/'}>
                            <span class="ml-3 text-xl">Logo</span>
                        </Link>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'my-work'}>
                            <button class="mr-5 hover:text-gray-900 border border-[#323232] rounded-xl px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white hover:border-gray-400">My work</button>
                        </Link>
                        <Link href={'about-me'}>
                            <button class="mr-5 hover:text-gray-900 border-[#323232] border rounded-xl px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white hover:border-gray-400">About me</button>
                        </Link>
                        <Link href={'connect'}>
                            <button class="mr-5 hover:text-gray-900 border-[#323232] border rounded-xl px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white hover:border-gray-400">Connect</button>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header