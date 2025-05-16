import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    List,
    ListItem,
    styled,
    Container // <-- Importa Container
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: 0, // Quita el padding aquí
    backgroundColor: 'white',
    borderBottom: '1px solid rgba(224, 224, 224, 0.2)'
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

const GradientTypography = styled(Typography)({
    background: 'linear-gradient(45deg, #7e4dc8, #4389db)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.5rem'
});

const Nav = () => {
    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <Container maxWidth="lg" disableGutters sx={{ padding: '1rem 2rem' }}>
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
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            padding: '12px 30px',
                            borderRadius: '30px',
                            fontSize: '20px',
                            textTransform: 'capitalize',
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;
