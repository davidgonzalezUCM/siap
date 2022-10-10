import { createRouter, createWebHashHistory } from "vue-router";
const Welcome = () => import("./views/Welcome");
const Contacto = () => import("./views/Contacto");
const Servicios = () => import("./views/Servicios");
const AgendarHora = () => import("./views/AgendarHora");
const IniciarSesion = () => import("./views/IniciarSesion");

const MetodoPago = () => import("./views/MetodoPago");
const MetodoAtencion = () => import("./views/MetodoAtencion");
const ComoIngresarSesion = () => import("./views/ComoIngresarSesion");
const ComoAgendarHora = () => import("./views/ComoAgendarHora");

const Registro = () => import("./views/Registro");
const RecuperarPass = () => import("./views/RecuperarPass");
const ListaEspera = () => import("./views/ListaEspera");
const Perfil = () => import("./views/Perfil");

const Admin = () => import("./views/Admin");


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
        path: "/agendar_hora",
        name: "agendarhora",
        component: AgendarHora,
    },
    {
        path: "/metodo_pago",
        name: "metodopago",
        component: MetodoPago,
    },
    {
        path: "/iniciar_sesion",
        name: "iniciarsesion",
        component: IniciarSesion,
    },
    {
        path: "/metodo_atencion",
        name: "metodoatencion",
        component: MetodoAtencion,
    },
    {
        path: "/como_ingresar_sesion",
        name: "comoingresarsesion",
        component: ComoIngresarSesion,
    },
    {
        path: "/como_agendar_hora",
        name: "comoagendarhora",
        component: ComoAgendarHora,
    },
    {
        path: "/registro",
        name: "registro",
        component: Registro,
    },
    {
        path: "/recuperar_pass",
        name: "recuperarpass",
        component: RecuperarPass,
    },
    {
        path: "/lista_espera",
        name: "listaespera",
        component: ListaEspera,
    },
    {
        path: "/perfil",
        name: "perfil",
        component: Perfil,
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
    },

];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        return {top: 0}
    }
});
