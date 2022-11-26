<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\suscriptor;

class suscriptorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suscriptor = suscriptor::all()->toArray();
        return array_reverse($suscriptor);
    }

    public function store(Request $request)
    {
        $suscriptor = new suscriptor([
            'email' => $request->input('email')
        ]);
        $suscriptor -> save();
        return response()->json('suscriptor agregado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_suscriptor)
    {
        $suscriptor = suscriptor::find($id_suscriptor);
        return response()->json($suscriptor);
    }

    public function suscrito($email)
    {
        $suscriptor = suscriptor::where('email',$email)->first();
        return response()->json($suscriptor);
    }

    public function update(Request $request, $id_suscriptor)
    {
        $suscriptor = suscriptor::find($id_suscriptor);
        $suscriptor -> update($request->all());
        return response()->json('suscriptor modificado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_suscriptor)
    {
        $suscriptor = suscriptor::find($id_suscriptor);
        $suscriptor -> delete($id_suscriptor);
        return response()->json('suscriptor borrado');
    }
}
