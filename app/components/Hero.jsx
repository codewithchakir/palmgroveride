import React from 'react';
import Whatsapp from '../svg/whatsapp';


const Hero = () => (
  <section className='py-4'>
        <div class="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
          <div class="mr-auto place-self-center lg:col-span-6">
            <h1 class="max-w-2xl text-orange-400 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">The best ride in the palm gorve</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">For quad, buggy, motocross and camel rides, Touristes from around the world come to have the best time.</p>
            <a href='#' className='lg:hidden'>
      <button className='flex items-center justify-around bg-orange-500 text-white px-4 py-2 rounded-full'>
        Book
        <Whatsapp className='ml-2' />
      </button>
    </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img className='rounded-2xl' src={'./img/hero.jpg'} alt={'hero-image'} style={{ width: '100%', height: 'auto' }} />
            <div className='bg-orange-500 w-64 h-36 rounded-2xl absolute top-3/4 left-3/4'></div>
          </div>                
        </div>
  </section>
);

export default Hero;
