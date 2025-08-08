import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Brain, Book, ChartBar
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/services`);
        const servicesData = Array.isArray(res.data) ? res.data : res.data.data;
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading services...</div>;
  }

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

      {services.map((s, index) => (
        <section className="py-20" key={s.id}>
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="flex items-center mb-8">
                <img className="h-9 w-10 mr-4" src={`${IMAGE_URL}${s.service_icon}`} alt={s.service_name} />
                <h2 className="text-3xl md:text-4xl font-bold">{s.service_name}</h2>
              </div>
              <div className="w-20 h-1 bg-primary mb-8"></div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-primary/10 p-8">
                    <img src={`${IMAGE_URL}${s.service_image}`} alt={s.service_name} />
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{s.service_description}</p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
                      <Link to="/contact">{s.service_button_text}</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="space-y-6">
                  {s.details?.map(detail => (
                    <div key={detail.id} className="service-card bg-white p-6 rounded-lg shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <img src={`${IMAGE_URL}${detail.service_details_icon}`} alt={detail.service_details_name} className="h-6 w-6 object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold">{detail.service_details_name}</h3>
                      </div>
                      <p className="text-gray-600">{detail.service_details_description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

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
