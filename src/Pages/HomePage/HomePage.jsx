import React from 'react';
import Banner from "../../Components/HomePage/Banner/Banner";
import Stats from '../../Components/HomePage/Stats/Stats';
import TrendingApps from '../../Components/HomePage/TrendingApps/TrendingApps';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps />
    </>
  );
};

export default HomePage;