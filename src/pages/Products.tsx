
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Brain, Check, Code, Database } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Products = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-primary">Products</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Innovative solutions designed to solve real-world problems and enhance business operations
            </motion.p>
          </div>
        </div>
      </section>

      {/* Okkhore Edu */}
      <section id="okkhore" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Book className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Okkhore Edu</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="rounded-lg shadow-xl overflow-hidden">
                {/* Placeholder for product screenshot */}
                <div className="bg-gray-200 h-[350px] flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-medium">Okkhore Edu Dashboard</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Educational Platform for Modern Learning</h3>
                <p className="text-gray-600 mb-8">
                  Okkhore Edu is a comprehensive learning management system designed to streamline education
                  delivery with advanced AI-powered features, interactive content, and analytics.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Personalized Learning Paths</h4>
                      <p className="text-gray-600">AI-driven custom learning journeys tailored to each student's needs and pace.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Interactive Content Library</h4>
                      <p className="text-gray-600">Rich multimedia content with quizzes, assignments, and collaborative tools.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Advanced Analytics</h4>
                      <p className="text-gray-600">In-depth insights into student performance and engagement with actionable recommendations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Multi-platform Support</h4>
                      <p className="text-gray-600">Accessible on web, mobile, and tablet devices for learning anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 flex flex-wrap gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Request Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust ISP */}
      <section id="trust-isp" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Database className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Trust ISP</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="order-2 md:order-1">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Complete ISP Management Solution</h3>
                <p className="text-gray-600 mb-8">
                  Trust ISP is an all-in-one platform for Internet Service Providers to manage their operations,
                  from customer billing to network monitoring, with an intuitive dashboard and powerful tools.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Automated Billing System</h4>
                      <p className="text-gray-600">Streamlined invoicing, payment tracking, and subscription management.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Network Monitoring</h4>
                      <p className="text-gray-600">Real-time monitoring of network performance with alerts for potential issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Customer Support Portal</h4>
                      <p className="text-gray-600">Ticket management system with customer self-service options.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Comprehensive Reporting</h4>
                      <p className="text-gray-600">Detailed analytics and reports for business intelligence and decision making.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 flex flex-wrap gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Try Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Features <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="order-1 md:order-2">
              <div className="rounded-lg shadow-xl overflow-hidden">
                {/* Placeholder for product dashboard */}
                <div className="bg-gray-200 h-[350px] flex items-center justify-center">
                  <div className="text-center">
                    <Code className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-medium">Trust ISP Dashboard</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-primary/90 text-white p-8 md:p-12">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold mb-6">Interested in our products?</h2>
                  <p className="text-lg mb-8">
                    Schedule a personalized demo to see how our products can help your organization.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white bg-primary hover:bg-white hover:text-primary">
                    <Link to="/contact">
                      Contact Us Now
                    </Link>
                  </Button>
                </AnimatedSection>
              </div>
              
              <div className="relative">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-white opacity-10">
                  <div className="w-full h-full" style={{ 
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", 
                    backgroundSize: "20px 20px" 
                  }}></div>
                </div>
                
                <div className="relative z-10 p-8 md:p-12 text-white">
                  <AnimatedSection delay={0.2}>
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                      <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                      <p className="mb-4">
                        Need something tailored to your specific business requirements?
                      </p>
                      <p className="mb-6">
                        We also develop custom products and solutions based on your unique needs.
                      </p>
                      <Button asChild className="bg-white text-primary hover:bg-white/90 w-full">
                        <Link to="/contact">
                          Discuss Your Requirements
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
