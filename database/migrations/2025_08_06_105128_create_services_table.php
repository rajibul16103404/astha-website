<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id(); // id bigint unsigned auto-increment primary key
            $table->string('service_name'); // VARCHAR for name
            $table->string('service_icon'); // VARCHAR for icon path or filename
            $table->string('service_image'); // VARCHAR for image path or filename
            $table->text('service_description'); // TEXT for longer description
            $table->string('service_button_text'); // VARCHAR for button text
            $table->timestamps(); // created_at and updated_at timestamp columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
