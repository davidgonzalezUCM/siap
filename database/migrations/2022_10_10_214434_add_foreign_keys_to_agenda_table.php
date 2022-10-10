<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('agenda', function (Blueprint $table) {
            $table->foreign(['rut_admin_fk'], 'agenda_ibfk_1')->references(['rut_admin'])->on('administrador');
            $table->foreign(['rut_usuario_fk'], 'agenda_ibfk_2')->references(['rut_usuario'])->on('usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('agenda', function (Blueprint $table) {
            $table->dropForeign('agenda_ibfk_1');
            $table->dropForeign('agenda_ibfk_2');
        });
    }
}
