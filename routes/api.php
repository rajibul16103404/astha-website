<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/login", [LoginController::class, "login"])->name('login');
Route::post("/contact", [ContactController::class, "create"]);

Route::middleware('auth:api')->group(function () {
    Route::apiResource("/services", ServiceController::class);
});