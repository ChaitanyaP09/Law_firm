import React from 'react'

const Appointment = () => {
  return (
    <div className='bg-yellow-500 w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto mb-16'>
      <h3 className='text-white text-[28px] font-bold tracking-wide text-center'>
        Get An Appointment
      </h3>
      <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'></div>
      
      <div className='space-y-[24px]'>
        <input 
          className='w-full px-4 py-3 rounded-sm text-black outline-none focus:ring-2 focus:ring-blue-500' 
          placeholder='Full Name' 
          type="text" 
        />
        <input 
          className='w-full px-4 py-3 rounded-sm text-black outline-none focus:ring-2 focus:ring-blue-500' 
          placeholder='Phone Number' 
          type="text" 
        />
        <input 
          className='w-full px-4 py-3 rounded-sm text-black outline-none focus:ring-2 focus:ring-blue-500' 
          placeholder='Email Address' 
          type="email" 
        />
        <textarea 
          className='resize-none w-full h-[132px] outline-none rounded-sm p-4 text-sm text-black focus:ring-2 focus:ring-blue-500' 
          placeholder='Your Message'
        ></textarea>
      </div>

      <button className='mt-6 w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-sm transition-all'>
        Send Message
      </button>
    </div>
  )
}

export default Appointment
