<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\FeaturedCaseStudyController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductFeatureController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceDetailsController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/login", [LoginController::class, "login"])->name('login');
Route::post("/contact", [ContactController::class, "create"]);
Route::get("/services", [ServiceController::class, "index"]);
Route::get("/service-details", [ServiceDetailsController::class, "index"]);
Route::get("/homepage", [HomepageController::class, "index"]);

Route::middleware('auth:api')->group(function () {
    Route::post('/services', [ServiceController::class, 'store']);
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{service}', [ServiceController::class, 'show']);
    Route::post('/services/{service}', [ServiceController::class, 'update']);
    Route::delete('/services/{service}', [ServiceController::class, 'destroy']);


    Route::get('/service-details', [ServiceDetailsController::class, 'index']);
    Route::get('/service-details/{id}', [ServiceDetailsController::class, 'show']);
    Route::post('/service-details', [ServiceDetailsController::class, 'store']);
    Route::post('/service-details/{id}', [ServiceDetailsController::class, 'update']); // Use POST instead of PUT
    Route::delete('/service-details/{id}', [ServiceDetailsController::class, 'destroy']);

    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{product}', [ProductController::class, 'show']);
    Route::post('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);

    Route::post('/product-features', [ProductFeatureController::class, 'store']);
    Route::get('/product-features', [ProductFeatureController::class, 'index']);
    Route::get('/product-features/{id}', [ProductFeatureController::class, 'show']);
    Route::post('/product-features/{id}', [ProductFeatureController::class, 'update']);
    Route::delete('/product-features/{id}', [ProductFeatureController::class, 'destroy']);


    // Testimonials APIs
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::post('/testimonials', [TestimonialController::class, 'store']);
    Route::get('/testimonials/{id}', [TestimonialController::class, 'show']);
    Route::post('/testimonials/{id}', [TestimonialController::class, 'update']);
    Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy']);


    Route::get('/featured-case-studies', [FeaturedCaseStudyController::class, 'index']);
    Route::post('/featured-case-studies', [FeaturedCaseStudyController::class, 'store']);
    Route::get('/featured-case-studies/{id}', [FeaturedCaseStudyController::class, 'show']);
    Route::post('/featured-case-studies/{id}', [FeaturedCaseStudyController::class, 'update']);
    Route::delete('/featured-case-studies/{id}', [FeaturedCaseStudyController::class, 'destroy']);
});