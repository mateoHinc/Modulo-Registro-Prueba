<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\TurnoController;
use App\Http\Controllers\API\RegistroController;

// Api de Turnos
Route::get('/turnos', [TurnoController::class, 'index']);
Route::post('/turnos', [TurnoController::class, 'store']);

// Api de Registros
Route::get('/registros', [RegistroController::class, 'index']);
Route::post('/registros', [RegistroController::class, 'store']);
Route::get('/registros/filtrar', [RegistroController::class, 'filtrar']);
Route::post('/registros/filtrar', [RegistroController::class, 'filtrar']);
