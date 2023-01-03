<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6 " style="display: block; margin: auto" @submit.prevent="agregaragenda">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                id="inputEmail3"
                                v-model="agenda.nombre"
                                disabled
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                id="inputEmail3"
                                v-model="agenda.apellido_pat"
                                disabled
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                id="inputEmail3"
                                v-model="agenda.apellido_mat"
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
                                v-model="agenda.rut_usuario_fk"
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
                                v-model="agenda.telefono"
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
                                v-model="agenda.correo"
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
                                v-model="agenda.ciudad"
                                disabled
                            />
                        </div>

                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Agendar Hora:</label>
                            <datepicker
                                v-model:value="date"
                                :disabled-date="
                                    disabledBeforeTodayAndAfterAWeek
                                "
                                :editable="false"
                                value-type="format"
                                type="date"
                                format="DD-MMM-YYYY"
                                placeholder="Fecha de atención"
                            ></datepicker>
                        </div>

                        <div class="col mb-4">
                            <label class="form-label">Agendar Hora:</label>
                            <datepicker
                                v-model:value="hora"
                                :minute-step="10"
                                :hour-options="hours"
                                :editable="false"
                                value-type="format"
                                type="time"
                                format="HH:mm"
                                placeholder="Fecha de atención"
                            ></datepicker>
                        </div>
                        
                        <div class="row mb-3">
                        <label class="form-label">Motivo de consulta:</label>
                        <div class="col">
                            <textarea
                                class="form-control"
                                style="resize: none"
                                name="motivo"
                                id=""
                                rows="3"
                                placeholder="Motivo de consulta"
                                v-model="agenda.motivo_consulta"
                            ></textarea>
                        </div>
                    </div>
                    </div>

                    <input type="submit" value="Agendar" class="modal-btn" data-bs-toggle="modal" data-bs-target="#hola" />
                </form>
                <div class="col-md-5">
                    <img
                        style="width: 90%; display: block; margin: auto"
                        src="../../../resources/images/views/calendario.png"
                        alt=""
                    />
                </div>
            </div>
            <p class="mt-3">
                En caso de no haber horas disponibles, pero que sientas que
                requieres atención con urgencia, puedes añadirte a la
                <router-link to="/lista_espera">lista de espera</router-link>
                detallando tu caso.
            </p>
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
        <p>Hora agendada correctamente.</p>
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
            date: "",
            hora: "",
            hours: Array.from({ length: 9 }).map((_, i) => i + 9),
            rut_usuario: "",
            agenda:{

            }
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
                    (this.agenda.rut_usuario_fk = rut_usuario),
                        (this.agenda.nombre = nombre),
                        (this.agenda.apellido_pat = apellido_pat),
                        (this.agenda.apellido_mat = apellido_mat),
                        (this.agenda.telefono = telefono),
                        (this.agenda.correo = correo),
                        (this.fechaN = fecha_nacimiento),
                        (this.agenda.ciudad = ciudad)
                })
                .catch((err) => console.log(err));
        },
        disabledBeforeTodayAndAfterAWeek(date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            return (
                date < today ||
                date > new Date(today.getTime() + 14 * 24 * 3600 * 1000)
            );
        },
        agregaragenda(){
            this.agenda.fecha_nacimiento = this.fechaN;
            this.agenda.fecha = this.date;
            this.agenda.hora = this.hora;
            this.axios
            .post('api/agenda',this.agenda)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        }
    },
};
</script>
