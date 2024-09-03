"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Logo } from './icons';
import { navigationData } from '@/data';
import { ThemeSwitch } from './theme-switch';
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";



const Navbar = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    return (
        <div className='w-full h-auto items-center flex bg-gray-100 dark:bg-black'>
            <div className='w-full md:max-w-6xl mx-auto h-auto p-4 flex justify-between items-center bg-gray-100 dark:bg-black'>
       {/* Logo With Name*/}
        <Link href="/" className='flex gap-x-0.5 whitespace-now'><Logo  className="-mt-0.5"/><p className="tracking-wide text-black dark:text-white font-bold text-lg md:text-xl">CloutCraft</p></Link>
       {/* NavigationData Mapping*/}
        <div className="hidden md:flex gap-x-6 pr-8">
{
navigationData.map((item,index)=> (
    <Link key={index} className='text-gray-800 font-medium  hover:text-black text-sm dark:text-gray-100 dark:hover:text-white' href={item.href}>{item.pathName}</Link>
))
}
<ThemeSwitch />
        </div>
        {/*HamBurger Menu For Mobile Screen*/}
        <div className="flex gap-x-4 md:hidden relative">
        <ThemeSwitch />
        {isModalOpen ? 
        (<RxCross1 size={24} onClick={()=>setIsModalOpen(false)} className='text-black cursor-pointer dark:text-white' />) 
        :
        (<RxHamburgerMenu size={24} onClick={()=>setIsModalOpen(true)} className='text-black cursor-pointer dark:text-white'/>)}
        

   {isModalOpen && (<div className='absolute flex flex-col items-center justify-center py-4 bg-white dark:bg-black border border-gray-400 dark:border-white gap-y-2 mt-8 right-4 w-32 rounded-lg'>
    {
        navigationData.map((item,index)=> (
        <Link key={index} href={item.href} className='text-gray-800 font-medium  hover:text-black text-sm dark:text-gray-100 dark:hover:text-white'>{item.pathName}</Link>
        ))
    }
   </div>)
}    

        <div>
        
        </div>
        </div>
        </div></div>
    );
}

export default Navbar;
