<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index(){
        $service = Service::limit(4)->get();
        $product = Product::with('features')->limit(4)->get();
        $testimonial = Testimonial::limit(5)->get();
        return response()->json([
            'service' => $service,
            'product' => $product,
            'testimonial' => $testimonial
        ],200);
    }
}
