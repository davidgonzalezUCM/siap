<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usuarios;

class usuariosController extends Controller
{
    
    public function index()
    {
        $usuarios = usuarios::all()->toArray();
        return array_reverse($usuarios);
    }

    public function store(Request $request)
    {
        $usuarios = new usuarios([
            'rut_usuario' => $request ->input('rut_usuario'),
            'contrasena' => $request ->input('contrasena'),
            'nombre' => $request ->input('nombre'),
            'apellido_pat' => $request ->input('apellido_pat'),
            'apellido_mat' => $request ->input('apellido_mat'),
            'fecha_nacimiento' => $request ->input('fecha_nacimiento'),
            'correo' => $request ->input('correo'),
            'telefono' => $request ->input('telefono'),
            'ciudad' => $request ->input('ciudad'),
            'motivo_consulta' => $request ->input('motivo_consulta'),
        ]);
        $usuarios ->save();
        return response()->json('usuario creado');
    }

    public function show($rut_usuario)
    {
        $usuarios = usuarios::find($rut_usuario);
        return response()->json($usuarios);
    }
    
    public function update(Request $request, $rut_usuario)
    {
        $usuarios = usuarios::find($rut_usuario);
        $usuarios -> update($request->all());
        return response()->json('usuario modificado');
    }

    
    public function destroy($rut_usuario)
    {
        $usuarios = usuarios::find($rut_usuario);
        $usuarios -> delete();
        return response()->json('usuario borrado');
    }
}
