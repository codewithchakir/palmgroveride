import React from 'react';

const Gallery = () => {
  return (
    <section className='p-1 md:p-4 max-w-screen-xl mx-auto' id='gallery'>
        <div>
            <h2>Our Gallery</h2>
        </div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
    <div className="grid gap-2 md:gap-8  lg:gap-8">
    <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/gallery-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/gallery-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-2 md:gap-6  lg:gap-8">
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/buggy2.jpg" alt=""/>
        </div>
    <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/gallery-4.jpg" alt=""/>
        </div>
    </div>
    <div className="md:grid gap-2 md:gap-6  lg:gap-8 hidden">
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/gallery-5.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-2xl" src="/img/gallery-6.jpg" alt=""/>
        </div>
    </div>
</div>
</section>

  );
};

export default Gallery;
