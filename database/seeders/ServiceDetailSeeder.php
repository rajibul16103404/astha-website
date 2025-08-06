<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ServiceDetails;

class ServiceDetailSeeder extends Seeder
{
    public function run(): void
    {
        ServiceDetails::create([
            'service_id' => 1, // Assuming 'Web Development' ID = 1
            'service_details_name' => 'Machine Learning Models',
            'service_details_icon' => 'details_icons/ai_logo.jpg',
            'service_details_description' => 'Custom machine learning solutions for data analysis, prediction, and classification tasks.'
        ]);

        ServiceDetails::create([
            'service_id' => 1,
            'service_details_name' => 'Natural Language Processing',
            'service_details_icon' => 'details_icons/language_processing_logo.jpg',
            'service_details_description' => 'Text analysis, sentiment analysis, chatbots, and language understanding solutions.'
        ]);

        ServiceDetails::create([
            'service_id' => 1, // Graphic Design
            'service_details_name' => 'Predictive Analytics',
            'service_details_icon' => 'details_icons/Predictive_Analytics_logo.jpg',
            'service_details_description' => 'Advanced data analysis to identify patterns and predict future trends for better decision making.'
        ]);

        ServiceDetails::create([
            'service_id' => 2, // Assuming 'Web Development' ID = 1
            'service_details_name' => 'Responsive Web Design',
            'service_details_icon' => 'details_icons/responsiveWebDesign_logo.jpg',
            'service_details_description' => 'Beautiful, functional websites that work seamlessly across all devices and screen sizes.'
        ]);

        ServiceDetails::create([
            'service_id' => 2,
            'service_details_name' => 'Web Applications',
            'service_details_icon' => 'details_icons/webApplication_logo.jpg',
            'service_details_description' => 'Custom web applications with rich features, optimized performance, and intuitive interfaces.'
        ]);

        ServiceDetails::create([
            'service_id' => 2, // Graphic Design
            'service_details_name' => 'E-commerce Solutions',
            'service_details_icon' => 'details_icons/eCommerce_logo.jpg',
            'service_details_description' => 'Complete e-commerce websites with secure payment processing, inventory management, and user-friendly shopping experiences.'
        ]);

        ServiceDetails::create([
            'service_id' => 3, // Assuming 'Web Development' ID = 1
            'service_details_name' => 'Native Apps',
            'service_details_icon' => 'details_icons/native_apps_logo.jpg',
            'service_details_description' => 'High-performance native applications for iOS and Android platforms with platform-specific features.'
        ]);

        ServiceDetails::create([
            'service_id' => 3,
            'service_details_name' => 'Cross-Platform Apps',
            'service_details_icon' => 'details_icons/crossplateformappslogo.jpg',
            'service_details_description' => 'Cost-effective solutions that work across multiple platforms with a single codebase using React Native or Flutter.'
        ]);

        ServiceDetails::create([
            'service_id' => 3, // Graphic Design
            'service_details_name' => 'UI/UX Design',
            'service_details_icon' => 'details_icons/uiux_logo.jpg',
            'service_details_description' => 'Intuitive and visually appealing interfaces designed for exceptional user experiences.'
        ]);


        ServiceDetails::create([
            'service_id' => 4, // Assuming 'Web Development' ID = 1
            'service_details_name' => 'Smart Contracts',
            'service_details_icon' => 'details_icons/smartcontacticon.jpg',
            'service_details_description' => 'Development and auditing of secure, efficient smart contracts for various blockchain platforms.'
        ]);

        ServiceDetails::create([
            'service_id' => 4,
            'service_details_name' => 'Decentralized Applications',
            'service_details_icon' => 'details_icons/decentralineicon.jpg',
            'service_details_description' => 'Custom dApps with transparent operations and secure transactions on blockchain networks.'
        ]);

        ServiceDetails::create([
            'service_id' => 3, // Graphic Design
            'service_details_name' => 'Tokenization',
            'service_details_icon' => 'details_icons/tokenizationIcon.jpg',
            'service_details_description' => 'Creation and implementation of custom tokens and digital assets for various use cases.'
        ]);
    }
}