import React from 'react';


const About = () => (
  <section className='h-[100vh] md:h-[70vh] py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-around bg-orange-300 h-full p-8 rounded-2xl'>

            <div className='grid grid-cols-2 gap-2 lg:gap-3'>
                <div className='h-full grid-rows-1'>
                    <div className="w-full h-full">
                        <img className="w-full h-full object-cover rounded-2xl" src={'/img/camel.jpg'} alt={'camel ride'} />
                    </div>
                </div>
                <div className='h-full grid grid-cols-1 grid-rows-2 gap-2 lg:gap-3'>
                    <div className='w-full h-full'>
                    <img className="w-full h-full object-cover rounded-2xl" src={'/img/quad-girl.jpg'} alt={'camel ride'} />
                    </div>
                    <div className='w-full h-full'>
                    <img className="w-full h-full object-cover rounded-2xl" src={'/img/motocross.jpg'} alt={'camel ride'} />
                    </div>
                </div>
            </div>

            <div>
                <h1>the about section headline</h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>the about us paragraph the about us paragraph the about us paragraph the about us paragraph the about us paragraph the about us paragraph </p>
                <button>Book Now</button>
            </div>
            
        </div>
  </section>
);

export default About;
