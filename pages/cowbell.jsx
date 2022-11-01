import Image from 'next/image';
import React from 'react';
import cowbellIMG from '../public/assets/projects/cowbell.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const cowbell = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cowbellIMG}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Cowbell Cyber</h2>
          <h3>React JS / Material UI / Node</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 style={{paddingBottom: '20px'}}>Project Overview</h2>
          <p style={{paddingBottom: '20px'}}>
            Cowbell Cyber is a insurance company that provides insurance to small and medium buisnesses. Cowbell specializes in ransomware insurance and has proprietary machine learning algorithms that auto-generate insurance premiums. 
          </p>
          <p>
            I have been working on this Insurance dashboard since June of 2020 (pre-seed) and have helped improve the dashboard to its current 500 million dollar evaluation. I work closely with UX designers to help program the designs in React. Some of the important features I have programmed here are: CRM dashboard for Insurance agents, Insurance Quote Rating View for Insurance Under Writers, Insurance Renewal Workflows, and many other workflows. Furthermore, I learned a variety of state management techniques like inversion of control, redux, and useReducers. When desiging any component, I take reusability into mind and composability so that UI designs can easily be customized and implemented faster in the future.
          </p>
          <a
            href='https://cowbell.insure/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Cypress
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

export default cowbell;
