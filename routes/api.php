<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceDetailsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/login", [LoginController::class, "login"])->name('login');
Route::post("/contact", [ContactController::class, "create"]);
Route::get("/services", [ServiceController::class, "index"]);
Route::get("/service-details", [ServiceDetailsController::class, "index"]);
Route::get("/homepage", [HomepageController::class, "index"]);

Route::middleware('auth:api')->group(function () {
    // Route::apiResource("/services", ServiceController::class);
});