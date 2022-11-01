import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cowbellIMG from '../public/assets/projects/cowbell.png';
import boonsIMG from '../public/assets/projects/boons_delivery.png'
import ziraIMG from '../public/assets/projects/zira.png'
import ProjectItem from './ProjectItem';

const Portfolio = () => {
  return (
    <div id='Portfolio' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#2180E2]'>
          Portfolio
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Cowbell Cyber'
            backgroundImg={cowbellIMG}
            projectUrl='/cowbell'
            tech='React.js'
          />
          <ProjectItem
            title='Boons'
            backgroundImg={boonsIMG}
            projectUrl='/boons'
            tech='Angular.js'

          />
          <ProjectItem
            title='Zira Solutions'
            backgroundImg={ziraIMG}
            projectUrl='/zira'
            tech='React.js'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
