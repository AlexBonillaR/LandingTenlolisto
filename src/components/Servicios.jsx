import React from 'react';
import { Box, Typography, Grid, Paper, styled } from '@mui/material';
import { Build, Business, LocalShipping, HomeWork, Forum, VerifiedUser } from '@mui/icons-material';
import { TagLabel, MainHeading } from './Hero';

const StyledServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(180, 192, 212, 0.1)',
  backdropFilter: 'blur(8px)',
  borderRadius: theme.spacing(2),
  border: 'solid .5px rgba(180, 192, 212, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.08)', // Sombra más clara
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.12)', // Sombra más clara en hover
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

const MainHeading2 = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    fontWeight: 'bold',
    // color:"red",
    marginBottom: theme.spacing(3),
    lineHeight: '.9'
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
      py: 9,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      position: 'relative',
      // overflow: 'hidden',
      // minHeight: { xs: 'auto', md: '100vh' },
      backgroundColor: 'rgb(30, 41, 59)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '10%',
        right: '0%',
        width: '40%',
        height: '40%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96, 19, 116, 0.6) -150%, rgba(73, 32, 83, 0) 150%)',
        filter: 'blur(50px)',
        zIndex: 0,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '5%',
        left: '-5%',
        width: '40%',
        height: '40%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 68, 155, 0.6) 0%, rgba(30, 68, 155, 0) 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
      }
    }}>
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        height: 'fit-content'
      }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <TagLabel sx={{ color: 'secondary.light' }}>
            Servicios Profesionales
          </TagLabel>
          <MainHeading2 sx={{ color: 'white', mt: 1, mb: 2 }}>
            Servicios de calidad <Box component="span" sx={{
              background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>a tu alcance</Box>
          </MainHeading2>
          <Typography variant="h6" sx={{ color: 'grey.300', maxWidth: 600, mx: 'auto' }}>
            Conectamos a los cubanos con los mejores proveedores de servicios,
            facilitando el acceso a profesionales verificados.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            px: { xs: 2, sm: 4 }
          }}
        >
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <StyledServiceCard elevation={4} sx={{ width: '100%', maxWidth: 350 }}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography variant="h6" sx={{ color: 'white', mb: 1,  }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400',  }}>
                  {service.description}
                </Typography>
              </StyledServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{          
          p: 6, // Aumentado de 4 a 6 para más espacio interno
          mt: 8, // Añadido margen superior
          mx: 4, // Añadido margen horizontal
          borderRadius: 4,
          border:'solid .5px rgba(180, 192, 212, 0.2)',
          background: 'rgba(180, 192, 212, 0.1)',
          backdropFilter: 'blur(8px)',
          textAlign: 'center',
          maxWidth: 1000, // Añadido para controlar el ancho máximo
          margin: '3rem auto' // Centrado horizontal y espaciado vertical
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
