// Activities.js
import React from 'react';
import Card from './Card';

const activitiesData = [
  {
    imageSrc: '/img/quad.jpg',
    duration: '2 hours',
    price: '$20',
    title: 'Quad Ride in the Palm Grove',
    link: 'quad'
  },
  {
    imageSrc: '/img/camel.jpg',
    duration: '2 hours',
    price: '$20',
    title: 'camel tour in the Palm Grove',
    link: 'camel'
  },
  {
    imageSrc: '/img/buggy.jpg',
    duration: '2 hours',
    price: '$20',
    title: 'buggy activitie in the Palm Grove',
    link: 'buggy'
  },
  {
    imageSrc: '/img/motocross.jpg',
    duration: '2 hours',
    price: '$20',
    title: 'Palm Grove motocross adventure',
    link: 'motocross'
  }
];

const Activities = () => (
  <section className='p-4'>
  <div className='flex flex-col'>
    <h1 className="text-3xl font-bold mb-6">Our Activities</h1>
    <div className='flex flex-col sm:flex-row gap-10 sm:justify-between items-center flex-wrap'>
      {activitiesData.map((cardInfo, index) => (
        <Card key={index} cardInfo={cardInfo} />
      ))}
    </div>
  </div>
  </section>
);

export default Activities;
