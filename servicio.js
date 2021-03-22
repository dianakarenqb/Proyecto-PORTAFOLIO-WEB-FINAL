
//import React,{useState, useEffect} from 'react'
import React from 'react'
import './servicio.css'

import servicio1 from '../../img/diseñoweb.jpg'
import servicio2 from '../../img/bd.jpg'
import servicio3 from '../../img/influencer.jpg'
//import {db} from '../../firebase' 


function Servicio() {
    return (
        <div>
            <section class="services" id="services">
                <h2 class="subtitulo">Servicios</h2>
                <div class="max-width">
                    <div class="serv-content">
                        <div class="card">
                            <div class="box">
                                <div class="foto">
                                    <img src={servicio1} alt=""></img>
                                </div>
                                <div class="text">Diseñadora web</div>
                                <p>Conocimientos en la creación de sitios web.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <div class="foto">
                                    <img src={servicio2} alt=""></img>
                                </div>
                                <div class="text">Base de datos</div>
                                <p>Manejo y gestión con bases de datos.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <div class="foto">
                                    <img src={servicio3} alt=""></img>
                                </div>
                                <div class="text">Influencer</div>
                                <p>Influencer en tecnologías.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicio
