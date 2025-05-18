import React from "react";
import { Box, Typography, Avatar, styled } from "@mui/material";
import { TagLabel, MainHeading } from './Hero';
import CustomButton from './CustomButton';

const MemberCard = styled(Box)(({ theme, bgColor }) => ({
    background: bgColor || '#F8F7FF',
    borderRadius: '16px',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    width: '300px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
    }
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(12),
    height: theme.spacing(12),
    fontSize: '2rem',
    backgroundColor: '#E2E8F0',
    color: '#64748B',
    marginBottom: theme.spacing(1),
}));

const teamMembers = [
    {
        letter: "R",
        name: "Rogelio Fernandez Araujo",
        position: "Fundador / CEO",
        description: "Visionario emprendedor con amplia experiencia en negocios digitales.",
        bgColor: '#F8F7FF'
    },
    {
        letter: "Y",
        name: "Yohan Ryunking",
        position: "Jefe de Tecnologías (CTO)",
        description: "Experto en desarrollo de plataformas digitales y soluciones tecnológicas.",
        bgColor: '#F0F9FF'
    },
    {
        letter: "G",
        name: "Gabriela Fresnedo Hernandez",
        position: "Jefa de Marketing",
        description: "Estratega de marketing digital especializada en mercados emergentes.",
        bgColor: '#F8F7FF'
    }
];

const JoinTeamSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(90deg, #7e4dc8, #4389db)',
    borderRadius: '16px',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
    width: '100%',
    maxWidth: '1000px',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3)
}));

const Equipo = () => {
    return (
        <Box sx={{
            py: 8,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#fff',
            gap: 4
        }}>
            <TagLabel>Nuestro Equipo</TagLabel>

            <MainHeading color='text.primary' sx={{ textAlign: 'center', mb: 2 }}>
                Conoce a los <span style={{
                    background: 'linear-gradient(90deg, #7e4dc8 , #4389db )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>líderes</span> detrás de TenloListo
            </MainHeading>

            <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                    textAlign: 'center',
                    maxWidth: '800px',
                    mb: 6,
                    fontSize: '1.1rem'
                }}
            >
                Un equipo apasionado por transformar la experiencia digital en Cuba,
                combinando tecnología, marketing y visión empresarial.
            </Typography>

            <Box sx={{
                display: 'flex',
                gap: 4,
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {teamMembers.map((member, index) => (
                    <MemberCard key={index} bgColor={member.bgColor}>
                        <LargeAvatar
                            sx={{
                                background: 'white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                        >
                            {member.letter}
                        </LargeAvatar>
                        <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                            {member.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: 'primary.main',
                                fontWeight: '500'
                            }}
                        >
                            {member.position}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textAlign: 'center' }}
                        >
                            {member.description}
                        </Typography>
                    </MemberCard>
                ))}
            </Box>

            <JoinTeamSection>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                    ¿Quieres unirte a nuestro equipo?
                </Typography>
                <Typography sx={{ maxWidth: '600px', mb: 3 }}>
                    Estamos buscando talento cubano con pasión por la tecnología y la innovación
                    para crecer juntos en esta aventura.
                </Typography>
                <CustomButton 
                    sx={{ 
                        background: 'white',
                        color: '#7e4dc8',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        padding: '12px 30px',
                        '&:hover': {
                            background: 'rgba(255,255,255,0.9)',
                        }
                    }}
                >
                    Ver posiciones abiertas
                </CustomButton>
            </JoinTeamSection>
        </Box>
    );
};

export default Equipo;