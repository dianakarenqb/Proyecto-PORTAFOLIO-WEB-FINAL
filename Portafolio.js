import React from 'react'
import './Portafolio.css'
import proyecto1 from '../../img/proyecto1.jpg'
import proyecto2 from '../../img/proyecto2.jpg'
import proyecto3 from '../../img/proyecto3.jpg'
import proyecto4 from '../../img/proyecto4.jpg'
import proyecto5 from '../../img/proyecto5.jpg'
import proyecto6 from '../../img/proyecto6.jpg'

export const Portafolio = () => {
    return (
        <div>
            <section class="gallery" id="galeria">
                <div class="contenedor">
                    <h2 class="subtitulo">Portafolio</h2>
                    <div class="contenedor-galeria">
                        <img src={proyecto1} class="img-galeria" alt=""></img>
                        <img src={proyecto2} class="img-galeria" alt=""></img>
                        <img src={proyecto3} class="img-galeria" alt=""></img>
                        <img src={proyecto4} class="img-galeria" alt=""></img>
                        <img src={proyecto5} class="img-galeria" alt=""></img>
                        <img src={proyecto6} class="img-galeria" alt=""></img>
                    </div>
                </div>
            </section>
            <div class="imagen-light">
                <img src="img/close.svg" alt="" class="close"></img>
                <img src="" alt="" class="agregar-imagen"></img>
            </div>
        </div>
    )
}
