import React from 'react';
import { Box } from '@mui/material';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Servicios from '../components/Servicios';
import Events from '../components/Events';
import Equipo from '../components/Equipo';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';

const Landing = () => {
  return (
    <Box sx={{ paddingTop: '72px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Section2 />
      <Servicios />
      <Events />
      <Equipo />
      <Footer />
  
    </Box>
  );
};

export default Landing;
