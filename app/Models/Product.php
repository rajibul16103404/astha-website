<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'product_name',
        'product_icon',
        'product_image',
        'product_heading',
        'product_details',
        'primary_button_text',
        'primary_button_url',
        'secondary_button_text',
        'secondary_button_url',
    ];

    public function features()
    {
        return $this->hasMany(ProductFeature::class);
    }
}
