import { createRouter, createWebHistory } from "vue-router";
const Welcome = () => import("./views/Welcome");

const routes = [
    {
        path: "/",
        name: "welcome",
        component: Welcome,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
