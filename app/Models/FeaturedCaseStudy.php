<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeaturedCaseStudy extends Model
{
     protected $fillable = [
        'featured_heading',
        'featured_name',
        'featured_details',
        'featured_image',
        'key_results',
        'button_text',
    ];
}
