import React from 'react';
import { Box, Typography, Button, Paper, styled, Icon as MuiIcon } from '@mui/material';
import { CalendarMonth, MusicNote, Restaurant, Movie, LocationOn, Schedule, AirplaneTicket } from '@mui/icons-material';
import { TagLabel, MainHeading, Description } from './Hero';

const EventCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
}));

const ImagePlaceholder = styled(Box)({
    height: '150px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    marginBottom: '16px'
});

const commonButtonStyles = {
    borderRadius: '50px',
    padding: '10px 24px',
    textTransform: 'none',
    fontWeight: 600,
    transition: 'all 0.2s',
    '&:hover': {
        transform: 'translateY(-2px)',
    }
};

const upcomingEvents = [
    {
        icon: <MusicNote sx={{ fontSize: 40, color: '#7c3aed', m: 2 }} />,
            label: "Música",
        title: "Festival de Música Cubana",
        date: "15 de Mayo, 2025",
        time: "5:00 PM",
        location: "La Habana"
    },
    {
        icon: <Restaurant sx={{ fontSize: 40, color: '#7c3aed', m: 2 }} />,
        label: "Comida",
        title: "Feria Gastronómica",
        date: "22 de Mayo, 2025",
        time: "12:00 PM",
        location: "Santiago de Cuba"
    },
    {
        icon: <Movie sx={{ fontSize: 40, color: '#7c3aed', m: 2 }} />,
        label: "Cine",
        title: "Festival de Cine",
        date: "5 de Junio, 2025",
        time: "7:00 PM",
        location: "La Habana"
    }
];

