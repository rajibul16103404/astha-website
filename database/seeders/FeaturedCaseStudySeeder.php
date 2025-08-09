<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeaturedCaseStudySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('featured_case_studies')->insert([
            [
                'featured_heading' => 'AI-Powered Customer Support',
                'featured_name' => 'Client: E-commerce Platform',
                'featured_details' => 'Implemented an AI chatbot that reduced customer support costs by 35% while improving response times and satisfaction scores.',
                'featured_image' => 'featured_case_studies/case_image1.jpg',
                'key_results' => '35% cost reduction,24/7 customer support,90% customer satisfaction rating',
                'button_text' => 'Read Full Case Study',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'featured_heading' => 'Custom ERP System',
                'featured_name' => 'Client: Manufacturing Company',
                'featured_details' => 'Developed a tailored ERP system that streamlined operations across departments and provided real-time analytics for decision making.',
                'featured_image' => 'featured_case_studies/case_image2.jpg',
                'key_results' => '50% reduction in manual data entry,20% increase in productivity,Improved inventory management',
                'button_text' => 'Read Full Case Studt',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'featured_heading' => 'Blockchain Supply Chain Solution',
                'featured_name' => 'Client: Agricultural Exporter',
                'featured_details' => 'Created a blockchain-based tracking system to ensure transparency and authenticity throughout the supply chain.',
                'featured_image' => 'featured_case_studies/case_image3.jpg',
                'key_results' => 'Complete traceability from farm to table,40% reduction in disputes,Increased trust from end consumers',
                'button_text' => 'Read Full',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
