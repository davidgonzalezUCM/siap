<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToFilaEsperaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fila_espera', function (Blueprint $table) {
            $table->foreign(['rut_usuario_fk'], 'fila_espera_ibfk_1')->references(['rut_usuario'])->on('usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fila_espera', function (Blueprint $table) {
            $table->dropForeign('fila_espera_ibfk_1');
        });
    }
}
