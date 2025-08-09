<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    // List all testimonials
    public function index()
    {
        $testimonials = Testimonial::all();

        // Add full URL for images
        $testimonials->transform(function ($item) {
            $item->author_image = $item->author_image ? asset('storage/testimonials' . $item->author_image) : null;
            return $item;
        });

        return response()->json($testimonials);
    }

    // Store new testimonial
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'quote' => 'required|string',
            'author_name' => 'required|string',
            'author_info' => 'required|string',
            'author_image' => 'nullable|image|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $imagePath = null;
        if ($request->hasFile('author_image')) {
            $imagePath = $request->file('author_image')->store('testimonials', 'public');
        }

        $testimonial = Testimonial::create([
            'quote' => $request->quote,
            'author_name' => $request->author_name,
            'author_info' => $request->author_info,
            'author_image' => $imagePath,
        ]);

        $testimonial->author_image = $testimonial->author_image ? asset('storage/' . $testimonial->author_image) : null;

        return response()->json($testimonial, 201);
    }

    // Show single testimonial
    public function show($id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['error' => 'Testimonial not found'], 404);
        }

        $testimonial->author_image = $testimonial->author_image ? asset('storage/' . $testimonial->author_image) : null;

        return response()->json($testimonial);
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return response()->json(['error' => 'Testimonial not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'quote' => 'required|string',
            'author_name' => 'required|string',
            'author_info' => 'required|string',
            'author_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // ✅ Delete old image if new image uploaded
        if ($request->hasFile('author_image')) {
            if ($testimonial->author_image && file_exists(public_path('testimonials/' . $testimonial->author_image))) {
                unlink(public_path('testimonials/' . $testimonial->author_image));
            }

            $image = $request->file('author_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('testimonials'), $imageName);
            $testimonial->author_image = $imageName;
        }

        // ✅ Update other fields
        $testimonial->quote = $request->quote;
        $testimonial->author_name = $request->author_name;
        $testimonial->author_info = $request->author_info;
        $testimonial->save();

        // ✅ Return full URL
        $testimonial->author_image = $testimonial->author_image ? asset('testimonials/' . $testimonial->author_image) : null;

        return response()->json($testimonial);
    }




    // Delete testimonial
    public function destroy($id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['error' => 'Testimonial not found'], 404);
        }

        if ($testimonial->author_image) {
            Storage::disk('public')->delete($testimonial->author_image);
        }

        $testimonial->delete();

        return response()->json(['message' => 'Testimonial deleted successfully']);
    }
}
