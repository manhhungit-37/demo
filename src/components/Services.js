import React from 'react';
import ActiveNav from './ActiveNav';
import ServicesBanner from './ServicesBanner';


function Services() {
  return (
    <>
      <ActiveNav active="Services" /> 
      <ServicesBanner />
    </>
  );
}

export default Services;