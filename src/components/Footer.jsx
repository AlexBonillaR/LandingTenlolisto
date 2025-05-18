import React from "react";

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>¡Únete a nuestra comunidad!</h2>
                <p style={{ fontSize: '16px', color: '#555' }}>Síguenos en nuestras redes sociales para estar al tanto de nuestras novedades.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/facebook-icon.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/twitter-icon.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/instagram-icon.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
                </a>
            </div>
        </div>
    );
}   