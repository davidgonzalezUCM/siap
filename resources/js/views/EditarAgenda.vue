<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6 " style="display: block; margin: auto" @submit.prevent="modificaragenda">
                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Rut:</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Rut"
                                name="Rut"
                                id=""
                                v-model="agenda.rut_usuario_fk"
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
            date: "",
            hora: "",
            hours: Array.from({ length: 9 }).map((_, i) => i + 9),
            agenda:{
                
            }
        };
    },
    mounted(){
            this.traerdatos()
        },
    methods: {
        traerdatos(){
                this.axios.get(`api/agenda/`+this.$route.params.id_agenda)
                .then(response=>{
                    const {rut_usuario_fk, id_agenda, fecha, hora} = response.data
                    this.agenda.rut_usuario_fk = rut_usuario_fk,
                    this.agenda.id_agenda = id_agenda,
                    this.date = fecha,
                    this.hora = hora
                })
                .catch(err=>console.log(err))
            },
        disabledBeforeTodayAndAfterAWeek(date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            return (
                date < today ||
                date > new Date(today.getTime() + 14 * 24 * 3600 * 1000)
            );
        },
        modificaragenda(){
            this.agenda.fecha = this.date;
            this.agenda.hora = this.hora;
            this.axios
            .put(`api/agenda/${this.$route.params.id_agenda}`, this.agenda)
            .catch(err=>console.log(err))
            .finally(() => this.loading = false)
        }
    },
};
</script>
