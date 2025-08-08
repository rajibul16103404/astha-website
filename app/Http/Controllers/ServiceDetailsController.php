<?php

namespace App\Http\Controllers;
use App\Models\ServiceDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;


class ServiceDetailsController extends Controller
{
    public function index()
    {
        $details = ServiceDetails::with('service')->get();
        return response()->json($details);
    }

    public function create()
    {
        //
    }

    // ✅ Store new service detail
    public function store(Request $request)
    {
        $request->validate([
            'service_id' => 'required|exists:services,id',
            'service_details_name' => 'required|string|max:255',
            'service_details_description' => 'nullable|string',
            'service_details_icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $data = $request->only([
            'service_id',
            'service_details_name',
            'service_details_description'
        ]);

        if ($request->hasFile('service_details_icon')) {
            $data['service_details_icon'] = $request->file('service_details_icon')->store('details_icons', 'public');
        }

        $detail = ServiceDetail::create($data);
        $detail->load('service');

        if ($detail->service_details_icon) {
            $detail->service_details_icon = asset('storage/' . $detail->service_details_icon);
        }

        return response()->json([
            'message' => 'Service detail created successfully',
            'data' => $detail
        ], 201);
    }


    public function show1(ServiceDetail $service_detail)
    {
        return response()->json($service_detail);
    }

     // ✅ Show one service detail
    public function show($id)
    {
        $detail = ServiceDetail::with('service')->findOrFail($id);
        // Optional: Add full image URL
        if ($detail->service_details_icon) {
            $detail->service_details_icon = asset('storage/' . $detail->service_details_icon);
        }
        return response()->json($detail);
    }

    public function edit(ServiceDetail $serviceDetail)
    {
        //
    }

    // ✅ Update existing service detail
    public function update(Request $request, $id)
    {
        $detail = ServiceDetail::findOrFail($id);
        $request->validate([
            'service_id' => 'required|exists:services,id',
            'service_details_name' => 'required|string|max:255',
            'service_details_description' => 'nullable|string',
            'service_details_icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $data = $request->only([
            'service_id',
            'service_details_name',
            'service_details_description'
        ]);
        if ($request->hasFile('service_details_icon')) {
            if ($detail->service_details_icon) {
                Storage::disk('public')->delete($detail->service_details_icon);
            }
            $data['service_details_icon'] = $request->file('service_details_icon')->store('details_icons', 'public');
        }
        $detail->update($data);
        $detail->load('service');
        if ($detail->service_details_icon) {
            $detail->service_details_icon = asset('storage/' . $detail->service_details_icon);
        }
        return response()->json([
            'message' => 'Service detail updated successfully',
            'data' => $detail
        ]);
    }

    // ✅ Delete a service detail
    public function destroy($id)
    {
        $detail = ServiceDetail::findOrFail($id);
        if ($detail->service_details_icon) {
            Storage::disk('public')->delete($detail->service_details_icon);
        }
        $detail->delete();
        return response()->json([
            'message' => 'Service detail deleted successfully'
        ]);
    }
}

