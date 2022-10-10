import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./router";
import welcome from "./views/Welcome.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Datepicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);

app.component("welcome", welcome);
app.component('Datepicker', Datepicker);

app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
