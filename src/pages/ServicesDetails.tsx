
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Braces, Brain, ChartBar, Cloud, Code, Database, Globe, Lock, Smartphone, Terminal, Wand } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const ServicesAIDev = () => {
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
              <span className="text-primary">AI Development</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* AI Development */}
      <section id="ai" className="py-20">
        <div className="container mx-auto px-4">
          {/* <AnimatedSection>
            <div className="flex items-center mb-8">
              <Brain className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">AI Development</h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </AnimatedSection> */}

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
          </>
  );
};

export default ServicesAIDev;