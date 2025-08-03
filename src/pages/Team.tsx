
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const Team = () => {
  const teamMemberStyles = [
    "bg-blue-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-amber-50",
  ];

  const TeamMember = ({ 
    name, 
    role, 
    image, 
    description,
    styleIndex = 0 
  }: { 
    name: string; 
    role: string; 
    image?: string; 
    description: string;
    styleIndex?: number;
  }) => (
    <AnimatedSection className={`rounded-lg shadow-lg overflow-hidden ${teamMemberStyles[styleIndex % teamMemberStyles.length]}`}>
      <div className="p-8 text-center">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 bg-white shadow">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-primary font-medium mb-4">{role}</div>
        <p className="text-gray-600">{description}</p>
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
              Our <span className="text-primary">Team</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Meet the talented individuals behind Astha Insight who bring expertise and passion to every project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Leadership</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TeamMember 
              name="Adnan Rahman" 
              role="Founder & CEO" 
              styleIndex={0}
              description="Visionary leader with over 10 years of experience in technology and innovation, driving Astha Insight's mission and growth." 
            />
            
            <TeamMember 
              name="Farah Khan" 
              role="CTO" 
              styleIndex={1}
              description="Experienced technologist with expertise in AI and blockchain, leading our technical strategy and innovation initiatives."
            />
            
            <TeamMember 
              name="Niloy Ahmed" 
              role="Head of Operations" 
              styleIndex={2}
              description="Operations expert ensuring efficient delivery of projects and exceptional client satisfaction through streamlined processes."
            />
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <h3 className="text-xl font-medium mb-2">AI/ML Developers</h3>
                <p className="text-gray-600">Experts in machine learning, natural language processing, and computer vision.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-xl font-medium mb-2">Web Developers</h3>
                <p className="text-gray-600">Frontend and backend specialists creating responsive, high-performance websites.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <h3 className="text-xl font-medium mb-2">Mobile App Developers</h3>
                <p className="text-gray-600">iOS and Android developers crafting native and cross-platform applications.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <h3 className="text-xl font-medium mb-2">Blockchain Engineers</h3>
                <p className="text-gray-600">Specialists in smart contracts, decentralized apps, and blockchain solutions.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Rafi Ahmed" 
              role="AI Team Lead" 
              styleIndex={0}
              description="Machine learning expert specializing in deep learning algorithms and computer vision." 
            />
            
            <TeamMember 
              name="Naima Khan" 
              role="Web Development Lead" 
              styleIndex={1}
              description="Full-stack developer with expertise in React, Node.js and responsive design principles."
            />
            
            <TeamMember 
              name="Tanvir Rahman" 
              role="Mobile Development Lead" 
              styleIndex={2}
              description="Experienced in building cross-platform mobile applications using React Native and Flutter."
            />
            
            <TeamMember 
              name="Sara Ahmed" 
              role="Blockchain Specialist" 
              styleIndex={3}
              description="Expert in blockchain architecture, smart contracts, and decentralized applications."
            />
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented individuals to join our team. If you're passionate about technology
                and innovation, we'd love to hear from you.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  View Open Positions
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
