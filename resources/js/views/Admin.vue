<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6" @submit.prevent="crearadmin">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                name="Nombre"
                                id=""
                                v-model="vnombre"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                name="Apellido Paterno"
                                id=""
                                v-model="vapepat"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                name="Apellido Materno"
                                id=""
                                v-model="vapemat"
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
                                v-model="vpass"
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Tipo:</label>
                            <input
                                class="form-control"
                                type="text"
                                name="ConfContraseña"
                                placeholder="Seleccione tipo de administrador"
                                id=""
                                v-model="vtipo"
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
                                v-model="vrut"
                            />
                        </div>
                    </div>

                    <input type="submit" value="Registrar" class="modal-btn" data-bs-toggle="modal" data-bs-target="#hola" />
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

export default {
    components: {
    },
    data() {
        return {
            vnombre:'',
            vapepat:'',
            vapemat:'',
            vpass:'',
            vconpass:'', //igualar a pass
            vrut:'',
            vcorreo:'', //correo estandar
            vtipo: '',
            administrador:{
                //variables
            },
            user:{

            }
        };
    },

    methods:{
        crearadmin(){
            this.administrador.rut_admin = this.vrut,
            this.administrador.contrasena = this.vpass,
            this.administrador.nombre = this.vnombre,
            this.administrador.apellido_pat = this.vapepat,
            this.administrador.apellido_mat = this.vapemat,
            this.administrador.tipo_admin = this.vtipo

            this.axios
            .post('api/administrador',this.administrador)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)

            this.crearuser();
        },

        crearuser(){
            this.user.name = this.vrut,
            this.user.email = 'administrador@gmail.cl',
            this.user.password = this.vpass,
            this.user.password_confirmation = this.vpass,

            this.axios
            .post('api/registro',this.user)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        }
    }
};
</script>
