<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $Product = Product::with("features")->get();
        return response()->json($Product);
        // return response()->json(Product::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required|string|max:255',
            'product_heading' => 'nullable|string',
            'product_details' => 'nullable|string',
            'primary_button_text' => 'nullable|string',
            'primary_button_url' => 'nullable|string',
            'secondary_button_text' => 'nullable|string',
            'secondary_button_url' => 'nullable|string',
            'product_icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'product_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $data = $request->all();

        if ($request->hasFile('product_icon')) {
            $data['product_icon'] = $request->file('product_icon')->store('product_icons', 'public');
        }

        if ($request->hasFile('product_image')) {
            $data['product_image'] = $request->file('product_image')->store('product_images', 'public');
        }

        $product = Product::create($data);
        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'product_name' => 'required|string|max:255',
            'product_heading' => 'nullable|string',
            'product_details' => 'nullable|string',
            'primary_button_text' => 'nullable|string',
            'primary_button_url' => 'nullable|string',
            'secondary_button_text' => 'nullable|string',
            'secondary_button_url' => 'nullable|string',
            'product_icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'product_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $data = $request->all();

        if ($request->hasFile('product_icon')) {
            if ($product->product_icon) Storage::disk('public')->delete($product->product_icon);
            $data['product_icon'] = $request->file('product_icon')->store('product_icons', 'public');
        }

        if ($request->hasFile('product_image')) {
            if ($product->product_image) Storage::disk('public')->delete($product->product_image);
            $data['product_image'] = $request->file('product_image')->store('product_images', 'public');
        }

        $product->update($data);
        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        if ($product->product_icon) Storage::disk('public')->delete($product->product_icon);
        if ($product->product_image) Storage::disk('public')->delete($product->product_image);

        $product->delete();
        return response()->json(['message' => 'Product deleted']);
    }
}
