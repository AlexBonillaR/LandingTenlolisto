import React from 'react';
import { Box, Typography, Button, Paper, styled } from '@mui/material';
import { ShoppingCart, CalendarMonth, People } from '@mui/icons-material';

const HeroContainer = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  display: 'flex',
  gap: '40px'
});

const LeftColumn = styled(Box)({
  flex: 1
});

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(3)
}));

const Description = styled(Typography)({
  marginBottom: '32px',
  fontSize: '18px'
});

const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginBottom: '32px'
});

const CardsContainer = styled(Box)({
  flex: 1,
  position: 'relative',
  height: '400px'
});

const MainCard = styled(Paper)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  backgroundColor: '#fff',
  borderRadius: '16px'
});

const FloatingCard = styled(Paper)({
  width: '180px',
  height: '140px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  backgroundColor: '#fff',
  borderRadius: '16px'
});

const FeatureCard = ({ icon: Icon, title, sx }) => (
  <FloatingCard elevation={3} sx={sx}>
    <Icon />
    <Typography variant="subtitle1">{title}</Typography>
  </FloatingCard>
);

const Hero = () => {
  return (
    <Box sx={{ paddingTop: '72px' }}>
      <HeroContainer>
        <LeftColumn>
          <MainHeading variant="h2">
            Tu <span style={{ color: '#8B5CF6' }}>solución</span>{' '}
            <span style={{ color: '#3B82F6' }}>completa</span> de compras y eventos
          </MainHeading>
          
          <Description variant="body1">
            Optimiza tus compras y gestiona tus eventos de manera eficiente. 
            Una plataforma integral para todas tus necesidades.
          </Description>

          <ButtonGroup>
            <Button variant="contained" color="primary" size="large">
              Regístrate ahora
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Conoce más
            </Button>
          </ButtonGroup>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            +10,000 usuarios interesados
          </Typography>
        </LeftColumn>

        <CardsContainer>
          <MainCard elevation={4}>
            <ShoppingCart sx={{ fontSize: 40 }} />
            <Typography variant="h6">Catálogos Digitales</Typography>
          </MainCard>

          <FeatureCard 
            icon={CalendarMonth}
            title="Reservas"
            sx={{ position: 'absolute', top: '20%', right: '20%' }}
          />

          <FeatureCard 
            icon={People}
            title="Servicios"
            sx={{ position: 'absolute', bottom: '20%', left: '20%' }}
          />
        </CardsContainer>
      </HeroContainer>
    </Box>
  );
};

export default Hero;