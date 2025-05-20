import React from 'react';
import { Box, Typography, Button, styled, Container } from '@mui/material';
import { TagLabel, StatCard, ButtonGroup } from './Hero';
import { LocalMall, Search, PhoneIphone, Shield } from '@mui/icons-material';
import CustomButton from './CustomButton';

const featureData = [
    {
        icon: LocalMall,
        title: "Catálogos Digitales",
        description: "Gestiona y visualiza todos tus productos en un solo lugar",
        iconColor: "primary.main" // usando color del tema
    },
    {
        icon: Search,
        title: "Descubrimiento Inteligente",
        description: "Encuentra productos y servicios de forma rápida y eficiente",
        iconColor: "secondary.main" // usando color del tema
    },
    {
        icon: PhoneIphone,
        title: "Acceso Móvil",
        description: "Gestiona tu negocio desde cualquier lugar con tu smartphone",
        iconColor: "primary.main" // usando color del tema
    },
    {
        icon: Shield,
        title: "Compras seguras",
        description: "Transacciones protegidas y proceso de compra verificado",
        iconColor: "secondary.main" // usando color del tema
    }
];


const MainHeading2 = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    fontWeight: 'bold',
    // color:"red",
    marginBottom: theme.spacing(3),
    lineHeight: '.9'
}));

const Section2 = () => {
    return (
        <Box sx={{
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4
        }}>
            <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                <TagLabel sx={{ marginBottom: '16px', fontSize: '15px', fontWeight: 'bold', color: '#3B82F6' }}>
                    Explora Nuestras Funcionalidades
                </TagLabel>
                <MainHeading2 variant='h3' color='text.primary'>
                    Todo lo que necesitas en un <span style={{
                        background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>único lugar</span>{' '}
                </MainHeading2>
                <Typography variant="h6" color="textSecondary" sx={{ marginBottom: '32px', fontSize: '20px' }}>
                    Tenlolisto revoluciona la forma de descubrir, comprar y disfrutar de productos y servicios en Cuba con una plataforma diseñada para facilitar tu vida.
                </Typography>
            </Container>
            <Box sx={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
                {featureData.map((feature, index) => (
                    <StatCard key={index} elevation={3} sx={{ width: '250px', padding: '32px 24px' }}>
                        <feature.icon sx={{ fontSize: 40, color: feature.iconColor, mb: 2 }} />
                        <Typography variant="h6" sx={{ mb: 1 }}>{feature.title}</Typography>
                        <Typography color="text.secondary">{feature.description}</Typography>
                    </StatCard>
                ))}
            </Box>
            <ButtonGroup>
                <CustomButton
                    color="secondary"
                    endIcon={<LocalMall />}
                >
                    Descubrir Catálogos
                </CustomButton>
            </ButtonGroup>
        </Box>
    );
};

export default Section2;