<template>
    <section class="popular-places">
    <div class="container">
        <br /><br /><br />
        {{ this.success }}
        <div class="card p-5">
            <h4>Envía un correo a todos los suscriptores</h4>
            <form v-on:submit.prevent="send">
                <div class="row">
                    <label>
                        <input
                            type="text"
                            class="form-control mb-3"
                            placeholder="Asunto"
                            v-model="data.emailTopic"
                        />
                    </label>
                </div>
                <div class="row">
                    <label>
                        <input
                            type="email"
                            class="form-control mb-3"
                            placeholder="Correo de origen"
                            v-model="data.senderEmail"
                        />
                    </label>
                </div>
                <div class="row">
                    <label>
                        <textarea
                            class="form-control mb-3"
                            placeholder="Texto del correo"
                            style="resize:none; height: 200px;"
                            v-model="data.emailBody"
                        ></textarea>
                    </label>
                </div>
                <button type="submit" class="btn btn-outline-success">
                    Enviar correo
                </button>
            </form>
            <div class="pt-3 danger">
                {{ this.error }}
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            data: {},
            error: "",
            success: ""
        };
    },

    methods: {
        send() {
            if (this.data.emailBody !== "") {
                axios.post("api/email/send", this.data).then(res => {
                    this.success = "Emails sent successfully";
                });
            } else {
                this.error = "This field is required";
            }
        }
    }
};
</script>
