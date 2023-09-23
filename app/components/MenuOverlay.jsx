import React from 'react'
import NavLink from './NavLinks';

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col'>
      {links.map((link, index) => (
        <li key={index} className='mt-3'>
          <NavLink
            href={link.href} title={link.title}
            className='text-gray-300 hover:text-gray-100 text-2xl font-semibold'
          />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay;