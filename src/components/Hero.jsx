import React from 'react';
import { Box, Typography, Button, Paper, styled } from '@mui/material';
import { ShoppingCart, CalendarMonth, People } from '@mui/icons-material';
import { CU } from 'country-flag-icons/react/3x2';
import CustomButton from './CustomButton';


const HeroContainer = styled(Box)({
  width: '100%',
  padding: '40px 20px',
  display: 'flex',
  gap: '40px'
});

const LeftColumn = styled(Box)({
  flex: 1
});

export const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: '75px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  lineHeight: '.9' 
}));

export const Description = styled(Typography)({
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

const CardWrapper = styled(Paper)({
  background: '#ffffff',
  borderRadius: '24px',
  padding: '17px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const MainCard = styled(Box)({
  width: '580px',
  height: '360px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  backgroundColor: '#f5f5f5', // Cambiado a gris claro
  borderRadius: '24px',
  transition: 'all 0.3s ease',
// Añadida inclinación de 2 grados
});

const MediumCard = styled(Box)({
  width: '280px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '16px',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5', // Cambiado a gris claro
  borderRadius: '22px',
  transition: 'all 0.3s ease',
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
  width: '100%',
  margin: '60px 0 0 0',
  display: 'flex',
  gap: '24px',
  justifyContent: 'space-between'
});

export const StatCard = styled(Paper)({
  flex: 1,
  padding: '10px',
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

const FeatureCard = ({ icon: Icon, title, description, sx }) => (
  <FloatingCard elevation={3} sx={sx}>
    <Icon />
    <Typography variant="subtitle1">{title}</Typography>
    <Typography color='text.secondary'> {description}  </Typography>
  </FloatingCard>
);

const Hero = () => {
  return (
    <Box sx={{
      paddingTop: '130px',
      paddingBottom: '40px',
      background: `
        radial-gradient(circle at 0% 100%, rgba(126, 77, 200, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 100% 0%, rgba(67, 137, 219, 0.05) 0%, transparent 50%),
        #ffffff
      `,
      position: 'relative',
    }}>
      <HeroContainer>
        <LeftColumn>
          <TagLabel>
            Próximamente en Cuba <CU style={{ width: '20px', marginLeft: '4px', verticalAlign: 'text-bottom' }} />
          </TagLabel>

          <MainHeading variant="h2" color='text.primary'>
            Tu <span style={{
              background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>solución completa</span> de compras y eventos
          </MainHeading>

          <Description variant="body1" color='text.secondary'>
            Optimiza tus compras y gestiona tus eventos de manera eficiente.
            Una plataforma integral para todas tus necesidades.
          </Description>

          <ButtonGroup>
            <CustomButton color="primary">
              Regístrate ahora
            </CustomButton>
            <CustomButton variant="outlined" color="primary">
              Conoce más
            </CustomButton>
          </ButtonGroup>

          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: '#8B5CF6' }}>+10,000</span>{' '} usuarios interesados
          </Typography>
        </LeftColumn>

        <CardsContainer pt={'100px'}>
          <CardWrapper elevation={15}
            sx={{
              transform: 'rotate(4deg)'
            }}>
            <MainCard >
              <ShoppingCart sx={{ 
                fontSize: 64, // Icono más grande
                color: '#7e4dc8'
              }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>Catálogos Digitales</Typography>
              <Description color="text.secondary">Catalogos de tiendas y productos</Description>
            </MainCard>
          </CardWrapper>

          <CardWrapper
            sx={{
              position: 'absolute',
              bottom: '-35%',  // Más arriba del fondo
              right: '5%',   
            }}
            elevation={10}
          >
            <MediumCard >
              <People sx={{ 
                fontSize: 36,
                color: '#7e4dc8'
              }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Servicios</Typography>
              <Typography color="text.secondary">Conexión con proveedores</Typography>
            </MediumCard>
          </CardWrapper>

          <CardWrapper
            sx={{
              position: 'absolute',
              bottom: '3%',     // Más arriba
              left: '-5%',   // Más hacia el centro
            }}
            elevation={10}
          >
            <MediumCard >
              <CalendarMonth sx={{ 
                fontSize: 36,  // Icono más grande
                color: '#4389db'
              }} />
              <Typography variant="subtitle" sx={{ fontWeight: 700 }}>Reservas</Typography>
              <Typography color="text.secondary">Reserva tus productos</Typography>
            </MediumCard>
          </CardWrapper>
        </CardsContainer>
      </HeroContainer>

      <StatsContainer>
        <StatCard elevation={1}>
          <StatNumber>100+</StatNumber>
          <Typography variant="h6">Catálogos</Typography>
        </StatCard>
        <StatCard elevation={1}>
          <StatNumber>50+</StatNumber>
          <Typography variant="h6">Servicios</Typography>
        </StatCard>
        <StatCard elevation={1}>
          <StatNumber>25+</StatNumber>
          <Typography variant="h6">Eventos</Typography>
        </StatCard>
        <StatCard elevation={1}>
          <StatNumber>Pronto</StatNumber>
          <Typography variant="h6">Usuarios</Typography>
        </StatCard>
      </StatsContainer>
    </Box>
  );
};

export default Hero;