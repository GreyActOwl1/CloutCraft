import Hero from '@/components/Hero';
import React from 'react';
import Features from './ui/features';

const Home = () => {
  return (
    <div className='bg-gray-100 dark:bg-black'>
      <Hero/>
      <Features/>
    </div>
  );
}

export default Home;
