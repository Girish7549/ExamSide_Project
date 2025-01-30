"use client";  // Mark this file as a client-side component
import React from 'react';     // Adjust the path if needed
import Navbar from './Navbar/Navbar';
import BodyImages from './BodyImages/BodyImages';
import Activity from './activity/Activity';
import HowItWorks from './HowItWorks/HowItWorks';
import Footers from './Footer/Footers';
import Newsletter from './Newsletter/Newsletter';
import Faq from './Faq/Faq'
import Review from './Review/Review';
import Cards from './Cards/Cards';
import BodyMarquee from './BodyMarquee/BodyMarquee';

const Home = () => {
  return (
    <>
      <Navbar/>
      {/* <BodyImages/> */}
      {/* <BodyMarquee/> */}
      <Cards/>
      <Activity/>
      <HowItWorks/>
      <Faq/>
      <Review/>
      <Newsletter/>
      <Footers/>
    </>
  );
};

export default Home;
