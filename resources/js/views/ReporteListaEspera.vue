<template>
    <section class="our-services">
        <div class="container">
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
                        <th scope="col">Ciudad</th>
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
                        <th >{{data.ciudad}}</th>
                        <th><button type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" @click="borrarfila(fila.rut_usuario)"><i class="fa-solid fa-trash"></i></button></th>
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
            borrarusuario(rut_usuario){
                    this.axios.delete('/api/usuarios/${rut_usuario}')
                    .then(response=>{
                        this.listarusuarios()
                    })
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>