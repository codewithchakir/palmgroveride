import React from 'react';
import Whatsapp from '../svg/whatsapp';
import Variables from '@/public/var/vriables';

const Hero = () => (
  <section className='py-4 mb-20' id='home'>
        <div class="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
          <div class="mr-auto place-self-center lg:col-span-6">
            {/* <h1 class="max-w-2xl text-orange-400 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">The best ride in the palm gorve</h1> */}
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">The best <span class="underline underline-offset-3 decoration-8 decoration-orange-500">andventure</span> in the <span class="underline underline-offset-3 decoration-8 decoration-orange-500">palm grove</span></h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">For quad, buggy, motocross and camel rides, Touristes from around the world come to have the best time.</p>
            <a href={Variables.links.whatsapp} target="_blank" className='lg:hidden'>
      <button className='flex items-center justify-around bg-orange-500 text-white px-4 py-2 rounded-full'>
        Book
        <Whatsapp className='ml-2' color={"white"} />
      </button>
    </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img className='rounded-2xl' src={'./img/hero.jpg'} alt={'hero-image'} style={{ width: '100%', height: 'auto' }} />
            <div className='bg-orange-500 w-64 h-36 rounded-2xl absolute top-3/4 left-3/4 flex items-center justify-center'>


            <div className="flex flex-col items-center gap-2">
              
        <h4 className="font-bold text-white">Customer reviews</h4>
        
        <span className="flex items-center gap-4 rounded text-sm text-white">
          <span
            className="flex gap-1 text-white"
            role="img"
            aria-label="Rating: 4 out of 5 stars"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </span>
          <span>4.1 out 5</span>
        </span>

        <span className="text-xs leading-6 text-white">
          based on 42 user
        </span>
      </div>



            </div>
          </div>                
        </div>
  </section>
);

export default Hero;
