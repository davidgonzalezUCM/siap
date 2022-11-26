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

                            <li v-if="rut_usuario != ''"><router-link to="/perfil">{{ usuario.nombre }}</router-link></li>
                            <li v-else><router-link to="/iniciar_sesion">Iniciar sesión</router-link></li>
                            
                            <li v-if="rut_usuario != ''" type="button" @click="logout()">Cerrar sesión</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default{
        data(){
            return{
                rut_usuario:"",
                usuario:{}
            };
        },
        mounted(){
            this.axios.get('api/busca')
            .then((res) => {
                this.rut_usuario = res.data;
                this.traerdatos(this.rut_usuario);
            })
            .catch((err) => console.log(err));
        },
        methods:{
            traerdatos(rut_usuario) {
            this.axios
                .get(`api/perfil/` + rut_usuario)
                .then((response) => {
                    const {
                        rut_usuario,
                        contrasena,
                        nombre,
                        apellido_pat,
                        apellido_mat,
                        fecha_nacimiento,
                        correo,
                        telefono,
                        ciudad,
                        motivo_consulta,
                    } = response.data;
                    (this.usuario.rut_usuario = rut_usuario),
                        (this.usuario.nombre = nombre),
                        (this.usuario.apellido_pat = apellido_pat),
                        (this.usuario.apellido_mat = apellido_mat),
                        (this.usuario.contrasena = contrasena),
                        (this.usuario.telefono = telefono),
                        (this.usuario.correo = correo),
                        (this.fechaN = fecha_nacimiento),
                        (this.usuario.ciudad = ciudad),
                        (this.usuario.motivo_consulta = motivo_consulta);
                })
                .catch((err) => console.log(err));
        },

            logout(){
                this.axios.post('logout')
                .then(() => window.location.replace('http://127.0.0.1:8000/#/'))
                .then(() => window.location.reload())
            }
            
        }
    }
</script>
