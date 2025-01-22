"use client";  // Mark this file as a client-side component
import React from 'react';     // Adjust the path if needed
import CardSections from './CardSections';
import Navbar from './Navbar/Navbar';
import BodyImages from './BodyImages/BodyImages';
import Activity from './activity/Activity';
import HowItWorks from './HowItWorks/HowItWorks';
import Footers from './Footer/Footers';
import Newsletter from './Newsletter/Newsletter';
import Faq from './Faq/Faq'
import Review from './Review/Review';

const Home = () => {
  return (
    <>
      <Navbar/>
      <BodyImages/>
      <CardSections />
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
