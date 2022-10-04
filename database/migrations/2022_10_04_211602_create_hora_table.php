<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHoraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hora', function (Blueprint $table) {
            $table->bigInteger('id_hora', true);
            $table->bigInteger('id_agenda_fk')->index('id_agenda_fk');
            $table->string('rut_usuario_fk', 12)->index('rut_usuario_fk');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hora');
    }
}
