<template>
    <section class="our-services">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row mb-5">
                        <RouterLink to="/reporte_usuario" type="button" class="btn btn-success btn-lg">Reporte de Usuarios
                        </RouterLink>
                    </div>
                    <div class="row mb-5">
                        <RouterLink to="/reporte_suscriptor" type="button" class="btn btn-success btn-lg">Reporte de Suscriptores</RouterLink>
                    </div>
                    <div class="row mb-5">
                        <RouterLink to="/reporte_agenda" type="button" class="btn btn-success btn-lg">Reporte de Agenda</RouterLink>
                    </div>
                    <div class="row mb-5">
                        <RouterLink to="/reporte_administrador" type="button" class="btn btn-success btn-lg">Reporte de Administradores</RouterLink>
                    </div>
                    <div class="row mb-5">
                        <RouterLink to="/reporte_fila_de_espera" type="button" class="btn btn-success btn-lg">Reporte de Listas de espera</RouterLink>
                    </div>
                </div>
                <div class="col-md-5">
                    <img style="width: 80%; display:block; margin:auto;"
                        src="../../../resources/images/views/ajustes_reportes.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>