import Image from 'next/image';
import React from 'react';
import boonsIMG from '../public/assets/projects/boons_delivery.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const boons = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={boonsIMG}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Boons Food Delivery</h2>
          <h3>React JS / Node / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 style={{paddingBottom: '20px'}}>Project Overview</h2>
          <p style={{paddingBottom: '20px'}}>
            Boons is a food delivery application that is designed to be more affordable for small buisnesses and help them establish their own independent delivery service instead of relying on UberEats, Doordash, and Grubhub. 
          </p>
          <p>
            During my time at Boons.io, I took the time to design and deploy their company website. The website was designed to feel user friendly while being informative on the product. The website was designed with HTML and CSS. Furthermore, I helped implement Boon&apos;s Dashboard with Angular and Node.js. I worked on a variety of features like adding resturants to the dashboard, scheduling food deliveries, and integrating third-party APIs.
          </p>
          <a
            href='https://boons.io/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Angular
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> LYFT/UBER API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HAPI.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IBM Bluemix
              </p>
            </div>
          </div>
        </div>
        <Link href='/#Portfolio'>
          <button className='px-8 py-2 mt-4'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default boons;
