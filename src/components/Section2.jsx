import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { MainHeading, TagLabel, StatCard, ButtonGroup } from './Hero';
import { Storage, Search, PhoneIphone, Shield } from '@mui/icons-material';
import CustomButton from './CustomButton';

const featureData = [
    {
        icon: Storage,
        title: "Catálogos Digitales",
        description: "Gestiona y visualiza todos tus productos en un solo lugar",
        iconColor: "#8B5CF6" // purple
    },
    {
        icon: Search,
        title: "Descubrimiento Inteligente",
        description: "Encuentra productos y servicios de forma rápida y eficiente",
        iconColor: "#3B82F6" // blue
    },
    {
        icon: PhoneIphone,
        title: "Acceso Móvil",
        description: "Gestiona tu negocio desde cualquier lugar con tu smartphone",
        iconColor: "#2DD4BF" // teal
    },
    {
        icon: Shield,
        title: "Compras seguras",
        description: "Transacciones protegidas y proceso de compra verificado",
        iconColor: "#F59E0B" // amber
    }
];
const BottomGroup = [
    {
        icon: Storage,
    }
]

const Section2 = () => {
    return (
        <Box sx={{ 
            padding: '40px 24px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 4
        }}>
            <TagLabel sx={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold', color: '#3B82F6' }}>
                Explora Nuestras Funcionalidades
            </TagLabel>
            <MainHeading variant='h3' color='text.primary'>
                Todo lo que necesitas en un <span style={{
                    background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>único lugar</span>{' '}
            </MainHeading>
            <Typography variant="h6" color="textSecondary" sx={{ marginBottom: '32px', fontSize: '18px', textAlign: 'center' }}>
                Tenlolisto revoluciona la forma de descubrir, comprar y disfrutar de productos y servicios en Cuba con una plataforma diseñada para facilitar tu vida.
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
                {featureData.map((feature, index) => (
                    <StatCard key={index} elevation={3} sx={{ width: '300px', padding: '32px 24px' }}>
                        <feature.icon sx={{ fontSize: 40, color: feature.iconColor, mb: 2 }} />
                        <Typography variant="h6" sx={{ mb: 1 }}>{feature.title}</Typography>
                        <Typography color="text.secondary">{feature.description}</Typography>
                    </StatCard>
                ))}
            </Box>
            <ButtonGroup>
                <CustomButton 
                    color="secondary" 
                    endIcon={<Storage />}
                >
                    Descubrir Catálogos
                </CustomButton>
            </ButtonGroup>
        </Box>
    );
};

export default Section2;