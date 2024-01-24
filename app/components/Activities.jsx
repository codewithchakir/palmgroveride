""
import React from 'react';
import Card from './Card';

import Variables from '@/public/var/vriables';

function  Activities () {
return (
  <section className='p-1 sm:p-4 flex flex-col items-center overflow-x-hidden max-w-screen-xl mx-auto' id='activities'>
      <h1 className='text-4xl font-medium mb-8'>Our Activities</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 lg:gap-20 xl:gap-28'>
      {Variables.activitiesData.map((cardInfo, index) => (
        <Card key={index} cardInfo={cardInfo} />
      ))}
    </div>
    
  </section>
);
      }

export default Activities;
