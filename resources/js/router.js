import { createRouter, createWebHashHistory } from "vue-router";
const Welcome = () => import("./views/Welcome");
const Contacto = () => import("./views/Contacto");

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
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
