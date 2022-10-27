<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6" @submit.prevent="editaradmin">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                name="Nombre"
                                id=""
                                v-model="administrador.nombre"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                name="Apellido Paterno"
                                id=""
                                v-model="administrador.apellido_pat"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                name="Apellido Materno"
                                id=""
                                v-model="administrador.apellido_mat"
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
                                v-model="administrador.contrasena"
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
                                v-model="administrador.tipo_admin"
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
                                v-model="administrador.rut_admin"
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

            administrador:{

            }
        };
    },
    mounted(){
            this.traerdatos()
        },
    methods:{
        traerdatos(){
                this.axios.get(`api/administrador/`+this.$route.params.rut_admin)
                .then(response=>{
                    const {rut_admin, contrasena, nombre, apellido_pat, apellido_mat,tipo_admin} = response.data
                    this.administrador.rut_admin = rut_admin,
                    this.administrador.contrasena = contrasena,
                    this.administrador.nombre = nombre,
                    this.administrador.apellido_pat = apellido_pat,
                    this.administrador.apellido_mat = apellido_mat,
                    this.administrador.tipo_admin = tipo_admin
                })
                .catch(err=>console.log(err))
            },
        editaradmin(){
            this.axios
            .put(`api/administrador/${this.$route.params.rut_admin}`, this.administrador)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        }
    }
};
</script>
