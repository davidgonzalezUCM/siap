<template>
    <section class="our-services">
        <div class="container">
            <form class="mx-auto" id="formsesion">
                <div class=" mb-3">
                    <label class="form-label">Rut:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Rut: 
                            111111111-1" 
                            name="Rut" 
                            id="" 
                        />
                </div>

                <div class="mb-3">
                    <label class="form-label">Contraseña:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="contraseña" 
                            name="Contraseña" 
                            id="" 
                        />
                </div>
                
                <ul>
                    <li><router-link to="/registro">Registrarme</router-link></li>
                    <li><router-link to="/recuperar_pass">¿olvidaste tu contraseña?</router-link></li>
                </ul>
                    
                <input type="submit" value="Iniciar Sesión" class="modal-btn" />
            </form>
        </div>
    </section>
</template>