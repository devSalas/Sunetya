import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Palette, Users, Code, ArrowRight } from 'lucide-react';
import { servicesContent, processContent, ctaSectionContent } from './content/siteContent';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={servicesContent.title}
            subtitle={servicesContent.subtitle}
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={getServiceIcon(index)}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={processContent.title}
            subtitle={processContent.subtitle}
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processContent.steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {ctaSectionContent.title}
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            {ctaSectionContent.subtitle}
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors flex items-center gap-2 mx-auto">
            {ctaSectionContent.button}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const getServiceIcon = (index: number) => {
  const icons = [
    <Palette className="w-12 h-12 text-purple-600" />,
    <Code className="w-12 h-12 text-purple-600" />,
    <Users className="w-12 h-12 text-purple-600" />
  ];
  return icons[index];
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center">
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-purple-600 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;