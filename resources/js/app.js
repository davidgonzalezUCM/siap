import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./router";
import welcome from "./views/Welcome.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const app = createApp(App);

app.component("welcome", welcome);

app.use(router);
app.mount("#app");
