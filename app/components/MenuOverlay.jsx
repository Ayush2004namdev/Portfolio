import React from 'react'
import NavLinks from './NavLinks'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((items,i) => {
            return (
                <li key={i}><NavLinks href={items.href} title={items.title}/></li>
            )
        })}
    </ul>
  )
}

export default MenuOverlay