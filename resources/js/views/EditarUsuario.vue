<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6" @submit.prevent="modificarusuario">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                name="Nombre"
                                id=""
                                v-model="usuarios.nombre"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                name="Apellido Paterno"
                                id=""
                                v-model="usuarios.apellido_pat"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                name="Apellido Materno"
                                id=""
                                v-model="usuarios.apellido_mat"
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Contraseña:</label>
                            <input
                                class="form-control"
                                type="text"
                                name="Contraseña"
                                placeholder="Contraseña"
                                id=""
                                v-model="usuarios.contrasena"
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Confirmar contraseña:</label>
                            <input
                                class="form-control"
                                type="text"
                                name="ConfContraseña"
                                placeholder="Vuelva a ingresar su contraseña"
                                id=""
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Rut:</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Rut"
                                name="Rut"
                                id=""
                                v-model="usuarios.rut_usuario"
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Teléfono:</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Teléfono"
                                name="telefono"
                                id=""
                                v-model="usuarios.telefono"
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label"
                                >Correo electrónico:</label
                            >
                            <input
                                class="form-control"
                                type="email"
                                placeholder="Correo electrónico"
                                name="correo"
                                id=""
                                v-model="usuarios.correo"
                            />
                        </div>
                        <div class="col">
                            <label class="form-label"
                                >Fecha de nacimento:</label
                            >
                            <datepicker
                                v-model:value="fechaN"
                                :editable="false"
                                :clearable="false"
                                value-type="format"
                                type="date"
                                format="DD-MMM-YYYY"
                                placeholder="Fecha de nacimiento"
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Ciudad:</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Ciudad"
                                name="ciudad"
                                id=""
                                v-model="usuarios.ciudad"
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="form-label">Motivo de Consulta:</label>
                        <div class="col">
                            <textarea
                                class="form-control"
                                style="resize: none"
                                name="motivo"
                                id=""
                                rows="3"
                                placeholder="Motivo de consulta"
                                v-model="usuarios.motivo_consulta"
                            ></textarea>
                        </div>
                    </div>

                    <input type="submit" value="Registrarme" class="modal-btn" data-bs-toggle="modal" data-bs-target="#hola" />
                </form>
                <div class="col-md-5">
                    <img style="width: 80%; display:block; margin:auto;"
                    src="../../../resources/images/views/registro.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>

    <div class="modal" tabindex="-1" id="hola">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #ced4da;">
        <h5 class="modal-title">Aviso</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Registro exitoso.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import Datepicker from "vue-datepicker-next";
export default {
    
    components: {
        Datepicker,
    },
    data() {
        return {
            fechaN: '',
            usuarios:{
                
            },

        };
    },
    mounted(){
            this.traerdatos()
        },
    methods:{
        traerdatos(){
                this.axios.get(`api/usuarios/`+this.$route.params.rut_usuario)
                .then(response=>{
                    const {rut_usuario, nombre, apellido_pat, apellido_mat, contrasena, telefono, correo, fecha_nacimiento, ciudad, motivo_consulta} = response.data
                    this.usuarios.rut_usuario = rut_usuario,
                    this.usuarios.nombre = nombre,
                    this.usuarios.apellido_pat = apellido_pat,
                    this.usuarios.apellido_mat = apellido_mat,
                    this.usuarios.contrasena = contrasena,
                    this.usuarios.telefono = telefono,
                    this.usuarios.correo = correo,
                    this.fechaN = fecha_nacimiento,
                    this.usuarios.ciudad = ciudad,
                    this.usuarios.motivo_consulta = motivo_consulta
                })
                .catch(err=>console.log(err))
            },
        modificarusuario(){
            this.usuarios.fecha_nacimiento = this.fechaN;
            this.axios
            .put(`api/usuarios/${this.$route.params.rut_usuario}`, this.usuarios)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        }
    }
};
</script>
