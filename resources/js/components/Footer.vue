<template>
    <footer>
        <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="about-veno">
                            <div class="logo">
                                <img
                                src="../../../resources/images/componentes/logo_footer.png"
                                alt="Logo Footer"
                            />
                            </div>
                            <h4>Redes sociales:</h4>
                            <ul class="social-icons">
                                <li class="socialmargin">
                                    <a href="https://www.facebook.com/psicologa.linares" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/ps.mariajose.caroca/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.doctoralia.cl/maria-jose-caroca-araya/psicologo/linares" target="_blank"><i class="fa fa-book"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="useful-links">
                            <div class="footer-heading">
                                <h4>Preguntas frecuentes</h4>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <ul>
                                        <li><router-link to="/metodo_pago"><i class="fa fa-stop"></i>Métodos de pago</router-link></li>
                                        <li><router-link to="/como_agendar_hora"><i class="fa fa-stop"></i>¿Cómo agendar una hora?</router-link></li>
                                        
                                    </ul>
                                </div>
                                <div class="col-md-5">
                                    <ul>
                                        <li><router-link to="/metodo_atencion"><i class="fa fa-stop"></i>Método de atención</router-link></li>
                                        <li><router-link to="/como_ingresar_sesion"><i class="fa fa-stop"></i>¿Cómo ingresar a una sesión?</router-link></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact-info">
                            <div class="footer-heading">
                                <h4>Información de contacto</h4>
                            </div>
                            <ul>
                                <li><span>Teléfono: </span>+56 9 3391 4571</li>
                                <li><span>Correo:</span>mjcaroca.araya@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</template>
