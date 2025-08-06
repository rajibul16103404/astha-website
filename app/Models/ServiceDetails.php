<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceDetails extends Model
{
    protected $fillable = [
        'service_id',
        'service_details_name',
        'service_details_icon',
        'service_details_description'
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

}
