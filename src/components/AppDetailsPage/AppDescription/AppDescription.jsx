import React from 'react';

const AppDescription = ({expectedApp}) => {
  return (
    <section className='mt-10 mb-20 container mx-auto px-5'>
      <div>
        <div>
          <h6 className='mb-6 text-[#001931] text-2xl font-semibold'>Description</h6>
          <p className='text-[#627382] text-xl'>{expectedApp.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AppDescription;