import React from 'react';
import { Box } from '@mui/material';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Servicios from '../components/Servicios';

const Landing = () => {
  return (
    <Box sx={{ paddingTop: '72px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Section2 />
      <Servicios />
  
    </Box>
  );
};

export default Landing;
