import React from 'react';
import { Box, Stack } from '@mui/material';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Servicios from '../components/Servicios';
import Events from '../components/Events';
import Equipo from '../components/Equipo';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      position: 'relative',
      width: '100%',
      overflow: 'hidden'
    }}>
      <Nav />
      <Stack 
        spacing={0} 
        sx={{ 
          marginTop: '80px', // Añadir margen superior para compensar el navbar
          padding: 0,
          width: '100%',
          position: 'relative'
        }}
      >
        <Box id="inicio">
          <Hero />
        </Box>
        <Box id="catalogos">
          <Section2 />
        </Box>
        <Box id="servicios">
          <Servicios />
        </Box>
        <Box id="eventos">
          <Events />
        </Box>
        <Box id="equipo">
          <Equipo />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Landing;
