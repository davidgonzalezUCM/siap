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
                                id="inputEmail3"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellido Paterno"
                                id="inputEmail3"
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Apellio Materno"
                                id="inputEmail3"
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
                                type="date"
                                format="DD-MM-YYYY"
                                placeholder="Fecha de nacimiento"
                            ></datepicker>
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
                                placeholder="Motivo de espera"
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
        name: "calendario",
        components: {
            Datepicker,
        },
        data() {
            return {
                fechaN: "",
                date: "",
                hours: Array.from({ length: 9 }).map((_, i) => i + 9),
            };
        },
        methods: {
            disabledBeforeTodayAndAfterAWeek(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
    
                return (
                    date < today ||
                    date > new Date(today.getTime() + 14 * 24 * 3600 * 1000)
                );
            },
        },
    };
    </script>