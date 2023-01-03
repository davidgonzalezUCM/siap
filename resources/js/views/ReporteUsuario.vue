<template>
    <section class="our-services">
        <div class="container">
            <div>
                <h2>Reporte de Usuarios</h2>
            </div>
        <br>
            <RouterLink to="/registro" type="button" class="btn btn-success mb-2" >Agregar nuevo usuario</RouterLink>
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Rut usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido paterno</th>
                        <th scope="col">Apellide materno</th>
                        <th scope="col">Fecha nacimiento</th>
                        <th scope="col">Correo electrónico</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Acciones</th>
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
                        <th><RouterLink :to="{ name: `editarusuario`, params: {rut_usuario: user.rut_usuario}}" type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></RouterLink>
                        <button type="button" class="btn btn-danger" @click="borrarusuario(user.rut_usuario)"><i class="fa-solid fa-trash"></i></button></th>
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
                    this.axios.delete(`/api/usuarios/`+rut_usuario)
                    .then(response=>{
                        this.listarusuarios()
                    })
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>