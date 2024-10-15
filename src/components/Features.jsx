import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Features = () => {
  return (
    <section className='p-20' id='features'>
        <div className='flex flex-row justify-center w-[80%] m-auto'>
            <Link className='text-sm text-gray font-bold border-b-4 border-gray p-4 hover:border-blue hover:text-blue'>Record meetings</Link>
            <Link to="meeting-clips" className='text-sm text-gray font-bold border-b-4 border-gray p-4 hover:border-blue hover:text-blue'>Meeting Clips</Link>
            <Link to="share-meetings" className='text-sm text-gray font-bold border-b-4 border-gray p-4 hover:border-blue hover:text-blue'>Share Meeting</Link>
            <Link to="mail-and-calenders" className='text-sm text-gray font-bold border-b-4 border-gray p-4 hover:border-blue hover:text-blue'>Mail and Calender</Link>
            <Link to="cloud-storages" className='text-sm text-gray font-bold border-b-4 border-gray p-4 hover:border-blue hover:text-blue'>Cloud Storage</Link>
        </div>
        <div className='py-10'>
            <Outlet/>
        </div>
    </section>
  )
}

export default Features