<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\agenda;

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
            'rut_admin_fk' ->input('admin123'),
            'rut_usuario_fk'=> $request->input('rut_usuario_fk'),
            'fecha'=> $request->input('fecha'),
            'hora'=> $request->input('hora'),
            'disponibilidad'=> $request->input('disponibilidad')
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