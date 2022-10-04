<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilaEsperaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fila_espera', function (Blueprint $table) {
            $table->bigInteger('id_espera', true);
            $table->string('rut_usuario_fk', 12)->index('rut_usuario_fk');
            $table->string('nombre', 30);
            $table->string('apellido_pat', 15);
            $table->string('apellido_mat', 15);
            $table->date('fecha_nacimiento');
            $table->string('correo', 30)->nullable();
            $table->string('telefono', 14)->nullable();
            $table->string('ciudad', 20);
            $table->string('motivo_espera', 100);

            $table->unique(['correo', 'telefono'], 'correo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fila_espera');
    }
}
