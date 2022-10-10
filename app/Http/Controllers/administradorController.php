<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\administrador;

class administradorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $administrador = administrador::all()->toArray();
        return array_reverse($administrador);
    }

    public function store(Request $request)
    {
        $administrador = new administrador([
            'rut_admin' => $request -> input('rut_admin'),
            'contrasena' => $request -> input('contrasena'),
            'nombre' => $request -> input('nombre'),
            'apellido_pat' => $request -> input('apellido_pat'),
            'apellido_mat' => $request -> input('apellido_mat'),
            'tipo_admin' => $request -> input('tipo_admin')
        ]);
        $administrador -> save();

        return response()->json('admin creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($rut_admin)
    {
        $administrador = administrador::find($rut_admin);
        return response()->json($administrador);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $rut_admin)
    {
        $administrador = administrador::find($rut_admin);
        $administrador -> update($request->all());
        return response()->json('administrador modificado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($rut_admin)
    {
        $administrador = administrador::find($rut_admin);
        $administrador -> delete();
        return response()->json('administrador eliminado');
    }
}
