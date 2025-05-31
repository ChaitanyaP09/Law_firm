import React from 'react';
// import Header from './Header';
// import Appointment from './Appointment'; // Uncomment if needed
import LawyerImage from '../assets/img/lawyer.png';

const Banner = () => {
  return (
    <section
      id="home"
      className="pt-24 lg:pt-32 lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac] pb-16"
    >
      {/* <Header /> */}
      <div className="container mx-auto h-full lg:flex">
        <div className="flex justify-center flex-col h-full lg:text-left px-8 md:p-0 max-w-lg mx-auto lg:mx-0">
          <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px] text-center lg:text-left">
            VERDIT VENTURE <br />{' '}
            <span className="text-accent">AND ASSOCIATES</span>
          </h1>
          <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px] text-center lg:text-left">
            "Where strategic ventures meet decisive verdicts"
          </p>
          {/* <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
            <Appointment />
          </div> */}
        </div>
        <div className="hidden flex-1 lg:flex lg:flex-col items-end">
          <img src={LawyerImage} alt="Lawyer" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
