import React from 'react';

const Card = ({ cardInfo }) => {
  const { imageSrc, title, link } = cardInfo;

  return (
    <a href={link}>
        
        
    <div className="group max-w-xs w-80 sm:w-72 lg:w-80 rounded-2xl overflow-hidden">
      <div>
        <img className="w-full h-94 object-cover" src={imageSrc} alt={title} />

        
      </div>

      <div className="px-4 py-2 bg-gray-200 text-gray-700 group-hover:bg-orange-400 group-hover:text-white">
        <div>
          <div className="font-bold text-lg mb-1 pt-2 pb-1">{title}</div>
        </div>
      </div>
    </div>

    </a>
  );
};

export default Card;
