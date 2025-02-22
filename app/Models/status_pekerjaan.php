<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class status_pekerjaan extends Model
{
    use HasFactory;

    protected $table = 'status_pekerjaan';

    protected $fillable = [
        'status_pekerjaan',
    ];
}
