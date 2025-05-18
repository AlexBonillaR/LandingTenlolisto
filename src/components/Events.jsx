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

const Events = () => {
    return (
        <Box sx={{
            paddingTop: '72px',
            backgroundColor: '#f5f5f5',
            minHeight: { xs: 'auto', md: '100vh' },
            maxHeight: { md: '1200px' },
            overflow: 'auto'
        }}>
            <Box sx={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '40px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                height: 'fit-content'
            }}>
                <TagLabel>Descubre y Reserva</TagLabel>

                <MainHeading color='text.primary' sx={{ textAlign: 'center', maxWidth: '800px' }}>
                    Encuentra los mejores{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>eventos en Cuba</span>{' '}
                </MainHeading>

                <Description color="text.secondary" sx={{ textAlign: 'center', maxWidth: '700px', mb: 4 }}>
                    Conoce, reserva y asiste a los eventos más populares. Nunca te pierdas un
                    concierto, feria o encuentro importante.
                </Description>

                {/* Evento Destacado */}
                <Box sx={{
                    width: '100%',
                    background: 'linear-gradient(120deg, #7c3aed 0%, #7c3aed 45%, #4F46E5 55%, #4F46E5 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
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
                            <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                                Evento Destacado
                            </Typography>
                        </TagLabel>

                        <Typography variant="h4">
                            Gran Inauguración TenloListo
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarMonth fontSize="small" />
                            <Typography>Próximamente, 2025</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Schedule fontSize="small" />
                            <Typography>Por anunciar</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationOn fontSize="small" />
                            <Typography>La Habana, Cuba</Typography>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                ...commonButtonStyles,
                                bgcolor: 'white',
                                color: '#7c3aed',
                                '&:hover': {
                                    ...commonButtonStyles['&:hover'],
                                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                                },
                                alignSelf: 'flex-start'
                            }}
                        >
                            Más información
                        </Button>
                    </Box>
                    <Box sx={{
                        background: 'linear-gradient(120deg, #7c3aed 0%, #7c3aed 45%, #4F46E5 55%, #4F46E5 100%)',
                        flex: '0 0 40%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                    }}>
                        <TagLabel sx={{ background: 'rgba(245, 245, 245, 0.44)', backdropFilter: 'blur(8px)', borderRadius: '50%', p: 2 }}>
                            <CalendarMonth sx={{
                            fontSize: 100,
                            color: 'rgba(255, 255, 255, 0.9)',
                        }} />
                        </TagLabel>
                    </Box>
                </Box>

                {/* Próximos Eventos */}
                <Typography variant="h5" sx={{ alignSelf: 'flex-start', mb: 3, color: 'text.primary' }}>
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
                    <EventCard>
                        <ImagePlaceholder>
                            <MusicNote sx={{ fontSize: 40, color: '#7c3aed', m: 2 }} />
                        </ImagePlaceholder>
                        <Typography variant="h6" sx={{ mb: 2 }}>Festival de Música Cubana</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <CalendarMonth fontSize="small" color="action" />
                            <Typography variant="body2">15 de Mayo, 2025</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Schedule fontSize="small" color="action" />
                            <Typography variant="body2">5:00 PM</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <LocationOn fontSize="small" color="action" />
                            <Typography variant="body2">La Habana</Typography>
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

                    <EventCard>
                        <ImagePlaceholder>
                            <Restaurant sx={{ fontSize: 40, color: '#7c3aed', m: 2 }} />
                        </ImagePlaceholder>
                        <Typography variant="h6" sx={{ mb: 2 }}>Feria Gastronómica</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <CalendarMonth fontSize="small" color="action" />
                            <Typography variant="body2">22 de Mayo, 2025</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Schedule fontSize="small" color="action" />
                            <Typography variant="body2">12:00 PM</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <LocationOn fontSize="small" color="action" />
                            <Typography variant="body2">Santiago de Cuba</Typography>
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

                    <EventCard>
                        <ImagePlaceholder>
                            <Movie sx={{ fontSize: 40, color: '#7c3aed', m: 2 }} />
                        </ImagePlaceholder>
                        <Typography variant="h6" sx={{ mb: 2 }}>Festival de Cine</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <CalendarMonth fontSize="small" color="action" />
                            <Typography variant="body2">5 de Junio, 2025</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Schedule fontSize="small" color="action" />
                            <Typography variant="body2">7:00 PM</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <LocationOn fontSize="small" color="action" />
                            <Typography variant="body2">La Habana</Typography>
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
