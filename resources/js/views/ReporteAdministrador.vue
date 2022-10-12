<template>
    <section class="our-services">
        <div class="container">
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">rut administrador</th>
                        <th scope="col">nombre</th>
                        <th scope="col">apellido paterno</th>
                        <th scope="col">apellido materno</th>
                        <th scope="col">tipo de administrador</th>
                        <th scope="col">acciones</th>
                    </tr>
                </thead>
                <tbody class="table-secondary">
                    <tr v-for="data in admin" :key="data.rut_admin" >
                        <th scope="row">{{data.rut_admin}}</th>
                        <th >{{data.nombre}}</th>
                        <th >{{data.apellido_pat}}</th>
                        <th >{{data.apellido_mat}}</th>
                        <th >{{data.tipo_admin}}</th>
                        <th><button type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" @click="borraradmin(admin.rut_admin)"><i class="fa-solid fa-trash"></i></button></th>
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
                admin:{

                }
            }
        },
        mounted(){
            this.listaradministradore()
        },
        methods:{
            listaradministradore(){
                this.axios.get('/api/administrador')
                .then(response=>{
                    this.admin = response.data
                })
                .catch(err=>console.log(err))
            },
            borraragenda(rut_usuario){
                    this.axios.delete('/api/administrador/${rut_usuario}')
                    .then(response=>{
                        this.listarusuarios()
                    })
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>