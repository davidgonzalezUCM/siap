<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class agenda extends Model
{
    use HasFactory;
    protected $table = 'agenda';
    public $timestamps = false;
    protected $primaryKey = 'id_agenda';
    public $incrementing = false;
    protected $fillable =[
        'rut_usuario_fk',
        'nombre',
        'apellido_pat',
        'apellido_mat',
        'fecha_nacimiento',
        'correo',
        'telefono',
        'ciudad',
        'motivo_consulta',
        'fecha',
        'hora'
    ];

    protected $attributes = [
        'rut_admin_fk'=> 'admin123',
        'disponibilidad' => 'no disponible'
    ];

    public function administrador(){
        return $this->belongsTo(administrador::class);
    }
    public function usuarios(){
        return $this->belongsTo(usuarios::class, 'rut_usuario_fk');
    }
}
