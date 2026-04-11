import React from 'react';

const AppDetailsLayout = ({children}) => {
    return (
        <>
        <h2 className='bg-yellow-100 text-center py-5 font-bold text-4xl text-yellow-500'>Navbar 2 for app details (nested layout) </h2>
            {children}
        </>
    );
};

export default AppDetailsLayout;