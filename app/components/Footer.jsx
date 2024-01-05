import React from 'react';

import Image from 'next/image'


const Footer = () => (
    <footer>
        <div className='flex justify-between border-white border-b-2 bg-orange-300 rounded-2xl'>

        <div>@codewithchakir
          <ul className=''>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Snapchat</a></li>
            <li><a href='#'>Other link</a></li>
          </ul>
        </div>
        <div>Quick Link
        <nav>
          <ul className=''>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Activities</a></li>
            <li><a href='#'>Contact us</a></li>
          </ul>
        </nav>
        </div>
        <div>Contact Us
        <ul className=''>
            <li><a href='#'>email@mail.com</a></li>
            <li><a href='#'>+212 628354575</a></li>
            <li><a href='#'>the palmeraie marrakech safi</a></li>
            <li><a href='#'>morocco</a></li>
            <li><a href='#'>Contact us</a></li>
          </ul>
        </div>
        </div>
        <div>
        <p> all rights reserved to @codewithchakir</p>
        </div>
        
      </footer>
);

export default Footer;