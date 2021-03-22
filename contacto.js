import React from 'react'
import './contacto.css'

const Contacto = () => {
    return (
        <div>
            <section class="contact" id="contact">
                <h2 class="subtitulo">Contáctame</h2>
                <div class="max-width">
                    <div class="contact-content">
                        <div class="column right">
                            <div class="text">Escribeme</div>
                            <form class="contact-form" action="#" method="POST">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" class="fullname" placeholder="Nombre"></input>
                                    </div>
                                    <div class="field email">
                                        <input type="text" class="email-input" placeholder="Email"></input>
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" class="subject" placeholder="Destinatario"></input>
                                </div>
                                <div class="field textarea">
                                    <textarea class="message" cols="30" rows="10" placeholder="Mensaje.."></textarea>
                                </div>
                                <div class="button-area">
                                    <button class="send-msg" type="submit" name="send">Contactar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 class="titulo-final">Autores:<p>&copy; Fernando Yuquilema | Diana Quintana</p></h2>
            </section>
        </div>
    )
}

export default Contacto
