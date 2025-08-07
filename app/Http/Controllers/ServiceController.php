<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;


class ServiceController extends Controller
{
       public function index()
    {
        $services = Service::all();
        return response()->json($services);
    }
    public function create()
    {
        $request->validate([
            'service_name' => 'required|string|max:255',
            'service_description' => 'nullable|string',
            'service_button_text' => 'nullable|string',
            'service_icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'service_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $data = $request->all();
        if ($request->hasFile('service_icon')) {
            $data['service_icon'] = $request->file('service_icon')->store('icons', 'public');
        }
        if ($request->hasFile('service_image')) {
            $data['service_image'] = $request->file('service_image')->store('images', 'public');
        }
        $service = Service::create($data);
        return response()->json($service, 201);
    }

    public function store(Request $request)
    {
        
    }

    public function show(Service $service)
    {
        return response()->json($service,201);
    }

    public function edit(Service $service)
    {
        //
    }

    public function update(Request $request, Service $service)
    {
        $request->validate([
            'service_name' => 'required|string|max:255',
            'service_description' => 'nullable|string',
            'service_button_text' => 'nullable|string',
            'service_icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'service_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $data = $request->all();
        // dd($data);
        // dd($request->service_icon);
        if ($request->hasFile('service_icon')) {
            if ($service->service_icon) Storage::disk('public')->delete($service->service_icon);
            $data['service_icon'] = $request->file('service_icon')->store('icons', 'public');
        }
        if ($request->hasFile('service_image')) {
            if ($service->service_image) Storage::disk('public')->delete($service->service_image);
            $data['service_image'] = $request->file('service_image')->store('images', 'public');
        }
        // dd('file pass');
        $service->update($data);
        // dd('updated');
        return response()->json($service);
    }

    public function destroy(Service $service)
    {
        // dd($service);
        if ($service->service_icon) Storage::disk('public')->delete($service->service_icon);
        if ($service->service_image) Storage::disk('public')->delete($service->service_image);
        $service->delete();
        return response()->json(['message' => 'Service deleted']);
    }

}
