import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#2180E2]'>
            About Me
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2016 while attending UC Davis for Computer Science.
            All of my Industry experience comes from working in start ups in the Silicon Valley. On a day to day basis, I work directly with UX designers and help transform their
            wireframe designs into deployable applications. I posess the skillsets of a Full-Stack developer. However, I have a serious passion for UI effects, animations, and creating intuitive user experiences.
          </p>
          <p className='pb-15 py-2 text-gray-600'>  
            I&apos;m passionate about learning new technologies and enjoy taking on challenging coding projects. Eventhough I am most proficient
            in building Front-End applications using HTML, CSS, Javascript,
            React, and Angular. I am a quick learner and can pick up new tech stacks/frameworks as 
            needed. I believe that a great developer is a master of data structures, but someone that takes on challenges with innovative tools and advanced coding principles.
          </p>
          <Link href='/#Portfolio'>
            <button className='pr-4 pl-4 py-3 text-white-600 cursor-pointer'>
              Check out my Portfolio
            </button>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
