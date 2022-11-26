<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\fila_espera;

class fila_esperaController extends Controller
{
    
    public function index()
    {
        $fila_espera = fila_espera::all()->toArray();
        return array_reverse($fila_espera);
    }

    public function store(Request $request)
    {
        $fila_espera = new fila_espera([
            'rut_usuario_fk' => $request ->input('rut_usuario_fk'),
            'nombre' => $request ->input('nombre'),
            'apellido_pat' => $request ->input('apellido_pat'),
            'apellido_mat' => $request ->input('apellido_mat'),
            'fecha_nacimiento' => $request ->input('fecha_nacimiento'),
            'correo' => $request ->input('correo'),
            'telefono' => $request ->input('telefono'),
            'ciudad' => $request ->input('ciudad'),
            'motivo_espera' => $request ->input('motivo_espera'),
        ]);
        $fila_espera ->save();
        return response()->json('fila creado');
    }

    public function show($rut_usuario_fk)
    {
        $fila_espera = fila_espera::find($rut_usuario_fk);
        return response()->json($fila_espera);
    }

    public function tomada($rut_usuario_fk)
    {
        $fila_espera = fila_espera::where('rut_usuario_fk',$rut_usuario_fk)->first();
        return response()->json($fila_espera);
    }
    
    public function update(Request $request, $rut_usuario_fk)
    {
        $fila_espera = fila_espera::find($rut_usuario_fk);
        $fila_espera -> update($request->all());
        return response()->json('fila modificada');
    }

    
    public function destroy($rut_usuario_fk)
    {
        $fila_espera = fila_espera::find($rut_usuario_fk);
        $fila_espera -> delete();
        return response()->json('fila borrado');
    }
}

