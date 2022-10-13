# Sistema de Información y Agenda para Psicóloga (SIAP)

<p align="center">
  <img src=public/images/Logo.png alt="Logo Psicóloga"/>
</p>

## Sobre el proyecto

El proyecto de memoria SIAP es desarrollado con intenciones de cumplir las falencias de una psicóloga que desea poseer un sistema de agenda online para llevar control de sus atenciones y que sus pacientes puedan solicitar horas sin la necesidad de esperar a poder contactarse con la profesional para agendar una atención.

## Instalación

Para obtener el proyecto se debe utilizar el comando git clone:

- git clone https://github.com/davidgonzalezUCM/siap

Con esto crearemos una copia del repositorio en nuestro ordenador, en donde podremos realizar cambios a este proyecto.

Además, este proyecto utiliza la librería **Font Awesome** para apoyarse en el diseño de íconos y diversos agregados visuales. En caso de que esta librería no sea descargada a su repositorio local al momento de clonar el proyecto, puede hacerlo con el siguiente comando git clone:

- git clone https://github.com/FortAwesome/Font-Awesome

Para no romper las dependencias internas del proyecto, **Font Awesome** debe ser almacenado dentro de la carpeta **public**.

## Tecnologías y dependencias

Antes de empezar la instalación de nuestras tecnologías para *backend* y *frontend* debemos instalar otros paquetes:

- [Composer](https://getcomposer.org)
- [Node.js](https://nodejs.org/es/)

Debido a que en esta ocasión se asume que el proyecto será clonado, estas son todas las dependencias que debemos tener instaladas. **Composer** nos dejará trabajar con el *framework* **Laravel**, mientras que **Node.js** nos dará acceso tanto al gesto de paquetes **NPM** como a el *framework* **Vue.js**.

Estas son las versiones utilizadas en este proyecto:

- **Laravel:** 9.22.1
- **Node.js:** 16.13.0
- **NPM:** 6.14.17
- **Vue.js:** 4.5.15

## Antes de montar

Se debe mencionar que, al igual que muchas otras aplicaciones web, SIAP utiliza [Xampp](https://www.apachefriends.org/es/index.html) para montar sus servicios. Además, aprovechando este mismo servicio, utiliza una base de datos **MariaDB**.

## Pasos a realizar después de obtener el repositorio

Debemos realizar una serie de pasos luego de obtener el repositorio. A continuación se presentan los comandos a realizar con la intención de evitar problemas de dependencias de SIAP.

- composer update

Este comando indicará que debe instalar y actualizar los paquetes de composer dentro del proyecto.

- cp .env.example .env

Este comando realizará una copia del archivo .env.example y lo renombrará a .env, esto debido a que el archivo .env es utilizado para las conexiones con la base de datos.

- npm install

Este comando indicará que debe instalar las dependencias que detalladas en el archivo **package.json**.

- npm run dev

Este comando compilará todas nuestras vistas en formato .vue.

## Obtener la libreria Font-Awesome

SIAP se alimenta gracias a la librería de íconos **Font-Awesome**, sin embargo, esta se está trabajando de manera local, obtenida a través de su [repositorio GitHub](https://github.com/FortAwesome/Font-Awesome).
Es importante clonar este repositorio para la utilización correcta de SIAP, debido a que, en caso de no realizar esto, SIAP perderá el formato de sus íconos presentes.
Para obtener esta librería debemos ejecutar el siguiente comando:

- git clone https://github.com/FortAwesome/Font-Awesome

Es importante destacar que este comando debe ser ejecutado dentro del directorio **public** de nuestro proyecto.

## Al momento de montar

Se debe tener en cuenta que al estar trabajando con 2 tecnologías, debemos utilizar los siguientes comandos:

- php artisan serve
  
Con este comando podemos montar SIAP, siempre y cuando **Xampp** tenga sus servicios activos.

- npm run dev

Con este comando podemos compilar todos los cambios que hayamos realizados en nuestras vistas de **Vue.js**.

- npm run watch

Con este comando podemos compilar en tiempo real los cambios que hayamos realizado en nuestas vistas de **Vue.js**, con lo cual no debemos estar corriendo el comando como en el caso de utilizar **npm run dev**