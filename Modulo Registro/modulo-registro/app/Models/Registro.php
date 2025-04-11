<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    protected $fillable = ['fecha', 'maquina', 'proyecto', 'turno_id'];

    public function turno()
    {
        return $this->belongsTo(Turno::class);
    }
}
