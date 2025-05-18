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

export const GradientTypography = styled(Typography)({
    background: 'linear-gradient(45deg, #7e4dc8, #4389db)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.5rem'
});

const Nav = () => {
    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: 'white' }}>
            <Container 
                maxWidth={false} 
                disableGutters 
                sx={{ 
                    padding: '1rem 20px',
                    borderBottom: '1px solid rgba(224, 224, 224, 0.2)'
                }}
            >
                <StyledToolbar>
                    <GradientTypography sx={{fontSize: '30px'}} component="h1">
                        TenloListo
                    </GradientTypography>
                    <MenuList>
                        <ListItem>Catálogos</ListItem>
                        <ListItem>Servicios</ListItem>
                        <ListItem>Eventos</ListItem>
                        <ListItem>Equipo</ListItem>
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
