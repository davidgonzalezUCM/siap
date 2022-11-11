<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agenda', function (Blueprint $table) {
            $table->bigInteger('id_agenda', true);
            $table->string('rut_admin_fk', 12)->index('rut_admin_fk');
            $table->string('nombre', 30);
            $table->string('apellido_pat', 15);
            $table->string('apellido_mat', 15);
            $table->string('fecha_nacimiento', 20);
            $table->string('correo', 30)->nullable();
            $table->string('telefono', 14)->nullable();
            $table->string('ciudad', 20);
            $table->string('motivo_consulta', 100);
            $table->string('fecha', 20);
            $table->time('hora');
            $table->string('disponibilidad', 13);
            $table->string('rut_usuario_fk', 12)->index('agenda_ibfk_2');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agenda');
    }
}
