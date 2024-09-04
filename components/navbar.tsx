"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Logo } from './icons';
import { navigationData } from '@/data';
import { ThemeSwitch } from './theme-switch';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/dist/types';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

const Navbar = ({ user }: { user: KindeUser<any> | null }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav className='w-full bg-gray-100 dark:bg-black'>
            <div className='w-full md:max-w-6xl mx-auto p-4 flex justify-between items-center'>
                <Link href="/" className='flex gap-x-0.5 whitespace-nowrap'>
                    <Logo className="-mt-0.5" />
                    <p className="tracking-wide text-black dark:text-white font-bold text-lg md:text-xl">CloutCraft</p>
                </Link>

                <div className="hidden md:flex gap-x-6 items-center">
                    {navigationData.map((item, index) => (
                        <Link key={index} className='text-gray-800 font-medium hover:text-black text-sm dark:text-gray-100 dark:hover:text-white' href={item.href}>{item.pathName}</Link>
                    ))}
                    {user ? (
                        <LogoutLink>Logout</LogoutLink>
                    ) : (
                        <>
                            <LoginLink>Login</LoginLink>
                            <RegisterLink>Register</RegisterLink>
                            {/* <ThemeSwitch /> */}
                        </>
                    )}
                    <ThemeSwitch />
                </div>

                <div className="md:hidden relative">
                    <ThemeSwitch />
                    {isModalOpen ? (
                        <RxCross1 size={24} onClick={() => setIsModalOpen(false)} className='text-black cursor-pointer dark:text-white ml-4' />
                    ) : (
                        <RxHamburgerMenu size={24} onClick={() => setIsModalOpen(true)} className='text-black cursor-pointer dark:text-white ml-4' />
                    )}

                    {isModalOpen && (
                        <div className='absolute flex flex-col items-center justify-center py-4 bg-white dark:bg-black border border-gray-400 dark:border-white gap-y-2 mt-8 right-0 w-32 rounded-lg'>
                            {navigationData.map((item, index) => (
                                <Link key={index} href={item.href} className='text-gray-800 font-medium hover:text-black text-sm dark:text-gray-100 dark:hover:text-white'>{item.pathName}</Link>
                                
                            ))}
                            {user ? (
                                <>
                                <LogoutLink>Logout</LogoutLink>
                                </>
                            ) : (
                                <>
                                    <LoginLink>Login</LoginLink>
                                    <RegisterLink>Register</RegisterLink>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
