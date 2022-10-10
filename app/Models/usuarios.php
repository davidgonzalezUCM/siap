<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'usuario';
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
}
