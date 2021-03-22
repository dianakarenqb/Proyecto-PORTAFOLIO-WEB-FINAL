import React from 'react'
//import Configuracion from '../configuracion/configuracion';
import './header.css';

const Header = () => {
    return (
        <div>
            <header class="header" id="inicio">
                <div class="scroll-up-btn">
                     <i class="fas fa-angle-up"></i>
                </div>
                <nav class="navbar">
                    <div class="max-width">
                        
                        <ul class="menu">
                            <li><a href="#home" class="menu-btn">Portada</a></li>
                            <li><a href="#yo" class="menu-btn">Acerca</a></li>
                            <li><a href="#services" class="menu-btn">Servicios</a></li>
                            <li><a href="#galeria" class="menu-btn">Portafolio</a></li>
                            <li><a href="#mi" class="menu-btn">Testimonios</a></li>
                            <li><a href="#contact" class="menu-btn">Contacto</a></li>
                            <li><a href="#configuracion" class="menu-btn">Configuración</a></li>
                        </ul>
                        <div class="menu-btn">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>
                <section class="home" id="home">
                    <div class="max-width">
                        <div class="row">
                            <div class="home-content">
                                <div class="text-1">Hola, Mi nombre es</div>
                                <div class="text-2">Diana Quintana</div>
                                <div class="text-3">Soy estudiante de la carrera de Ingeniería Software.<span class="typing"></span></div>
                                <a href="#contact">Contacto</a>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header
