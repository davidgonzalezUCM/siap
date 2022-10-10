<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class agenda extends Model
{
    use HasFactory;
    protected $table = 'agenda';
    public $timestamps = false;
    protected $fillable =[
        'rut_admin_fk',
        'rut_usuario_fk',
        'fecha',
        'hora',
        'disponibilidad'
    ];
    public function administrador(){
        return $this->belongsTo(administrador::class);
    }
    public function usuarios(){
        return $this->belongsTo(usuarios::class);
    }
}
