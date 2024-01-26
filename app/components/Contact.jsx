import React from 'react';

const Contact = () => (
      <section className="contact mx-auto max-w-screen-xl md:p-4 " id="contact">
        <h2>Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          
          <div className="border-gray-200 border-4 rounded-2xl overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235.3889538467563!2d-7.94185236398196!3d31.695827734374273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaff3b891004267%3A0x57570898d47ea5de!2sQuad%20Adventure%20Marrakesh%20-%20quad%20marrakech!5e0!3m2!1sen!2sma!4v1705318728069!5m2!1sen!2sma"
          width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>



          <div className="border-gray-200 border-4 p-2 md:p-4 rounded-2xl">
            <form className=" p-3 md:p-6 ">
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-500 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-200 p-2 rounded-2xl"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-gray-500 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-200 p-2 rounded-2xl"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-gray-500 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-gray-200 p-2 rounded-2xl"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 w-full text-white p-3 rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
);
export default Contact;