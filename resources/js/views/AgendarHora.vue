<template>
    <div id="calendario">
      <datepicker v-model:value="date" :minute-step="10" :hour-options="hours" :default-value="new Date()"
          :disabled-date="disabledBeforeTodayAndAfterAWeek" type="datetime" format="DD-MM-YYYY HH:mm"></datepicker>
    </div>
  </template>
  
  <script>
    import Datepicker from 'vue-datepicker-next';
    export default{
      name: 'calendario',
      components:{
        Datepicker,
      },
      data(){
        return{
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