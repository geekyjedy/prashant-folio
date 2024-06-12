'use client'
import React from 'react';

const Work = () => {
    return (
        <>
            <header class="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center bg-[#D9D9D9] px-10 py-2 text-slate-600 rounded-2xl min-w-36">
                        <button className="mr-5 hover:text-gray-900 min-w-24 font-extrabold">All</button>
                        <span className="text-[#ACACAC]">|</span> 
                        <button className="mr-5 hover:text-gray-900 min-w-24 font-extrabold">UI/UX</button>
                        <span className="text-[#ACACAC]">|</span>
                        <button className="mr-5 hover:text-gray-900 min-w-24 font-extrabold">Graphics</button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Work;
