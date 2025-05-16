import React from 'react';
import { Box } from '@mui/material';
import Nav from '../components/Nav';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <Box sx={{ paddingTop: '72px' }}>
      <Nav />
      <Hero />
    </Box>
  );
};

export default Landing;
