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
        Schema::create('featured_case_studies', function (Blueprint $table) {
        $table->id();
        $table->string('featured_heading');
        $table->string('featured_name');
        $table->text('featured_details');
        $table->string('featured_image');
        $table->text('key_results'); // Comma separated values
        $table->string('button_text');
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('featured_case_studies');
    }
};
