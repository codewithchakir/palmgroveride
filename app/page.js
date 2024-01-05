import Image from 'next/image'

import Activities from './components/Activities'
import Hero from './components/Hero'
import About from './components/About'

export default function Home() {
  return (
    <main>
     
    <Hero/>
    <Activities/>
    <About/>

      <section className='gallery p-4'> {/* Added padding for better spacing */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Responsive grid with 1 column on small screens, 2 columns on medium, and 3 columns on large */}
    <div className="bg-gray-300 p-2">image 1</div> {/* Example styling for each image */}
    <div className="bg-gray-300 p-2">image 2</div>
    <div className="bg-gray-300 p-2">image 3</div>
    <div className="bg-gray-300 p-2">image 4</div>
    <div className="bg-gray-300 p-2">image 5</div>
    <div className="bg-gray-300 p-2">image 6</div>
  </div>
</section>

      <section className='feedback'>feedback</section>
      
      
      <section className='contact p-4'>
  <h2 className="text-2xl font-bold mb-4">Contact</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    <div className="bg-gray-300 p-4">Embedded Map</div>
    <div className="bg-gray-300 p-4">
    <form className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="text-gray-600 block mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full border p-2 rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="text-gray-600 block mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full border p-2 rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="text-gray-600 block mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="w-full border p-2 rounded"></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
    </div>
  </div>
</section>
    </main>
  )
}
