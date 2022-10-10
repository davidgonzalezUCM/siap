<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <form class="col-md-6">
                    <div class="row mb-3">
                        <label class="form-label">Nombre Completo:</label>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Nombres"
                                name="Nombre"
                                id=""
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                name="Apellido Paterno"
                                id=""
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                name="Apellido Materno"
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
                            />
                        </div>
                        <div class="col">
                            <label class="form-label"
                                >Fecha de nacimento:</label
                            >
                            <input type="text" class="form-control" placeholder="selecione fecha"  onfocus="(this.type='date')">
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
                            />
                        </div>

                        <div class="col">
                            <label class="form-label">Agendar Fecha:</label>
                            <input type="text" class="form-control" placeholder="seleccione fecha" onfocus="(this.type='date')">
                        </div>

                        <div class="col">
                            <label class="form-label">Hora:</label>
                            <input type="text" class="form-control" placeholder="seleccione hora" onfocus="(this.type='time')">
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
                                placeholder="Motivo de consulta"
                                rows="3"
                            ></textarea>
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
        
    },
    data() {
        return {
            
        };
    },
    methods: {
        
    },
};
</script>
