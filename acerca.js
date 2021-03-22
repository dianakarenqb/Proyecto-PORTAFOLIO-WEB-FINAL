import React from 'react'
import diana from '../../img/diana.jpeg'
import './acerca.css'
const Acerca = () => {
    return (
        <div>
            <section class="autor" id="yo">
                <h2 class="subtitulo">Mi nombre es Diana Quintana</h2>
                <div class="perfil">
                    <div class="persona">
                        <img src={diana} alt=""></img>
                        <div class="descripcion">
                            <p class="yosoy">Soy estudiante universitaria en la Universidad Estatal de Milagro</p>
                            <p class="yosoy">Estudio la carrera de Ingeniería Software (Quinto Semestre)</p>
                            <p class="yosoy">Tengo conocimientos en algunas áreas tecnológicas</p>
                            <nav>
                                <h6 href="#">Contacto</h6>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Acerca
