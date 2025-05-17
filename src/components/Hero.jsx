import React from 'react';
import { Box, Typography, Button, Paper, styled } from '@mui/material';
import { ShoppingCart, CalendarMonth, People } from '@mui/icons-material';
import { CU } from 'country-flag-icons/react/3x2';

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

export const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(3)
}));

const Description = styled(Typography)({
  marginBottom: '32px',
  fontSize: '18px'
});

export const ButtonGroup = styled(Box)({
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

export const TagLabel = styled(Typography)({
  display: 'inline-block',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  color: '#8B5CF6',
  padding: '8px 16px',
  borderRadius: '20px',
  marginBottom: '16px',
  fontSize: '14px',
  fontWeight: '600'
});

const StatsContainer = styled(Box)({
  maxWidth: '1200px',
  margin: '60px auto 0',
  display: 'flex',
  gap: '24px',
  justifyContent: 'space-between'
});

export const StatCard = styled(Paper)({
  flex: 1,
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '16px'
});

const StatNumber = styled(Typography)({
  background: 'linear-gradient(45deg, #7e4dc8, #4389db)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '2.5rem'
});

const FeatureCard = ({ icon: Icon, title, description,  sx }) => (
  <FloatingCard elevation={3} sx={sx}>
    <Icon />
    <Typography variant="subtitle1">{title}</Typography>
    <Typography color='text.secondary'> {description}  </Typography>
  </FloatingCard>
);

const Hero = () => {
  return (
    <Box sx={{ 
      paddingTop: '72px',
      paddingBottom: '40px',
      background: '#ffffff',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '30%',
        height: '30%',
        background: theme => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, transparent 100%)`,
        opacity: 1,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '30%',
        height: '30%',
        background: theme => `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, transparent 100%)`,
        opacity: 1,
      }
    }}>
      <HeroContainer>
        <LeftColumn>
          <TagLabel>
            Próximamente en Cuba <CU style={{ width: '20px', marginLeft: '4px', verticalAlign: 'text-bottom' }}/>
          </TagLabel>
          
          <MainHeading variant="h2" color='text.primary'>
            Tu <span style={{ color: '#8B5CF6' }}>solución</span>{' '}
            <span style={{ color: '#3B82F6' }}>completa</span> de compras y eventos
          </MainHeading>
          
          <Description variant="body1" color='text.secondary'>
            Optimiza tus compras y gestiona tus eventos de manera eficiente. 
            Una plataforma integral para todas tus necesidades.
          </Description>

          <ButtonGroup>
            <Button variant="contained" color="primary" size="large" sx={{textTransform: 'initial'}} >
              Regístrate ahora
            </Button>
            <Button variant="outlined" color="primary" size="large" sx={{textTransform: 'initial'}}  >
              Conoce más
            </Button>
          </ButtonGroup>

          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: '#8B5CF6' }}>+10,000</span>{' '} usuarios interesados
          </Typography>
        </LeftColumn>

        <CardsContainer>
          <MainCard elevation={4}>
            <ShoppingCart sx={{ fontSize: 40 }} />
            <Typography variant="h6">Catálogos Digitales</Typography>
            <Description color="textSecondary"> Catalogos de tiendas y productos</Description>
          </MainCard>

          <FeatureCard 
            icon={CalendarMonth}
            title="Reservas"
            description={"Reserva tus productos"}
            sx={{ position: 'absolute', top: '20%', right: '20%' }}
            
            
          />
          
          <FeatureCard 
            icon={People}
            title="Servicios"
            description="Conexión con proveedores"
            sx={{ position: 'absolute', bottom: '20%', left: '20%' }}
          />
        </CardsContainer>
      </HeroContainer>

      <StatsContainer>
        <StatCard elevation={3}>
          <StatNumber>+1.2K</StatNumber>
          <Typography variant="h6">Catálogos</Typography>
        </StatCard>
        <StatCard elevation={3}>
          <StatNumber>+800</StatNumber>
          <Typography variant="h6">Servicios</Typography>
        </StatCard>
        <StatCard elevation={3}>
          <StatNumber>+500</StatNumber>
          <Typography variant="h6">Eventos</Typography>
        </StatCard>
        <StatCard elevation={3}>
          <StatNumber>Pronto</StatNumber>
          <Typography variant="h6">Usuarios</Typography>
        </StatCard>
      </StatsContainer>
    </Box>
  );
};

export default Hero;