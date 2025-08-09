<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'service_name',
        'service_icon',
        'service_image',
        'service_description',
        'service_button_text'
    ];


    public function details()
    {
        return $this->hasMany(ServiceDetail::class);
    }

}