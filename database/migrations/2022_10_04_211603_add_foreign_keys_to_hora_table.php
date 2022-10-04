<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToHoraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hora', function (Blueprint $table) {
            $table->foreign(['id_agenda_fk'], 'hora_ibfk_1')->references(['id_agenda'])->on('agenda');
            $table->foreign(['rut_usuario_fk'], 'hora_ibfk_2')->references(['rut_usuario'])->on('usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('hora', function (Blueprint $table) {
            $table->dropForeign('hora_ibfk_1');
            $table->dropForeign('hora_ibfk_2');
        });
    }
}
