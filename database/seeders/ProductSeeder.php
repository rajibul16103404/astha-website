<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create([
            'product_name' => 'Okkhore Edu',
            'product_icon' => 'product_icons/okkhoredu_icon.jpg',
            'product_image' => 'product_images/okkhor_edu_dashboard_image.jpg',
            'product_heading' => 'Educational Platform for Modern Learning',
            'product_details' => 'Okkhore Edu is a comprehensive learning management system designed to streamline education delivery with advanced AI-powered features, interactive content, and analytics.',
            'primary_button_text' => 'Request Demo',
            'primary_button_url' => 'https://www.youtube.com/',
            'secondary_button_text' => 'Learn More',
            'secondary_button_url' => 'https://www.youtube.com/'
        ]);

        Product::create([
            'product_name' => 'Trust ISP',
            'product_icon' => 'product_icons/icon2.jpg',
            'product_image' => 'product_images/image2.jpg',
            'product_heading' => 'Complete ISP Management Solution',
            'product_details' => 'Trust ISP is an all-in-one platform for Internet Service Providers to manage their operations, from customer billing to network monitoring, with an intuitive dashboard and powerful tools.',
            'primary_button_text' => 'Try Now',
            'primary_button_url' => 'https://www.youtube.com/',
            'secondary_button_text' => 'View Features',
            'secondary_button_url' => 'https://www.youtube.com/'
        ]);
    }
}
