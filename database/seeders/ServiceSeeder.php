<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        Service::create([
            'service_name' => 'AI Development',
            'service_icon' => 'ai_logo.jpg', // placeholder path (use dummy image in public/storage/icons)
            'service_image' => 'images/ai_image.jpg', // placeholder
            'service_description' => 'Our AI development services help businesses leverage the power of artificial intelligence to gain insights, automate processes, and create intelligent applications that deliver real business value.',
            'service_button_text' => 'Talk to an AI Expert',
        ]);

        Service::create([
            'service_name' => 'Web Development',
            'service_icon' => 'icons/webdevelopmentlogo.jpg',
            'service_image' => 'images/webdevelopment_image.jpg',
            'service_description' => 'Our web development team creates responsive, high-performance websites and web applications that deliver exceptional user experiences and help you achieve your business goals.',
            'service_button_text' => 'Start a Web Project',
        ]);

        Service::create([
            'service_name' => 'Mobile App Development',
            'service_icon' => 'icons/mobile_app_development_icon.jpg',
            'service_image' => 'images/mobile_app_image.jpg',
            'service_description' => 'We design and develop native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices, helping you engage with your customers wherever they are.',
            'service_button_text' => 'Discuss Your App Idea',
        ]);
        Service::create([
            'service_name' => 'Blockchain Solutions',
            'service_icon' => 'icons/blockchainicon.jpg',
            'service_image' => 'images/blockchainimage.jpg',
            'service_description' => 'Our blockchain development services provide secure, transparent, and decentralized solutions that help businesses streamline operations, reduce costs, and create new opportunities.',
            'service_button_text' => 'Blockchain Solutions',
        ]);
    }
}