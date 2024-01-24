import React from 'react';

const Features = () => (
    <section className='w-full p-8 sm:p-16 flex flex-col items-center'>
        <h1 className='text-4xl font-medium mb-8'>We shall fill all your needs</h1>
        <div className='grid grid-cols-4 gap-4 sm:gap-16 lg:gap-32 xl:gap-44 max-w-5xl mt-8'>
            <div>
                <img src='/svg/bus.svg' alt='' />
                <p className='font-lg text-sm md:text-lg lg:text-2xl text-center'>transport</p>
            </div>
            <div>
                <img src='/svg/teapot.svg' alt='' />
                <p className='font-lg text-xs md:text-lg lg:text-2xl text-center'>tea pause</p>
            </div>
            <div>
                <img src='/svg/tajin.svg' alt='' />
                <p className='font-lg text-sm md:text-lg lg:text-2xl text-center'>dinner</p>
            </div>
            <div>
                <img src='/svg/safety.svg' alt='' />
                <p className='font-lg text-sm md:text-lg lg:text-2xl text-center'>saftey</p>
            </div>
        </div>
    </section>
);
export default Features;