import React from 'react';
import { Box, Typography, Grid, Paper, styled } from '@mui/material';
import { Build, Business, LocalShipping, HomeWork, Forum, VerifiedUser } from '@mui/icons-material';
import { TagLabel, MainHeading } from './Hero';

const StyledServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(30, 41, 59, 0.5)',
  backdropFilter: 'blur(8px)',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  background: 'linear-gradient(45deg, #7e4dc8, #4389db)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    color: 'white',
    fontSize: 28,
  }
}));

const Servicios = () => {
  const services = [
    {
      icon: <Build />,
      title: "Reparaciones",
      description: "Conecta con técnicos calificados para reparaciones del hogar y electrónica."
    },
    {
      icon: <Business />,
      title: "Servicios Profesionales",
      description: "Accede a contadores, diseñadores, programadores y otros especialistas."
    },
    {
      icon: <LocalShipping />,
      title: "Entregas y Envíos",
      description: "Transporta tus compras o envía paquetes con nuestros asociados locales."
    },
    {
      icon: <HomeWork />,
      title: "Hogar",
      description: "Servicios de limpieza, pintura, jardinería y más para tu hogar."
    },
    {
      icon: <Forum />,
      title: "Asesorías",
      description: "Consultas especializadas en diferentes áreas profesionales."
    },
    {
      icon: <VerifiedUser />,
      title: "Verificados",
      description: "Todos nuestros proveedores de servicios son verificados y evaluados."
    }
  ];

  return (
    <Box sx={{
      py: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      background: 'linear-gradient(45deg,rgb(30, 68, 155) -100%,rgb(30, 41, 59) 50%,rgba(112, 46, 129, 0.79) 250%)',
      minHeight: { xs: 'auto', md: '100vh' },
      maxHeight: { md: '120px' },
      overflow: 'auto'
    }}>
      <Box sx={{ 
        maxWidth: 'lg', 
        mx: 'auto', 
        px: { xs: 3, sm: 6, md: 8 },
        height: 'fit-content'
      }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <TagLabel sx={{ color: 'secondary.light' }}>
            Servicios Profesionales
          </TagLabel>
          <MainHeading sx={{ color: 'white', mt: 1, mb: 2 }}>
            Servicios de calidad <Box component="span" sx={{
              background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>a tu alcance</Box>
          </MainHeading>
          <Typography variant="body1" sx={{ color: 'grey.300', maxWidth: 600, mx: 'auto' }}>
            Conectamos a los cubanos con los mejores proveedores de servicios,
            facilitando el acceso a profesionales verificados.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledServiceCard elevation={4}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  {service.description}
                </Typography>
              </StyledServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{
          mt: 8,
          p: 4,
          borderRadius: 4,
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(8px)',
          textAlign: 'center'
        }}>
          <Typography variant="h6" sx={{ color: 'grey.300', fontStyle: 'italic', mb: 2 }}>
            "Nuestro objetivo es facilitar el acceso a servicios de calidad en toda Cuba,
            creando oportunidades tanto para proveedores como para clientes."
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 600 }}>
            Rogelio Fernández Araujo
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            Fundador/CEO, TenloListo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Servicios;
