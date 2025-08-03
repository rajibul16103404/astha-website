
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Astha Insight transformed our business with their AI solution. We've seen a 40% increase in efficiency and significantly improved customer satisfaction.",
      name: "Ahmed Khan",
      position: "CTO, TechVision Inc.",
      company: "TechVision Inc.",
    },
    {
      quote: "The web application developed by Astha Insight exceeded our expectations. The team was professional, responsive, and delivered a high-quality product on time and within budget.",
      name: "Sarah Rahman",
      position: "Marketing Director",
      company: "GrowthMakers",
    },
    {
      quote: "The blockchain solution implemented by Astha Insight has revolutionized our supply chain operations, providing transparency and security that was previously impossible.",
      name: "Michael Chen",
      position: "Operations Head",
      company: "Global Logistics Ltd.",
    },
  ];

  const caseStudies = [
    {
      title: "AI-Powered Customer Support",
      client: "E-commerce Platform",
      description: "Implemented an AI chatbot that reduced customer support costs by 35% while improving response times and satisfaction scores.",
      results: ["35% cost reduction", "24/7 customer support", "90% customer satisfaction rating"],
      image: "https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Custom ERP System",
      client: "Manufacturing Company",
      description: "Developed a tailored ERP system that streamlined operations across departments and provided real-time analytics for decision making.",
      results: ["50% reduction in manual data entry", "20% increase in productivity", "Improved inventory management"],
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Blockchain Supply Chain Solution",
      client: "Agricultural Exporter",
      description: "Created a blockchain-based tracking system to ensure transparency and authenticity throughout the supply chain.",
      results: ["Complete traceability from farm to table", "40% reduction in disputes", "Increased trust from end consumers"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const TestimonialCard = ({ quote, name, position, company, index }: any) => (
    <AnimatedSection delay={index * 0.1} className="bg-white rounded-lg shadow-lg p-8">
      <Quote className="h-10 w-10 text-primary opacity-20 mb-4" />
      <p className="text-gray-600 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
          <span className="font-bold text-primary">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
    </AnimatedSection>
  );

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
              Case <span className="text-primary">Studies</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              See how we've helped businesses achieve their goals with our innovative solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Case Studies</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className={index % 2 === 0 ? "" : "md:order-2"}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      {/* Placeholder for case study image */}
                      <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-xl font-medium">{study.title}</h3>
                          <p className="text-gray-600">{study.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 0 ? "" : "md:order-1"}>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-primary font-medium mb-4">Client: {study.client}</p>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      
                      <h4 className="font-semibold mb-4">Key Results:</h4>
                      <ul className="space-y-2 mb-6">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <a href="#">
                          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-lg shadow-lg overflow-hidden">
            <div className="p-12 text-center text-white">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
                <p className="text-xl mb-8">
                  Let us help you transform your business with innovative technology solutions.
                </p>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-primary hover:bg-white hover:text-primary">
                  <Link to="/contact">
                    Get Started Today
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
