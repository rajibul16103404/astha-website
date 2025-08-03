
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Braces, Brain, ChartBar, Cloud, Code, Database, Globe, Lock, Smartphone, Terminal, Wand } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const Services = () => {
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
              Our <span className="text-primary">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Comprehensive technology solutions to transform your business and drive growth in the digital era
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI Development */}
      <section id="ai" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Brain className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">AI Development</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary/10 p-8">
                  <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Brain className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    Our AI development services help businesses leverage the power of artificial intelligence to gain insights, 
                    automate processes, and create intelligent applications that deliver real business value.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
                    <Link to="/contact">Talk to an AI Expert</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Machine Learning Models</h3>
                  </div>
                  <p className="text-gray-600">Custom machine learning solutions for data analysis, prediction, and classification tasks.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Book className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Natural Language Processing</h3>
                  </div>
                  <p className="text-gray-600">Text analysis, sentiment analysis, chatbots, and language understanding solutions.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <ChartBar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Predictive Analytics</h3>
                  </div>
                  <p className="text-gray-600">Advanced data analysis to identify patterns and predict future trends for better decision making.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section id="web" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Globe className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Web Development</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Responsive Web Design</h3>
                  </div>
                  <p className="text-gray-600">Beautiful, functional websites that work seamlessly across all devices and screen sizes.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Terminal className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Web Applications</h3>
                  </div>
                  <p className="text-gray-600">Custom web applications with rich features, optimized performance, and intuitive interfaces.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">E-commerce Solutions</h3>
                  </div>
                  <p className="text-gray-600">Complete e-commerce websites with secure payment processing, inventory management, and user-friendly shopping experiences.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="order-1 md:order-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary/10 p-8">
                  <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    Our web development team creates responsive, high-performance websites and web applications 
                    that deliver exceptional user experiences and help you achieve your business goals.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
                    <Link to="/contact">Start a Web Project</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* App Development */}
      <section id="app" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Smartphone className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Mobile App Development</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary/10 p-8">
                  <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Smartphone className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    We design and develop native and cross-platform mobile applications that provide seamless 
                    user experiences on iOS and Android devices, helping you engage with your customers wherever they are.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
                    <Link to="/contact">Discuss Your App Idea</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Native Apps</h3>
                  </div>
                  <p className="text-gray-600">High-performance native applications for iOS and Android platforms with platform-specific features.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Braces className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Cross-Platform Apps</h3>
                  </div>
                  <p className="text-gray-600">Cost-effective solutions that work across multiple platforms with a single codebase using React Native or Flutter.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Wand className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">UI/UX Design</h3>
                  </div>
                  <p className="text-gray-600">Intuitive and visually appealing interfaces designed for exceptional user experiences.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blockchain Solutions */}
      <section id="blockchain" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Database className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Blockchain Solutions</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Smart Contracts</h3>
                  </div>
                  <p className="text-gray-600">Development and auditing of secure, efficient smart contracts for various blockchain platforms.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Decentralized Applications</h3>
                  </div>
                  <p className="text-gray-600">Custom dApps with transparent operations and secure transactions on blockchain networks.</p>
                </div>

                <div className="service-card bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Terminal className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Tokenization</h3>
                  </div>
                  <p className="text-gray-600">Creation and implementation of custom tokens and digital assets for various use cases.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="order-1 md:order-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary/10 p-8">
                  <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Database className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    Our blockchain development services provide secure, transparent, and decentralized solutions
                    that help businesses streamline operations, reduce costs, and create new opportunities.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
                    <Link to="/contact">Explore Blockchain Solutions</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
                <p className="text-xl mb-8">
                  Contact us today to discuss your project requirements and get a free consultation.
                </p>
                <div className="flex space-x-4">
                  <Button asChild size="lg" variant="outline" className="border-white bg-primary text-white hover:bg-white hover:text-primary">
                    <Link to="/contact">
                      Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Request a Quote</h3>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
