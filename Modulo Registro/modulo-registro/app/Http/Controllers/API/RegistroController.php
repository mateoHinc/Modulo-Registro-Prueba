<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Registro;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function index()
    {
        return response()->json(Registro::with('turno')->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'fecha' => 'required|date',
            'maquina' => 'required',
            'proyecto' => 'required',
            'turno_id' => 'required|exists:turnos,id',
        ]);

        $registro = Registro::create($request->all());

        return response()->json($registro, 201);
    }

    public function filtrar(Request $request)
    {

        $request->validate([
            'turno_id' => 'required|exists:turnos,id'
        ]);

        $turnoId = (int) $request->turno_id;

        $registros = Registro::where('turno_id', $turnoId)->with('turno')->get();

        return response()->json($registros);
    }

    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
