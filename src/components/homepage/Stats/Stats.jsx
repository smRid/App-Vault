import React from 'react';

const Stats = () => {
  return (
    <section className='py-20 container mx-auto px-5 bg-linear-to-b from-[#632EE3] to-[#9F62F2]'>
      <div>
        <div>
          <h3 className='mb-10 text-4xl md:text-5xl font-bold text-base-100 text-center'>Trusted by Millions, Built for You</h3>

          <div className='text-base-100 grid grid-cols-1 md:grid-cols-3 gap-y-20'>
            <div className='text-center'>
              <span className='opacity-80'>Total Downloads</span>
              <h2 className='my-4 text-6xl font-extrabold'>29.6M</h2>
              <span className='opacity-80'>21% more than last month</span>
            </div>

            <div className='text-center'>
              <span className='opacity-80'>Total Reviews</span>
              <h2 className='my-4 text-6xl font-extrabold'>906K</h2>
              <span className='opacity-80'>46% more than last month</span>
            </div>

            <div className='text-center'>
              <span className='opacity-80'>Active Apps</span>
              <h2 className='my-4 text-6xl font-extrabold'>132+</h2>
              <span className='opacity-80'>31 more will Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;