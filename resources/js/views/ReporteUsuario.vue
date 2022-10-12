<template>
    <section class="our-servicee">
        <div class="container">
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">rut usuario</th>
                        <th scope="col">nombre</th>
                        <th scope="col">apellido paterno</th>
                        <th scope="col">apellide materno</th>
                        <th scope="col">fecha nacimiento</th>
                        <th scope="col">correo</th>
                        <th scope="col">telefono</th>
                        <th scope="col">ciudad</th>
                        <th scope="col">acciones</th>
                    </tr>
                </thead>
                <tbody class="table-secondary">
                    <tr v-for="user in usuario" :key="user.rut_usuario" >
                        <th scope="row">{{user.rut_usuario}}</th>
                        <th >{{user.nombre}}</th>
                        <th >{{user.apellido_pat}}</th>
                        <th >{{user.apellido_mat}}</th>
                        <th >{{user.fecha_nacimiento}}</th>
                        <th >{{user.correo}}</th>
                        <th >{{user.telefono}}</th>
                        <th >{{user.ciudad}}</th>
                        <th><button type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" @click="borrarusuario(usuario.rut_usuario)"><i class="fa-solid fa-trash"></i></button></th>
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
                usuario:{

                }
            }
        },
        mounted(){
            this.listarusuarios()
        },
        methods:{
            listarusuarios(){
                this.axios.get('/api/usuarios')
                .then(response=>{
                    this.usuario = response.data
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