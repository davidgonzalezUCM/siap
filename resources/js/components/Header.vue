<template>
    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-link to="/"
                        ><div class="logo">
                            <img
                                src="../../../resources/images/componentes/logo.png"
                                alt="Logo Psicóloga"
                            /></div
                    ></router-link>
                    <nav id="primary-nav" class="dropdown cf">
                        <ul class="dropdown menu">
                            <li><router-link to="/">Inicio</router-link></li>

                            <li><router-link to="/servicios">Servicios</router-link></li>

                            <li><router-link to="/agendar_hora">Agenda tu hora</router-link></li>

                            <li><router-link to="/contacto">Contacto</router-link></li>

                            <li><router-link to="/iniciar_sesion">Iniciar sesión</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
