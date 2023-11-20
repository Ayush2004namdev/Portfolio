'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import {Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title:'About',
        href:'#about',
    },
    {
        title:'Projects',
        href:'#projects',
    },
    {
        title:'Contact',
        href:'#contact',
    },



]

const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)


  return (
   <nav className='fixed border-b px-8 py-4 border-[#33353F] z-10 top-0 right-0 left-0 opacity-100 bg-[#121212] '>
    <div className="flex flex-wrap items-center justify-between mx-auto p-2 pb-2 ">
        <Link className='md:text-5xl text-3xl font-semibold text-white' href={'/'}>Ayush</Link>
        <div className="block mobile-menu md:hidden">
            {!openMenu ? (
                <button onClick={() => setOpenMenu(true)} className='flex items-center text-slate-200 border border-slate-200 px-3 py-1 rounded hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5'/>
                </button>
            ) : (
                <button onClick={() => setOpenMenu(false)}  className='flex items-center text-slate-200 border border-slate-200 px-3 py-1 rounded hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5'/>
                </button>
            )}
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navLinks.map((items,i) => {
                    return (
                        <li key={i}><NavLinks href={items.href} title={items.title}/></li>
                    )
                })}
            </ul>
        </div>
    </div>
    {openMenu && (
        <MenuOverlay links={navLinks}/>
    )}
   </nav>
  )
}

export default Navbar