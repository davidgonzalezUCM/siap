<template>
    <section class="our-services">
        <div class="container">
            <RouterLink to="" type="button" class="btn btn-success mb-2" >enviar informacion</RouterLink>
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">correo</th>
                        <th scope="col">acciones</th>
                    </tr>
                </thead>
                <tbody class="table-secondary">
                    <tr v-for="data in suscriptor" :key="data.id_suscriptor" >
                        <th scope="row">{{data.id_suscriptor}}</th>
                        <th >{{data.correo}}</th>
                        <th><button type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" @click="borrarsusciptor(suscriptor.id_suscriptor)"><i class="fa-solid fa-trash"></i></button></th>
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
                suscriptor:{

                }
            }
        },
        mounted(){
            this.listarsuscriptores()
        },
        methods:{
            listarsuscriptores(){
                this.axios.get('/api/suscriptor')
                .then(response=>{
                    this.suscriptor = response.data
                })
                .catch(err=>console.log(err))
            },
            borrarsusciptor(id_suscriptor){
                    this.axios.delete('/api/suscriptor')
                    .then(response=>{
                        this.listarusuarios()
                    })
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>