<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class status_tagihan_mitra extends Model
{
    use HasFactory;

    protected $table = 'status_tagihan_mitra';

    protected $fillable = [
        'status_tagihan_mitra',
    ];
}
