<?php

namespace App\Http\Controllers;

use App\Models\ProductFeature;
use Illuminate\Http\Request;

class ProductFeatureController extends Controller
{
    public function index()
    {
        $features = ProductFeature::with('product')->get();
        return response()->json($features);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'product_feature_name' => 'required|string|max:255',
            'product_feature_details' => 'nullable|string',
        ]);

        $feature = ProductFeature::create($request->all());
        $feature->load('product');

        return response()->json([
            'message' => 'Feature created successfully',
            'data' => $feature
        ], 201);
    }

    public function show($id)
    {
        $feature = ProductFeature::with('product')->findOrFail($id);
        return response()->json($feature);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'product_feature_name' => 'required|string|max:255',
            'product_feature_details' => 'nullable|string',
        ]);
        $feature = ProductFeature::findOrFail($id);
        $feature->update($request->all());
        $feature->load('product');

        return response()->json([
            'message' => 'Feature updated successfully',
            'data' => $feature
        ]);
    }

    public function destroy($id)
    {
        $feature = ProductFeature::findOrFail($id);
        $feature->delete();

        return response()->json([
            'message' => 'Feature deleted successfully'
        ]);
    }
}
