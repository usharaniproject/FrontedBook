import React from 'react';
import Navbar from './Navbar';
// import React from 'react'

function About() {
  return (
    
    <>
    <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-conter justift-center text-center'>
            <h3 className='text-2xl font-semibold md:text-4xl '>This is About <span className='text-pink-500'>Our Organisation</span></h3>
            <h3 className='mt-12'>I welcome you all to know about our Website</h3>
            <p className='mt-12'>Our Mission</p>
        </div>
    </div>
    </>
  )
}

export default About
