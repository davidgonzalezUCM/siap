<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'usuario';
    protected $primaryKey = 'rut_usuario';
    public $incrementing = false;
    protected $fillable = [
        'rut_usuario',
        'contrasena',
        'nombre',
        'apellido_pat',
        'apellido_mat',
        'fecha_nacimiento',
        'correo',
        'telefono',
        'ciudad',
        'motivo_consulta'
    ];
    public function filas(){
        return $this->hasMany(fila_espera::class);
    }
    public function agenda(){
        return $this->hasMany(agenda::class);
    }
}
