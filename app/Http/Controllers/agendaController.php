<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\agenda;
use Illuminate\Support\Facades\DB;

class agendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $agenda = agenda::all()->toArray();
        return array_reverse($agenda);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $agenda = new agenda([
            'rut_usuario_fk'=> $request->input('rut_usuario_fk'),
            'nombre' => $request ->input('nombre'),
            'apellido_pat' => $request ->input('apellido_pat'),
            'apellido_mat' => $request ->input('apellido_mat'),
            'fecha_nacimiento' => $request ->input('fecha_nacimiento'),
            'correo' => $request ->input('correo'),
            'telefono' => $request ->input('telefono'),
            'ciudad' => $request ->input('ciudad'),
            'motivo_consulta' => $request ->input('motivo_consulta'),
            'fecha'=> $request->input('fecha'),
            'hora'=> $request->input('hora')
        ]);
        $agenda->save();
        return response()->json('agenda creada');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_agenda)
    {
        $agenda = agenda::find($id_agenda);
        return response()->json($agenda);
    }

    public function agendada($rut_usuario_fk)
    {
        $agenda = agenda::where('rut_usuario_fk',$rut_usuario_fk)->first();
        return response()->json($agenda);
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
    public function update(Request $request, $id_agenda)
    {
        $agenda = agenda::find($id_agenda);
        $agenda -> update($request->all());
        return response()->json('agenda modificada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_agenda)
    {
        $agenda = agenda::find($id_agenda);
        $agenda -> delete();
        return response()->json('agenda borrada');
    }
}