const EventCardItem = ({ event }) => (
    <EventCard>
        <ImagePlaceholder sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 1
        }}>
            {event.icon}
            <Typography
                sx={{
                    fontWeight: 600,
                    color: '#7c3aed'
                }}
            >
                {event.label}
            </Typography>
        </ImagePlaceholder>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {event.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <CalendarMonth sx={{ 
                background: 'linear-gradient(90deg, #7c3aed, #4389db)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {event.date}
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Schedule sx={{ 
                background: 'linear-gradient(90deg, #7c3aed, #4389db)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }} />
            <Typography variant="body2">{event.time}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <LocationOn sx={{ 
                background: 'linear-gradient(90deg, #7c3aed, #4389db)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }} />
            <Typography variant="body2">{event.location}</Typography>
        </Box>
        <Button variant="outlined" fullWidth sx={{
            ...commonButtonStyles,
            borderColor: '#7c3aed',
            color: '#7c3aed',
            '&:hover': {
                ...commonButtonStyles['&:hover'],
                borderColor: '#7c3aed',
                bgcolor: 'rgba(124, 58, 237, 0.04)'
            }
        }}>
            Reservar
        </Button>
    </EventCard>
);

// Añadir este estilo personalizado para el heading principal, similar al de Servicios
const MainHeading2 = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    lineHeight: '1'
}));

const Events = () => {
    return (
        <Box sx={{
            // Actualizar el contenedor principal
            py: 9,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            position: 'relative',
            backgroundColor: '#f5f5f5',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: '10%',
                right: '0%',
                width: '40%',
                height: '40%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) -150%, rgba(73, 32, 83, 0) 150%)',
                filter: 'blur(50px)',
                zIndex: 0,
            }
        }}>
            <Box sx={{
                position: 'relative',
                zIndex: 1,
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                maxWidth: 1200,
                mx: 'auto',
                px: { xs: 2, sm: 4 }
            }}>
                <TagLabel>Descubre y Reserva</TagLabel>

                {/* Reemplazar MainHeading por MainHeading2 */}
                <MainHeading2 sx={{ textAlign: 'center', maxWidth: '800px' }}>
                    Encuentra los mejores{' '}
                    <Box component="span" sx={{
                        background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>eventos en Cuba</Box>
                </MainHeading2>

                <Description sx={{
                    textAlign: 'center',
                    maxWidth: '700px',
                    mb: 4,
                    color: 'text.secondary'
                }}>
                    Conoce, reserva y asiste a los eventos más populares. Nunca te pierdas un
                    concierto, feria o encuentro importante.
                </Description>

                {/* Evento Destacado */}
                <Box sx={{
                    width: '95%', // Cambiado a 95% para dar más espacio en los bordes
                    maxWidth: '1400px',
                    margin: '0 auto',
                    background: 'linear-gradient(120deg, #7c3aed 0%, #7c3aed 45%, #4F46E5 55%, #4F46E5 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}>
                    <Box sx={{
                        flex: '0 0 60%',
                        p: 4,
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>
                        <TagLabel variant="caption" sx={{
                            textAlign: 'initial',
                            background: 'rgba(245, 245, 245, 0.44)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '20px',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <AirplaneTicket sx={{ fontSize: 20, color: 'white' }} />
                            <Typography sx={{ fontWeight: 800, color: 'white' }}> {/* Aumentado weight */}
                                Evento Destacado
                            </Typography>
                        </TagLabel>

                        <Typography variant="h4" sx={{
                            fontWeight: 800,  // Añadido bold
                            fontSize: '2.5rem', // Aumentado tamaño
                            letterSpacing: '-0.02em' // Ajuste de espaciado
                        }}>
                            Gran Inauguración TenloListo
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarMonth fontSize="small" />
                            <Typography sx={{ fontWeight: 600 }}> {/* Añadido semi-bold */}
                                Próximamente, 2025
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Schedule fontSize="small" />
                            <Typography sx={{ opacity: 0.9 }}>Por anunciar</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationOn fontSize="small" />
                            <Typography sx={{ fontWeight: 600 }}> {/* Añadido semi-bold */}
                                La Habana, Cuba
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                ...commonButtonStyles,
                                bgcolor: 'white',
                                color: '#7c3aed',
                                fontWeight: 700, // Añadido más bold al botón
                                fontSize: '1.05rem', // Ligeramente más grande
                                '&:hover': {
                                    ...commonButtonStyles['&:hover'],
                                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                                },
                                alignSelf: 'flex-start',
                                mt: 1 // Añadido margen superior
                            }}
                        >
                            Más información
                        </Button>
                    </Box>
                    <Box sx={{
                        background: 'linear-gradient(120deg, #7c3aed 0%, #7c3aed 45%, #4F46E5 55%, #4F46E5 100%)',
                        flex: '0 0 40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        gap: 3 // Aumentado el gap
                    }}>
                        <TagLabel sx={{
                            background: 'rgba(245, 245, 245, 0.44)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '50%',
                            p: 2,
                            transition: 'transform 0.3s ease', // Añadido transición
                            '&:hover': {
                                transform: 'scale(1.05)' // Efecto hover
                            }
                        }}>
                            <CalendarMonth sx={{
                                fontSize: 70, // Reducido un poco más
                                color: 'rgba(255, 255, 255, 0.9)',
                            }} />
                        </TagLabel>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'white',
                                fontWeight: 800, // Aumentado bold
                                textAlign: 'center',
                                fontSize: '1.3rem', // Aumentado tamaño
                                textTransform: 'uppercase', // Añadido mayúsculas
                                letterSpacing: '0.05em' // Añadido espaciado
                            }}
                        >
                            ¡Mantente atento!
                        </Typography>
                    </Box>
                </Box>

                {/* Próximos Eventos */}
                <Typography variant="h5" sx={{ alignSelf: 'flex-start', mb: 3, color: 'text.primary', fontWeight: 600, }}>
                    Próximos Eventos
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)'
                    },
                    gap: 3,
                    width: '100%',
                    mb: 4
                }}>
                    {upcomingEvents.map((event, index) => (
                        <EventCardItem key={index} event={event} />
                    ))}
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        ...commonButtonStyles,
                        mb: 3,
                        bgcolor: '#4389db',
                        '&:hover': {
                            ...commonButtonStyles['&:hover'],
                            bgcolor: '#2f6099'
                        }
                    }}
                >
                    Ver todos los eventos
                </Button>

                <Typography variant="body1" color="text.secondary">
                    ¿Organizas eventos?{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: 'primary.main',
                            cursor: 'pointer',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        Regístralos en nuestra plataforma
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default Events;
