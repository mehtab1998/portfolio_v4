import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Mehtab | Resume</title>
        <meta
          name='description'
          content='I&apos;m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Mehtab Randhawa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/mehtab-randhawa-a83786177/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/mehtab1998'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Complex Problem Solving <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Receptive Leader
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Experienced Front-End Developer with a demonstrated history of working in startups for over two years. Skilled in React.js, CSS, HTML, Node.js, and Agile/Waterfall Methodologies. Strong engineering professional with a Computer Science Degree and concrete understanding of working with Agile Methodologies. Poses a vast technical background in object-oriented programming, advance knowledge on how to optimize javascript code, and working with modern React Hooks.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Node.js
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Angular
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Cypress.js
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Material
            <span className='px-2'>|</span> Next Auth
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span>{" "}|{" "}</span><span className='font-bold'>IBM Bluemix</span><span>{" "}|{" "}</span><span className='font-bold'>Heroku</span>
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Cowbell Cyber
            </span>
            <span className='px-2'>|</span>Pleasanton, CA
          </p>
          <p className='py-1 italic'>Front-End Web Developer III (2020 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Program over 20+ UI Workflows/Features for the Cowbell Dashboard in React.js 
            </li>
            <li>
              Implement a variety of Reusable Components for the Cowbell Dashboard with Material UI
            </li>
            <li>
              Ensured a comprehensive mobile responsive UI layouts with
              understanding of React, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns that users faced with hotfixes, and implemented design changes as needed.
            </li>
            <li>
              Worked directly with a variety of non-technical stakeholders to collect requirements and
              implement multiple technologies, features, and Workflows.
            </li>
            <li>
              Test new components with Cypress.js and provide solid code reviews for Peers
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Summer Full-Stack Developer
            </span>
            <span className='px-2'>|</span>Fremont, CA
          </p>
          <p className='py-1 italic'> boons.io (05/2019 - 08/2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Worked with Angular.js to help implement the Boon&apos;s food delivery dashboard UI
            </li>
            <li>
              Integrating Uber and Lyft third party APIs with Node.js 
            </li>
            <li>
              Implemented a scheduler that runs CRON jobs on scheduled food deliveries daily 
            </li>
            <li>
              Created a variety of Rest APIs to do CRUD operations
            </li>
          </ul>
        </div>


        <h5 className='text-center underline text-[18px] py-4'>
          Freelance Consulting Experience
        </h5>
        <div className='py-6'>
          <p className='font-bold'>Zira Solutions Web Developer</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Design Zira Solutions Corporate website with Zeplin and work with stakeholders to gain requirements
            </li>
            <li>
              Program the Zeplin designs with React.js and created an interactive User Interface 
            </li>
            <li>
              Utilized Node.js to establish the corporations Backend Services for their corporate Website
            </li>
            <li>
              Deployed the corporation&apos;s website on Heroku and do monthly updates
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
