<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->string('rut_usuario', 12)->primary();
            $table->string('contrasena', 100);
            $table->string('nombre', 30);
            $table->string('apellido_pat', 15);
            $table->string('apellido_mat', 15);
            $table->date('fecha_nacimiento');
            $table->string('correo', 30)->nullable()->unique('correo');
            $table->string('telefono', 14)->nullable()->unique('telefono');
            $table->string('ciudad', 20);
            $table->string('motivo_consulta', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}
