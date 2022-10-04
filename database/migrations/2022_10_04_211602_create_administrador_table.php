<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdministradorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('administrador', function (Blueprint $table) {
            $table->string('rut_admin', 12)->unique('rut_admin');
            $table->string('contrasena', 100);
            $table->string('nombre', 30);
            $table->string('apellido_pat', 15);
            $table->string('apellido_mat', 15);
            $table->string('tipo_admin', 15);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('administrador');
    }
}
