import React from 'react'
import { social } from '../data'

const Contacts = () => {
  return (
    <section id='contact' className='bg-blue-950 text-white min-h-[700px] section '>
      <div className='container mx-auto'>
        <h2 className='text-5xl font-sans font-extrabold mb-4 mt-4 text-center'>Contact Us</h2>
        
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px] text-center'>
        "We welcome your inquiries and feedback. Whether you need legal assistance, have questions about our services, or wish to discuss your case, please feel free to send us a message below. Our team at the firm is here to assist you."
        </p>

        <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
          <input 
            className='w-full px-4 py-3 rounded-lg text-black' 
            placeholder='Full Name' 
            type="text" 
          />
          <input 
            className='w-full px-4 py-3 rounded-lg text-black' 
            placeholder='Email Address' 
            type="email" 
          />
          <textarea 
            className='w-full px-4 py-3 rounded-lg h-32 resize-none text-black' 
            placeholder='Message'
          ></textarea>
          <button className='bg-yellow-500 btn bg-accent hover:bg-accent-hover transition-all text-white px-6 py-3 rounded-lg'>
            Send Message
          </button>
        </form>

        <div className='flex items-center justify-between max-w-[250px] mx-auto'>
          {social.map((item, index) => (
            <a href={item.href || '#'} key={index}>
              <img src={item.icon} alt={`social-${index}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacts
