<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6" @submit.prevent="crearusuario">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                name="Nombre"
                                v-model="vnombre"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                name="Apellido Paterno"
                                v-model="vapepat"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                name="Apellido Materno"
                                v-model="vapemat"
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Contraseña:</label>
                            <input
                                class="form-control"
                                type="password"
                                name="Contraseña"
                                placeholder="Contraseña"
                                id=""
                                v-model="vpass"
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Confirmar contraseña:</label>
                            <input
                                class="form-control"
                                type="password"
                                name="ConfContraseña"
                                placeholder="Vuelva a ingresar su contraseña"
                                id=""
                                v-model="vconpass"
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
                                v-model="vrut"
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Teléfono:</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Teléfono"
                                name="telefono"
                                v-model="vtelefono"
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
                                v-model="vcorreo"
                            />
                        </div>
                        <div class="col">
                            <label class="form-label"
                                >Fecha de nacimento:</label
                            >
                            <datepicker
                                v-model:value="vfecha"
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
                                v-model="vciudad"
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
                                v-model="vmotivo"
                                rows="3"
                                placeholder="Motivo de consulta"
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
            vnombre:'',
            vapepat:'',
            vapemat:'',
            vpass:'',
            vconpass:'',
            vrut:'',
            vtelefono:'',
            vcorreo:'',
            vfecha: '',
            vciudad:'',
            vmotivo:'',

            usuarios:{
            },
            
            user:{
            },

        };
    },

    methods:{
        crearusuario(){
            this.usuarios.rut_usuario = this.vrut,
            this.usuarios.contrasena = this.vpass,
            this.usuarios.nombre = this.vnombre,
            this.usuarios.apellido_pat = this.vapepat,
            this.usuarios.apellido_mat = this.vapemat,
            this.usuarios.fecha_nacimiento = this.vfecha,
            this.usuarios.correo = this.vcorreo,
            this.usuarios.telefono = this.vtelefono,
            this.usuarios.ciudad = this.vciudad,
            this.usuarios.motivo_consulta = this.vmotivo
            
            this.axios
            .post('api/usuarios',this.usuarios)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)

            this.crearuser();
            
        },
        crearuser(){
            this.user.name = this.vrut,
            this.user.email = this.vcorreo,
            this.user.password = this.vpass,
            this.user.password_confirmation = this.vconpass,

            this.axios
            .post('api/registro',this.user)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        }
    }
};
</script>
