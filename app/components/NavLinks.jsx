import Link from 'next/link'
import React from 'react'

const NavLinks = ({href,title}) => {
  return (
    <Link href={href} className='block pl-3 pr-4 text-[#ADE7BE] sm:text-xl rounded md:p-0 hover:text-white py-2'>{title}</Link>
  )
}

export default NavLinks