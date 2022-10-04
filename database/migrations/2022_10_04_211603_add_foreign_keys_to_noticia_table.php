<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToNoticiaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('noticia', function (Blueprint $table) {
            $table->foreign(['id_suscriptor_fk'], 'fk_id_suscriptor')->references(['id_suscriptor'])->on('suscriptor');
            $table->foreign(['rut_admin_fk'], 'fk_rut_admin')->references(['rut_admin'])->on('administrador');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('noticia', function (Blueprint $table) {
            $table->dropForeign('fk_id_suscriptor');
            $table->dropForeign('fk_rut_admin');
        });
    }
}
