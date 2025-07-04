import React from 'react'
import {skills} from '../data'
const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f8f3eca1] pb-32'>
        <div className='container mx-auto text-center'>
            <h2 className='text-5xl font-primary font-extrabold mb-4'>
                What We do
            </h2>
            <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
            We provide expert legal guidance across corporate law, litigation, and dispute resolution, helping clients achieve fair and favorable outcomes.
            </p>
            <div className='lg:grid lg:grid-cols-3 gap-12'>
            {skills.map((item, index) => {
                const { icon, title, description } = item;
                return (
                  <div
                    key={index} 
                    className="flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0"
                  >
                    <img className="mb-6" src={icon} alt={title} />
                    <h4 className="text-2xl mb-2 font-primary font-bold">{title}</h4>
                    <p className="max-w-[332px] lg:max-w-[350px]">{description}</p>
                  </div>
                );
            })}

            </div>
        </div>
    </section>
  )
}

export default Skills