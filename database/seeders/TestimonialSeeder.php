<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Testimonial::create([
            'quote' => 'Astha Insight transformed our business with their AI solution. We have seen a 40% increase in efficiency and significantly improved customer satisfaction.',
            'author_name' => 'Ahmed Khan',
            'author_info' => 'CTO, TechVision Inc., TechVision Inc.',
            'author_image' => 'testimonials/testimonial_image_1.jpg'
        ]);

        Testimonial::create([
            'quote' => 'The web application developed by Astha Insight exceeded our expectations. The team was professional, responsive, and delivered a high-quality product on time and within budget.',
            'author_name' => 'Sarah Rahman',
            'author_info' => 'Marketing Director, GrowthMakers',
            'author_image' => 'testimonials/testimonial_image_2.jpg'
        ]);

        Testimonial::create([
            'quote' => 'The blockchain solution implemented by Astha Insight has revolutionized our supply chain operations, providing transparency and security that was previously impossible.',
            'author_name' => 'Michael Chen',
            'author_info' => 'Operations Head, Global Logistics Ltd.',
            'author_image' => 'testimonials/testimonial_image_3.jpg'
        ]);
    }
}
