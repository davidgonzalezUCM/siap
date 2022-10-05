<template>
    <section class="popular-places">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="left-content">
                        <h3>
                            <strong>Puedes contactarme directamente:</strong>
                        </h3>
                        <br />
                        <form action="mailto:mjcaroca.araya@gmail.com?subject=Contacto vía página web" method="post"
                            enctype="text/plain">
                            <li>
                                <label>Nombre:</label>
                                <input type="text" name="Nombre" id="textnombre" />
                            </li>
                            <br />
                            <li>
                                <label id="labelcomentario">Deja tu comentario:</label>
                                <textarea name="Comentario" id="textcomentario"></textarea>
                            </li>
                            <br />
                            <input type="submit" value="Enviar" class="modal-btn" style="margin-left: 29%" />
                        </form>
                    </div>
                </div>

                <div class="col">
                    <div class="right-content">
                        <h3>
                            <strong>También puedes ver mis datos de
                                contacto:</strong>
                        </h3>
                        <br />
                        <div class="float">
                            <img src="img/correo.png" alt="" />
                        </div>
                        <h5 class="text-contact">
                            <strong>Correo:</strong> mjcaroca.araya@gmail.com
                        </h5>

                        <br />

                        <div class="float">
                            <img src="img/telefono.png" alt="" />
                        </div>
                        <h5 class="text-contact">
                            <strong>Número de teléfono:</strong> +56 9 3391 4571
                        </h5>
                        <br />
                        <a href="https://api.whatsapp.com/send?phone=56933914571" class="fa fa-whatsapp"
                            target="_blank">
                            Da clic aquí para comunicarnos vía WhatsApp
                            directamente.</a>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </section>
</template>
