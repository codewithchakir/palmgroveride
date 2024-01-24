import React from 'react';
import Variables from '@/public/var/vriables';

import Whatsapp from '../svg/whatsapp';

const Header = () => (
    <header className='flex justify-between items-center p-2 lg:px-4 my-2 bg-white rounded-full'>
    {/* Logo */}
    <a href='#' className='text-xl text-red-500 font-bold'>
      LOGO
    </a>

    {/* Navigation */}
    <nav className='hidden lg:flex'>
      <ul className='flex space-x-4'>
        <li><a href='/#home'>Home</a></li>
        <li><a href='/#activities'>Activities</a></li>
        <li><a href='/#about'>About us</a></li>
        <li><a href='/#contact'>Contact us</a></li>
      </ul>
    </nav>

    {/* Book button */}
    <a href={Variables.links.whatsapp} className='hidden lg:flex'>
      <button className='flex items-center justify-around bg-orange-500 text-white px-4 py-2 rounded-full'>
        Book
        <Whatsapp className='ml-2' color={"white"} />
      </button>
    </a>
  </header>
);
export default Header;