<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductFeature;

class ProductFeatureSeeder extends Seeder
{
    public function run(): void
    {
        // For Product ID 1 - SmartWatch Pro
        ProductFeature::create([
            'product_id' => 1,
            'product_feature_name' => 'Personalized Learning Paths',
            'product_feature_details' => 'AI-driven custom learning journeys tailored to each students needs and pace.'
        ]);

        ProductFeature::create([
            'product_id' => 1,
            'product_feature_name' => 'Interactive Content Library',
            'product_feature_details' => 'Rich multimedia content with quizzes, assignments, and collaborative tools'
        ]);

        ProductFeature::create([
            'product_id' => 1,
            'product_feature_name' => 'Advanced Analytics',
            'product_feature_details' => 'In-depth insights into student performance and engagement with actionable recommendations.'
        ]);

        // For Product ID 2 - Headphones
        ProductFeature::create([
            'product_id' => 1,
            'product_feature_name' => 'Multi-platform Support',
            'product_feature_details' => 'Accessible on web, mobile, and tablet devices for learning anytime, anywhere.'
        ]);

        ProductFeature::create([
            'product_id' => 2,
            'product_feature_name' => 'Automated Billing System',
            'product_feature_details' => 'Streamlined invoicing, payment tracking, and subscription management.'
        ]);

        // For Product ID 3 - Wireless Charger
        ProductFeature::create([
            'product_id' => 2,
            'product_feature_name' => 'Network Monitoring',
            'product_feature_details' => 'Real-time monitoring of network performance with alerts for potential issues.'
        ]);

        ProductFeature::create([
            'product_id' => 2,
            'product_feature_name' => 'Customer Support Portal',
            'product_feature_details' => 'Ticket management system with customer self-service options.'
        ]);
        ProductFeature::create([
            'product_id' => 2,
            'product_feature_name' => 'Comprehensive Reporting',
            'product_feature_details' => 'Detailed analytics and reports for business intelligence and decision making.'
        ]);
    }
}
