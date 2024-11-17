import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Code } from "lucide-react";
import { heroContent } from "../content/siteContent";

export default function Hero() {
  return (
    <div className="relative pb-32 bg-gradient-to-br from-purple-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {heroContent.title.start}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                {heroContent.title.highlight}{" "}
              </span>
              {heroContent.title.end}
            </h1>
            <p className="mt-6 text-xl text-gray-600">{heroContent.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2">
                {heroContent.buttons.primary}
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors">
                {heroContent.buttons.secondary}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {heroContent.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={getServiceIcon(index)}
                title={service.title}
                description={service.description}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

const getServiceIcon = (index: number) => {
  const icons = [
    <Monitor className="w-8 h-8 text-purple-600" />,
    <Smartphone className="w-8 h-8 text-blue-500" />,
    <Code className="w-8 h-8 text-purple-600" />,
    <Monitor className="w-8 h-8 text-blue-500" />,
  ];
  return icons[index];
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);
