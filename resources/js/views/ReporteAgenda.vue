<template>
    <section class="our-services">
        <div class="container">
            <RouterLink to="/agendar_hora" type="button" class="btn btn-success mb-2" >Agendar hora</RouterLink>
            <table class="table table-hover table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Rut administrador</th>
                        <th scope="col">Rut usuario</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Disponibilidad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-secondary">
                    <tr v-for="data in agenda" :key="data.id_agenda" >
                        <th scope="row">{{data.rut_admin_fk}}</th>
                        <th >{{data.rut_usuario_fk}}</th>
                        <th >{{data.fecha}}</th>
                        <th >{{data.hora}}</th>
                        <th >{{data.disponibilidad}}</th>
                        <th><button type="button" class="btn btn-success" style="margin-right: 10px;"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" @click="borraragenda(agenda.id_agenda)"><i class="fa-solid fa-trash"></i></button></th>
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
                agenda:{

                }
            }
        },
        mounted(){
            this.listaragenda()
        },
        methods:{
            listaragenda(){
                this.axios.get('/api/agenda')
                .then(response=>{
                    this.agenda = response.data
                })
                .catch(err=>console.log(err))
            },
            borraragenda(rut_usuario){
                    this.axios.delete('/api/agenda/${rut_usuario}')
                    .then(response=>{
                        this.listarusuarios()
                    })
                    .catch(err=>console.log(err))
                
            }
        }
    }
</script>