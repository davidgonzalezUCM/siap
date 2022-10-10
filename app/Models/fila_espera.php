<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class fila_espera extends Model
{
    use HasFactory;
    protected $table = 'fila_espera';
    public $timestamps = false;
    protected $fillable = [
        'rut_usuario_fk',
        'nombre',
        'apellido_pat',
        'apellido_mat',
        'fecha_nacimiento',
        'correo',
        'telefono',
        'ciudad',
        'motivo_espera'
    ];
    public function usuarios(){
        return $this->belongsTo(usuarios::class);
    }
}
