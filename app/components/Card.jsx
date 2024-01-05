import React from 'react';

const Card = ({ cardInfo }) => {
  const { imageSrc, duration, price, title, link } = cardInfo;

  return (
    <div className="group max-w-xs w-60 rounded-2xl overflow-hidden relative">
      <div className="relative">
        <img className="w-full h-94 object-cover" src={imageSrc} alt={title} />

        <a href={link}>
        <button className="bg-orange-500 text-white py-2 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Details
        </button>
        </a>
      </div>

      <div className="px-4 py-2 bg-gray-200 text-gray-700">
        <div className='flex justify-between'>
          <div>{duration}</div>
          <div>{price}</div>
        </div>

        <div>
          <div className="font-bold text-lg mb-1 pt-2 pb-1">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
