<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <form  @submit.prevent="editar">
                        <div class="row mb-3">
                            <label class="form-label">Nombre Completo:</label>
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Nombres"
                                    name="Nombre"
                                    v-model="usuario.nombre"
                                />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Apellido Paterno"
                                    name="Apellido Paterno"
                                    v-model="usuario.apellido_pat"
                                />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Apellio Materno"
                                    name="Apellido Materno"
                                    v-model="usuario.apellido_mat"
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
                                    v-model="usuario.contrasena"
                                />
                            </div>

                            <div class="col">
                                <label class="form-label"
                                    >Confirmar contraseña:</label
                                >
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
                                    v-model="usuario.rut_usuario"
                                />
                            </div>

                            <div class="col">
                                <label class="form-label">Teléfono:</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Teléfono"
                                    name="telefono"
                                    v-model="usuario.telefono"
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
                                    v-model="usuario.correo"
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
                                ></datepicker>
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
                                    v-model="usuario.ciudad"
                                />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label class="form-label"
                                >Motivo de Consulta:</label
                            >
                            <div class="col">
                                <textarea
                                    class="form-control"
                                    style="resize: none"
                                    name="motivo"
                                    v-model="usuario.motivo_consulta"
                                    rows="3"
                                    placeholder="Motivo de consulta"
                                ></textarea>
                            </div>
                        </div>

                        <input
                            type="submit"
                            value="Editar"
                            class="modal-btn"
                        />
                    </form>

                    <div class="row mt-3">
                        <div class="col">
                            <p v-if="agenda.fecha!=null">Usted tiene una hora agendada para: {{agenda.fecha}} a las {{agenda.hora}}.</p>
                            <p v-else>Usted no tiene una hora agendada.</p>
                        </div>
                        <div class="col-sm-3" v-if="agenda.fecha!=null" >
                            <RouterLink :to="{ name: `editaragenda`, params: {id_agenda: id}}" type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></RouterLink>
                            <button type="button" class="btn btn-danger" @click="borraragenda(id)"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <p>Usted está en fila de espera:</p>
                        </div>
                        <div class="col-sm-3">
                            <button
                                type="button"
                                class="btn btn-success"
                                style="margin-right: 10px"
                            >
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button type="button" class="btn btn-danger">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <p>Usted está suscrito a nuestro boletín:</p>
                        </div>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-danger">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <img
                        style="width: 80%; display: block; margin: auto"
                        src="../../../resources/images/views/registro.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Datepicker from "vue-datepicker-next";
export default {
    components: {
        Datepicker,
    },
    data() {
        return {
            id:0,
            fechaN: '',
            rut_usuario:'',
            usuario:{
            },
            agenda:{
            }
        };
    },
        mounted(){
            this.axios.get('api/busca').then((res)=>{
                this.rut_usuario = res.data
                this.traerdatos(this.rut_usuario),
                this.hora_tomada(this.rut_usuario)
            })
            .catch(err=>console.log(err))



        },
        methods:{
        traerdatos(rut_usuario){
                this.axios.get(`api/perfil/`+rut_usuario)
                .then(response=>{
                    const {rut_usuario, contrasena, nombre, apellido_pat, apellido_mat, fecha_nacimiento, correo, telefono, ciudad, motivo_consulta} = response.data
                    this.usuario.rut_usuario = rut_usuario,
                    this.usuario.nombre = nombre,
                    this.usuario.apellido_pat = apellido_pat,
                    this.usuario.apellido_mat = apellido_mat,
                    this.usuario.contrasena = contrasena,
                    this.usuario.telefono = telefono,
                    this.usuario.correo = correo,
                    this.fechaN = fecha_nacimiento,
                    this.usuario.ciudad = ciudad,
                    this.usuario.motivo_consulta = motivo_consulta
                })
                .catch(err=>console.log(err))
            },

        editar(){
            this.usuario.fecha_nacimiento = this.fechaN;
            this.axios
            .put(`api/usuarios/`+ this.usuario.rut_usuario, this.usuario)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        },

        hora_tomada(rut_usuario){
            this.axios.get(`api/agendada/`+rut_usuario)
            .then(response=>{
                const {id_agenda, fecha, hora} = response.data
                    this.agenda.id_agenda = id_agenda,
                    this.agenda.fecha = fecha,
                    this.agenda.hora = hora,
                    this.id = id_agenda
            })
            .catch(err=>console.log(err))
        },

        borraragenda(id){
                    this.axios.delete(`/api/agenda/`+id)
                    .finally(() => window.location.reload())
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>
