
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cpu, Database, Smartphone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <>
      {/* Hero Section with Animation */}
      <section className="relative min-h-screen hero-gradient flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:pr-8">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Innovative <span className="text-primary">AI & Tech Solutions</span> for Your Business
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We deliver cutting-edge AI, Web, Mobile, and Blockchain development services to transform your business and drive growth.
              </motion.p>
              
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  <Link to="/contact">
                    Get a Free Consultation
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10"
              >
                {/* Placeholder for animation - replace with your own animation */}
                <div className="relative bg-white rounded-lg shadow-xl p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0"></div>
                  <div className="relative z-10">
                    <div className="h-64 flex flex-col items-center justify-center space-y-4">
                      <motion.div 
                        animate={{ 
                          y: [0, -10, 0],
                        }} 
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4,
                          ease: "easeInOut" 
                        }}
                        className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center"
                      >
                        <Cpu className="h-12 w-12 text-primary" />
                      </motion.div>
                      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, delay: 0.5 }}
                          className="bg-primary h-full rounded-full"
                        ></motion.div>
                      </div>
                      <div className="bg-gray-100 w-full p-2 rounded text-center">
                        AI Processing...
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-blue-500/10 h-16 w-16 rounded-full"
                animate={{ 
                  y: [0, -15, 0],
                }} 
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-4 -left-4 bg-green-500/10 h-12 w-12 rounded-full"
                animate={{ 
                  y: [0, 15, 0],
                }} 
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </div>
          </div>
        </div>
        
        {/* Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,150.83,65.31,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Astha Insight</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="bg-primary/10 rounded-lg p-8">
                  <div className="relative z-10 bg-white shadow-lg rounded-lg p-6 -mt-12 -ml-12">
                    <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                      At Astha Insight, we're committed to helping businesses transform through innovative technology solutions. 
                      Our focus is on delivering quality, reliability, and measurable business outcomes.
                    </p>
                    <p className="text-gray-600">
                      With our team of experienced developers and cutting-edge technologies, we provide solutions that are tailored 
                      to meet the specific needs of your business.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team comprises skilled developers, designers, and AI specialists who bring years of experience to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">Innovative Solutions</h3>
                    <p className="text-gray-600">We stay ahead of the curve with the latest technologies and methodologies to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">Client-Focused</h3>
                    <p className="text-gray-600">Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              We offer a comprehensive range of technology services to help your business stay ahead in the digital era.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1} className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 mb-6">Custom AI solutions including machine learning models, computer vision, and natural language processing.</p>
              <Link to="/services#ai" className="text-primary font-medium flex items-center justify-center hover:underline">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">Responsive websites and web applications that deliver exceptional user experiences across all devices.</p>
              <Link to="/services#web" className="text-primary font-medium flex items-center justify-center hover:underline">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">App Development</h3>
              <p className="text-gray-600 mb-6">Native and cross-platform mobile applications for iOS and Android that engage your users.</p>
              <Link to="/services#app" className="text-primary font-medium flex items-center justify-center hover:underline">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Solutions</h3>
              <p className="text-gray-600 mb-6">Secure and transparent blockchain applications, smart contracts, and decentralized systems.</p>
              <Link to="/services#blockchain" className="text-primary font-medium flex items-center justify-center hover:underline">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </AnimatedSection>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8">
                Let's collaborate to create innovative solutions that drive growth and success for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-primary hover:bg-white hover:text-primary">
                  <Link to="/contact">
                    Let's Talk
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch With Us</h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Whether you have a question about our services, need a custom solution, or want to discuss your project requirements, 
                  we're here to help. Fill out the form and we'll get back to you shortly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+880 1234 567890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@asthainsight.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600">Rajshahi, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
