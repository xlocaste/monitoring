<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class status_rekon_mitra extends Model
{
    use HasFactory;

    protected $table = 'status_rekon_mitra';

    protected $fillable = [
        'status_rekon_mitra',
    ];
}
