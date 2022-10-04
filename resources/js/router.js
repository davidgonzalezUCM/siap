import { createRouter, createWebHashHistory } from "vue-router";
const Welcome = () => import("./views/Welcome");
const Contacto = () => import("./views/Contacto");
const Servicios = () => import("./views/Servicios");
const AgendarHora = () => import("./views/AgendarHora");

const routes = [
    {
        path: "/",
        name: "welcome",
        component: Welcome,
    },
    {
        path: "/contacto",
        name: "contacto",
        component: Contacto,
    },{
        path: "/servicios",
        name: "servicios",
        component: Servicios,
    },
    {
        path: "/agendarhora",
        name: "agendarhora",
        component: AgendarHora,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
