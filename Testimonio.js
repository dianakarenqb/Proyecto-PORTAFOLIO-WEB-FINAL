import React from 'react'
import './Testimonio.css'
import diana from '../../img/diana.jpeg'
import selena from '../../img/perfil4.jpg'
import fernando from '../../img/fernando.jpeg'

const Testimonio = () => {
    return (
        <div>
            <section class="perfilacerca" id="mi">
                <div class="demi contenedor">
                    <h2 class="subtitulo">Testimonio</h2>
                    <div class="tarjetas">
                        <div class="tarjeta">
                            <img src={diana} alt=""></img>
                            <div class="contenido-texto-tarjeta">
                                <h4>Diana Quintana</h4>
                                <p>- Operadora de Diseño.</p>
                                <p>Tiene habilidades y destrezas para el diseño en el desarrollo web.</p>
                            </div>
                        </div>
                        <div class="tarjeta">
                            <img src={fernando} alt=""></img>
                            <div class="contenido-texto-tarjeta">
                                <h4>Fernando Yuquilema</h4>
                                <p>- Programador Web.</p>
                                <p>Es trabajador, persevera, coopera con su equipo de trabajo de principio a fin.</p>
                            </div>
                        </div>
                        <div class="tarjeta">
                            <img src={selena} alt=""></img>
                            <div class="contenido-texto-tarjeta">
                                <h4>Selena Torres</h4>
                                <p>- Encargado de Codificación.</p>
                                <p>Ha mejorado su rendimiento en el manejo y análisis de datos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonio
