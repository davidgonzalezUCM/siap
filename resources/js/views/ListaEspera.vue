<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6" @submit.prevent="agregarfila">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                id="inputEmail3"
                                v-model="fila_espera.nombre"
                                disabled
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                id="inputEmail3"
                                v-model="fila_espera.apellido_pat"
                                disabled
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                id="inputEmail3"
                                v-model="fila_espera.apellido_mat"
                                disabled
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Rut:</label>
                            <input
                                class="form-control"
                                type="text"
                                name="Rut"
                                placeholder="Rut"
                                id=""
                                v-model="fila_espera.rut_usuario_fk"
                                disabled
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Teléfono:</label>
                            <input
                                class="form-control"
                                type="text"
                                name="telefono"
                                placeholder="Teléfono"
                                id=""
                                v-model="fila_espera.telefono"
                                
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
                                name="correo"
                                placeholder="Correo electrónico"
                                id=""
                                v-model="fila_espera.correo"
                            />
                        </div>
                        <div id="calendario" class="col">
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
                                disabled
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Ciudad:</label>
                            <input
                                class="form-control"
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                id=""
                                v-model="fila_espera.ciudad"
                                disabled
                            />
                        </div>

                    </div>

                    <div class="row mb-3">
                        <label class="form-label">Motivo de espera:</label>
                        <div class="col">
                            <textarea
                                class="form-control"
                                style="resize: none"
                                name="motivo"
                                id=""
                                rows="3"
                                placeholder="Motivo de espera (agregar fecha tentativa de atención)"
                                v-model="fila_espera.motivo_espera"
                            ></textarea>
                        </div>
                    </div>

                    <input type="submit" value="Agregar a lista de espera" class="modal-btn" data-bs-toggle="modal" data-bs-target="#hola" />
                </form>
                <div class="col-md-5">
                    <img
                        style="width: 70%; display: block; margin: auto"
                        src="../../../resources/images/views/lista.png"
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
        <p>Agregado exitósamente a lista de espera.</p>
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
              fila_espera:{

              },
            };
        },
        mounted() {
        this.axios
            .get("api/busca")
            .then((res) => {
                this.rut_usuario = res.data;
                this.traerdatos(this.rut_usuario)
            })
            .catch((err) => console.log(err));
    },
        methods: {
            traerdatos(rut_usuario) {
            this.axios
                .get(`api/perfil/` + rut_usuario)
                .then((response) => {
                    const {
                        rut_usuario,
                        nombre,
                        apellido_pat,
                        apellido_mat,
                        fecha_nacimiento,
                        correo,
                        telefono,
                        ciudad
                    } = response.data;
                    (this.fila_espera.rut_usuario_fk = rut_usuario),
                        (this.fila_espera.nombre = nombre),
                        (this.fila_espera.apellido_pat = apellido_pat),
                        (this.fila_espera.apellido_mat = apellido_mat),
                        (this.fila_espera.telefono = telefono),
                        (this.fila_espera.correo = correo),
                        (this.fechaN = fecha_nacimiento),
                        (this.fila_espera.ciudad = ciudad)
                })
                .catch((err) => console.log(err));
        },
            agregarfila(){
            this.fila_espera.fecha_nacimiento = this.fechaN;
            this.axios
            .post('api/fila_espera',this.fila_espera)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
            },
        }
    };
    </script>