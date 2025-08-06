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
        Schema::create('service_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('service_id'); // foreign key to services table
            $table->string('service_details_name');
            $table->string('service_details_icon');
            $table->text('service_details_description');
            $table->timestamps();

            // Set up foreign key constraint
            $table->foreign('service_id')
                  ->references('id')
                  ->on('services')
                  ->onDelete('cascade'); // delete details if service is deleted
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_details');
    }
};
