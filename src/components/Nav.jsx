import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    styled,
    Container
} from '@mui/material';
import CustomButton from './CustomButton';
import useActiveSection from '../hooks/useActiveSection';
import useScrollDirection from '../hooks/useScrollDirection';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: 0,
    backgroundColor: 'white',
    borderBottom: '1px solid rgba(224, 224, 224, 0.2)',
    maxWidth: '1200px',
    margin: '0 auto'
});

const MenuList = styled(List)({
    display: 'flex',
    color: 'black',
    gap: '2rem',
    '& .MuiListItem-root': {
        width: 'auto',
        fontSize: '1.2rem',
        cursor: 'pointer',
    }
});

const StyledListItem = styled(ListItem)(({ active }) => ({
  width: 'auto',
  fontSize: '1.2rem',
  cursor: 'pointer',
  color: active ? '#7e4dc8' : 'black',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#7e4dc8',
  }
}));

export const GradientTypography = styled(Typography)({
    background: 'linear-gradient(45deg, #7e4dc8, #4389db)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.5rem'
});

const Nav = () => {
  const activeSection = useActiveSection();
  const isVisible = useScrollDirection();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'catalogos', label: 'Catálogos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'equipo', label: 'Equipo' }
  ];

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'white',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <Container 
        maxWidth={false} 
        disableGutters 
        sx={{ 
          padding: '1rem 20px',
          borderBottom: '1px solid rgba(224, 224, 224, 0.2)'
        }}
      >
        <StyledToolbar>
          <GradientTypography 
            sx={{fontSize: '30px'}} 
            component="h1"
            onClick={() => scrollToSection('inicio')}
            style={{ cursor: 'pointer' }}
          >
            TenloListo
          </GradientTypography>
          <MenuList>
            {navItems.map((item) => (
              <StyledListItem
                key={item.id}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </StyledListItem>
            ))}
          </MenuList>
          <CustomButton color="primary">
            Iniciar Sesión
          </CustomButton>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
