import React from "react";
import { Box, Typography, Container, Grid, Input, Button } from "@mui/material";
import { GradientTypography } from "./Nav";    

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#0F1117',
            color: 'white',
            py: 10
        },
        container: {
            maxWidth: '1440px !important'
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3
        },
        link: {
            color: '#A0AEC0',
            fontSize: '14px',
            '&:hover': {
                color: '#8B5CF6',
                transition: 'all 0.3s ease'
            }
        },
        input: {
            backgroundColor: '#1A202C',
            border: '1px solid #2D3748',
            borderRadius: 1,
            px: 2,
            py: 1.5,
            color: 'white',
            '&:focus': {
                borderColor: '#8B5CF6'
            }
        },
        button: {
            background: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)',
            py: 1.5,
            borderRadius: 1,
            '&:hover': {
                opacity: 0.9
            }
        },
        copyright: {
            borderTop: '1px solid #1A1D2A',
            mt: 8,
            pt: 4,
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
        }
    };

    return (
        <Box component="footer" sx={styles.footer}>
            <Container sx={styles.container}>
                <Grid container spacing={8}>
                    {/* Logo y descripción */}
                    <Grid item xs={12} md={6} lg={3} sx={styles.column}>
                        <GradientTypography sx={{fontSize: '24px'}} component="h1">
                            TenloListo
                        </GradientTypography>
                        <Typography sx={{color: '#A0AEC0', fontSize: '14px', lineHeight: 1.7}}>
                            Transformando la experiencia de 
                            <br />
                            compra y descubrimiento en 
                            <br />
                            Cuba a través de tecnología innovadora.
                        </Typography>
                        <Box sx={{display: 'flex', gap: 3}}>
                            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                                <Box key={social} component="a" href="#" sx={styles.link}>
                                    <i className={`fab fa-${social} text-xl`}></i>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Enlaces Rápidos */}
                    <Grid item xs={12} md={6} lg={3} sx={styles.column}>
                        <Typography variant="h6" sx={{fontSize: '18px', fontWeight: 500}}>
                            Enlaces Rápidos
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            {['Catálogos', 'Servicios', 'Eventos', 'Equipo', 'Blog'].map((link) => (
                                <Box key={link} component="a" href="#" sx={styles.link}>
                                    {link}
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contacto */}
                    <Grid item xs={12} md={6} lg={3} sx={styles.column}>
                        <Typography variant="h6" sx={{fontSize: '18px', fontWeight: 500}}>
                            Contacto
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            {[
                                {icon: 'envelope', text: 'info@tenlolisto.cu'},
                                {icon: 'phone', text: '+53 XXXX XXXX'},
                                {icon: 'map-marker-alt', text: 'La Habana, Cuba'}
                            ].map((item) => (
                                <Box key={item.text} sx={{display: 'flex', alignItems: 'center', color: '#A0AEC0', gap: 1.5}}>
                                    <i className={`fa${item.icon === 'envelope' ? 'r' : 's'} fa-${item.icon}`}></i>
                                    <Typography sx={{fontSize: '14px'}}>{item.text}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Newsletter */}
                    <Grid item xs={12} md={6} lg={3} sx={styles.column}>
                        <Typography variant="h6" sx={{fontSize: '18px', fontWeight: 500}}>
                            Mantente Informado
                        </Typography>
                        <Typography sx={{color: '#A0AEC0', fontSize: '14px'}}>
                            Suscríbete a nuestro boletín para recibir noticias y actualizaciones.
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <Input 
                                disableUnderline
                                placeholder="Tu correo electrónico"
                                sx={styles.input}
                            />
                            <Button sx={styles.button}>
                                Suscribirse
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box sx={styles.copyright}>
                    <Typography sx={{color: '#A0AEC0', fontSize: '14px'}}>
                        © 2025 TenloListo. Todos los derechos reservados.
                    </Typography>
                    <Box sx={{display: 'flex', gap: 4}}>
                        {['Términos y Condiciones', 'Política de Privacidad'].map((text) => (
                            <Box key={text} component="a" href="#" sx={styles.link}>
                                {text}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;