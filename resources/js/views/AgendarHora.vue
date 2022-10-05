<template>
  <section class="our-services">
    <div class="container">
      <form>

        <div class="row mb-3">
          <label class="form-label">Nombre Completo</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" placeholder="Nombres" id="inputEmail3">
          </div>
          <div class="col-sm-2">
            <input type="text" class="form-control" placeholder="Apellido Paterno" id="inputEmail3">
          </div>
          <div class="col-sm-2">
            <input type="text" class="form-control" placeholder="Apellio Materno" id="inputEmail3">
          </div>
        </div>

        <div class="row mb-3">
          <label class="form-label">Rut:</label>
          <div class="col-sm-3">
            <input class="form-control" type="text" name="Rut" id="" />
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Fecha de nacimento:</label>
          <div id="calendario">
            <datepicker v-model:value="fechaN" type="date" format="DD-MM-YYYY"></datepicker>
          </div>
        </div>

        <div class="mb-3">
          <label>Correo Electronico:</label>
          <div class="col-sm-3">
            <input class="form-control" type="email" name="correo" id="" />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">telefono:</label>
          <div class="col-sm-3">
            <input class="form-control" type="text" name="telefono" id="" />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">ciudad:</label>
          <div class="col-sm-3">
            <input class="form-control" type="text" name="ciudad" id="" />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Motivo de Consulta:</label>
          <div class="col-sm-3">
            <textarea class="form-control" name="motivo" id="" rows="3"></textarea>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Agendar Hora:</label>
          <div id="calendario">
            <datepicker v-model:value="date" :minute-step="10" :hour-options="hours" :default-value="new Date()"
              :disabled-date="disabledBeforeTodayAndAfterAWeek" type="datetime" format="DD-MM-YYYY HH:mm"></datepicker>
          </div>
        </div>

        <input type="submit" value="Agendar" class="modal-btn" />
      </form>

    </div>
  </section>
</template>
  
<script>
import Datepicker from 'vue-datepicker-next';
export default {
  name: 'calendario',
  components: {
    Datepicker,
  },
  data() {
    return {
      fechaN: null,
      date: new Date(),
      hours: Array.from({ length: 9 }).map((_, i) => i + 9),
    }
  },
  methods: {
    disabledBeforeTodayAndAfterAWeek(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today || date > new Date(today.getTime() + 14 * 24 * 3600 * 1000);
    }
  },
}


</script>