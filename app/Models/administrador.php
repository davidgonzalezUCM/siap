<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class administrador extends Model
{
    use HasFactory;
    protected $table = 'administrador';
    public $timestamps = false;
    protected $fillable = [
        'rut_admin',
        'contrasena',
        'nombre',
        'apellido_pat',
        'apellido_mat',
        'tipo_admin'
    ];
    public function agendas(){
        return $this->hasMany(agenda::class);
    }
}
