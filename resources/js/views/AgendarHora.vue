<template>
  <section class="our-services">
    <div class="container">
    <div class="row">
      <form class="col-md-6">

        <div class="row mb-3">
          <label class="form-label">Nombre Completo</label>
          <div class="col">
            <input type="text" class="form-control" placeholder="Nombres" id="inputEmail3">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Apellido Paterno" id="inputEmail3">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Apellio Materno" id="inputEmail3">
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Rut:</label>
            <input class="form-control" type="text" name="Rut" id="" />
          </div>

          <div class="col">
            <label class="form-label">telefono:</label>
            <input class="form-control" type="text" name="telefono" id="" />
          </div>
        </div>


        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Correo Electronico:</label>
            <input class="form-control" type="email" name="correo" id="" />
          </div>
          <div id="calendario" class="col">
            <label class="form-label">Fecha de nacimento:</label>
            <datepicker v-model:value="fechaN" :editable="false" :clearable="false" type="date" format="DD-MM-YYYY"></datepicker>
          </div>

        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">ciudad:</label>
            <input class="form-control" type="text" name="ciudad" id="" />
          </div>

          <div id="calendario" class="col">
            <label class="form-label">Agendar Hora:</label>
            <datepicker v-model:value="date" :minute-step="10" :hour-options="hours" 
              :disabled-date="disabledBeforeTodayAndAfterAWeek" :editable="false"  type="datetime"  format="DD-MM-YYYY HH:mm"></datepicker>
          </div>
        </div>

        <div class="row mb-3">
          <label class="form-label">Motivo de Consulta:</label>
          <div class="col">
            <textarea class="form-control" style="resize: none;" name="motivo" id="" rows="3"></textarea>
          </div>
        </div>

        <input type="submit" value="Agendar" class="modal-btn" />
      </form>
      <div class="col-md-4">
        <img id="imgatencion" src="../../../resources/images/atencion.jpg" alt="Logo Psicóloga" />
      </div>
    </div>
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
      fechaN: '',
      date: '',
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