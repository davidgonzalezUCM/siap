<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\suscriptorController;
use App\Http\Controllers\administradorController;
use App\Http\Controllers\fila_esperaController;
use App\Http\Controllers\agendaController;
use App\Http\Controllers\usuariosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->group(function(){
    Route::resource('suscriptor',suscriptorController::class);
    Route::resource('administrador',administradorController::class);
    Route::resource('fila_espera',fila_esperaController::class);
    Route::resource('agenda',agendaController::class);
    Route::resource('usuarios',usuariosController::class);

});

Route::post(
    'email/send', 
    [
        \App\Http\Controllers\suscriptorsController::class, 
        'sendEMail'
    ]
);

Route::post('registro', [\App\Http\Controllers\registroController::class, 'registro']);
Route::post('login', [\App\Http\Controllers\loginController::class, 'login']);
