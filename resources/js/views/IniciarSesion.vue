<template>
    <section class="our-services">
        <div class="container">
            <form class="mx-auto" id="formsesion"  @submit.prevent="login">
                <div class=" mb-3">
                    <label class="form-label">Rut:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Rut: 
                            xx.xxx.xxx-x" 
                            name="Rut" 
                            id="" 
                            v-model="data.email"
                        />
                </div>

                <div class="mb-3">
                    <label class="form-label">Contraseña:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contraseña" 
                            name="Contraseña" 
                            id="" 
                            v-model="data.password"
                        />
                </div>
                
                <ul>
                    <li><router-link to="/registro">Registrarme</router-link></li>
                    <li><router-link to="/recuperar_pass">Olvidé mi contraseña</router-link></li>
                </ul>
                    
                <input type="submit" value="Iniciar sesión" class="modal-btn" />
            </form>
        </div>
    </section>
</template>
<script>
export default {
    
    components: {
    },
    data() {
        return {
            data:{
                email: '',
                password: '',
                remember: false
            },

        };
    },

    methods:{
        login(){
            this.axios
            .post('login',this.data).then(()=>{
                this.$router.push({name:"perfil"});
            })
            
            .catch(err=>console.log(err))
        }
    }
};
</script>