<template>
    <section class="our-services">
        <div class="container">
            <RouterLink to="/enviar_correo" type="button" class="btn btn-success mb-2" >Enviar información</RouterLink>
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Correo electrónico</th>
                    </tr>
                </thead>
                <tbody class="table-secondary">
                    <tr v-for="data in suscriptor" :key="data.id_suscriptor" >
                        <th scope="row">{{data.email}}</th>
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