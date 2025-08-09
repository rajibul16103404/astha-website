<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductFeature extends Model
{
    protected $fillable = [
        'product_id',
        'product_feature_name',
        'product_feature_details'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
