<template>
    <section class="our-services">
        <div class="container">
        <div>
            <h2>Reporte de Listas de Espera</h2>
        </div>
        <br>
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Rut usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido paterno</th>
                        <th scope="col">Apellido materno</th>
                        <th scope="col">Fecha nacimiento</th>
                        <th scope="col">Correo electrónico</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Motivo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-secondary">
                    <tr v-for="data in fila" :key="data.id_espera" >
                        <th scope="row">{{data.rut_usuario_fk}}</th>
                        <th >{{data.nombre}}</th>
                        <th >{{data.apellido_pat}}</th>
                        <th >{{data.apellido_mat}}</th>
                        <th >{{data.fecha_nacimiento}}</th>
                        <th >{{data.correo}}</th>
                        <th >{{data.telefono}}</th>
                        <th >{{data.motivo_espera}}</th>
                        <th><RouterLink :to="{ name: `editarlista`, params: {id_espera: data.id_espera}}" type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></RouterLink>
                        <button type="button" class="btn btn-danger" @click="borrarfila(data.id_espera)"><i class="fa-solid fa-trash"></i></button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
            return{
                fila:{

                }
            }
        },
        mounted(){
            this.listarfilas()
        },
        methods:{
            listarfilas(){
                this.axios.get('/api/fila_espera')
                .then(response=>{
                    this.fila = response.data
                })
                .catch(err=>console.log(err))
            },
            borrarfila(id_espera){
                    this.axios.delete(`/api/fila_espera/`+id_espera)
                    .then(response=>{
                        this.listarfilas()
                    })
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>