<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class keterangan_status_tagihan_mitra extends Model
{
    use HasFactory;

    protected $table = 'keterangan_status_tagihan_mitra';

    protected $fillable = [
        'keterangan_status_tagihan_mitra'
    ];
}
