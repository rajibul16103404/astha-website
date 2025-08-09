<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FeaturedCaseStudy;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class FeaturedCaseStudyController extends Controller
{
    // GET all
    public function index()
    {
        return response()->json(FeaturedCaseStudy::all());
    }

    // POST create
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'featured_heading' => 'required',
            'featured_name' => 'required',
            'featured_details' => 'required',
            'featured_image' => 'required|image',
            'key_results' => 'required',
            'button_text' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $imagePath = $request->file('featured_image')->store('featured_case_studies', 'public');

        $featured = FeaturedCaseStudy::create([
            'featured_heading' => $request->featured_heading,
            'featured_name' => $request->featured_name,
            'featured_details' => $request->featured_details,
            'featured_image' => $imagePath,
            'key_results' => $request->key_results,
            'button_text' => $request->button_text,
        ]);

        return response()->json($featured, 201);
    }

    // GET single
    public function show($id)
    {
        $featured = FeaturedCaseStudy::find($id);
        if (!$featured) return response()->json(['message' => 'Not Found'], 404);
        return response()->json($featured);
    }

    // PUT update
    public function update(Request $request, $id)
    {
        $featured = FeaturedCaseStudy::find($id);
        if (!$featured) return response()->json(['message' => 'Not Found'], 404);

        $validator = Validator::make($request->all(), [
            'featured_heading' => 'required',
            'featured_name' => 'required',
            'featured_details' => 'required',
            'key_results' => 'required',
            'button_text' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if ($request->hasFile('featured_image')) {
            if ($featured->featured_image && Storage::disk('public')->exists($featured->featured_image)) {
                Storage::disk('public')->delete($featured->featured_image);
            }

            $imagePath = $request->file('featured_image')->store('featured_case_studies', 'public');
            $featured->featured_image = $imagePath;
        }

        $featured->update([
            'featured_heading' => $request->featured_heading,
            'featured_name' => $request->featured_name,
            'featured_details' => $request->featured_details,
            'key_results' => $request->key_results,
            'button_text' => $request->button_text,
        ]);

        return response()->json($featured);
    }

    // DELETE
    public function destroy($id)
    {
        $featured = FeaturedCaseStudy::find($id);
        if (!$featured) return response()->json(['message' => 'Not Found'], 404);

        if ($featured->featured_image && Storage::disk('public')->exists($featured->featured_image)) {
            Storage::disk('public')->delete($featured->featured_image);
        }

        $featured->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }
}
