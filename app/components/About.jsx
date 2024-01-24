import React from 'react';
import Whatsapp from '../svg/whatsapp';

const About = () => (
  <section className='py-10 mt-20 max-w-screen-2xl mx-auto' id='about'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4  justify-around bg-orange-300 h-full p-4 rounded-2xl'>
<div className="grid grid-cols-2 gap-2 md:gap-4">
    <div>
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/about-1.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-2 md:gap-3 lg:gap-4">
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/quad-blue.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/buggy2.jpg" alt=""/>
        </div>
        
    </div>
</div>
<div>
<div>
                
<h1 className="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">The best <span className="underline underline-offset-3 decoration-8 decoration-blue-500">activities</span> in the <span class="underline underline-offset-3 decoration-8 decoration-blue-500">palm grove</span></h1>
<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>the about us paragraph the about us paragraph the about us paragraph the about us paragraph the about us paragraph the about us paragraph </p>
<a href='#'>
      <button className='flex items-center justify-around text-blue-500 bg-white px-4 py-2 rounded-full'>
        Book
        <Whatsapp className='ml-2' color={"#3b82f6"}/>
      </button>
    </a>
            </div>
</div>
</div>

        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-around bg-orange-300 h-full p-2 md:p-8 rounded-2xl'>

            <div className='grid grid-cols-2 gap-2 lg:gap-3'>
                <div className='h-full grid-rows-1'>
                    <div className="w-full h-full">
                        <img className="w-full h-full object-cover rounded-2xl" src={'/img/camel.jpg'} alt={'camel ride'} />
                    </div>
                </div>
                <div className='h-full grid grid-cols-1 grid-rows-2 gap-2 lg:gap-3'>
                    <div className="w-full h-full bg-[url('/img/quad-girl-2.jpg')] rounded-2xl">
                    <img className="w-full h-94 object-cover rounded-2xl" src={'/img/quad-girl.jpg'} alt={'camel ride'} />
                    </div>
                    <div className='w-full h-full  bg-gray-400 rounded-2xl'>
                    <img className="w-full h-full object-cover rounded-2xl" src={'/img/motocross.jpg'} alt={'camel ride'} />
                    </div>
                </div>
            </div>

            <div>
                <h1>the about section headline</h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>the about us paragraph the about us paragraph the about us paragraph the about us paragraph the about us paragraph the about us paragraph </p>
                <button>Book Now</button>
            </div>
            
        </div> */}



  </section>
);

export default About;
