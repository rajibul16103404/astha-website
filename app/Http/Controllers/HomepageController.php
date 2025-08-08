<?php

namespace App\Http\Controllers;
use App\Models\Service;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index(){
        $service = Service::limit(4)->get();
        return response()->json([
            'service' => $service,
            'service2' => $service
        ],200);
    }
}
