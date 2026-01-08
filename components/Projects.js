import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaTimes, FaStar, FaCode, FaRocket } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'DevConnect - Developer Job Matching Platform',
      description: 'A modern full-stack MERN application that connects developers with companies using an intelligent job matching system. Features smart matching algorithms, dual interfaces for developers and recruiters, real-time updates, and secure authentication.',
      image: '/projects/devconnect.jpg',
      tags: ['Node.js', 'MongoDB', 'React', 'Express.js', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/muzamilfaryad/-DevConnect---Developer-Job-Matching-Platform.git',
      demo: '#',
      features: ['Smart Matching Algorithm', 'Dual Interfaces', 'Real-time Updates', 'Secure Authentication', 'Responsive Design'],
      year: '2024',
      industry: 'Job Matching',
      detailedDescription: `DevConnect is a comprehensive job matching platform built with the MERN stack that intelligently connects software developers with recruiters. The platform features a sophisticated matching algorithm that analyzes developer skills, experience levels, and job requirements to suggest the best opportunities.

Key Features:
• Smart Matching: Algorithm-based job recommendations
• Dual Interfaces: Separate optimized experiences for developers and recruiters
• Real-time Updates: Live application status tracking
• Secure & Scalable: Production-ready with enterprise-level security
• Modern UI/UX: Clean, responsive design built with Tailwind CSS

Tech Stack:
• Backend: Node.js, Express.js, MongoDB, JWT, Bcrypt
• Frontend: React 18, React Router, Axios, Tailwind CSS
• Security: Helmet, CORS, Rate Limiting, Input Sanitization
• Performance: Compression, Caching, Optimized Queries`
    },
    {
      title: 'E-commerce Product Dashboard',
      description: 'A modern, feature-rich e-commerce dashboard built with React, showcasing advanced frontend development techniques including state management, performance optimization, and responsive design.',
      image: '/projects/ecommerce-dashboard.jpg',
      tags: ['React', 'JavaScript', 'CSS3', 'Context API', 'Custom Hooks'],
      github: 'https://github.com/muzamilfaryad/Ecommerce_Dashboard.git',
      demo: '#',
      features: ['Advanced Filtering', 'Shopping Cart', 'Wishlist', 'Product Comparison', 'Dark Mode'],
      year: '2024',
      industry: 'E-Commerce',
      detailedDescription: `This E-commerce Product Dashboard is a comprehensive React application that demonstrates modern frontend development practices. Built entirely with React hooks and functional components, it provides a complete shopping experience with cart management, wishlist functionality, product comparison, and advanced filtering capabilities.

Key Highlights:
• 100% Functional Components - Modern React with hooks
• No External UI Libraries - Custom components and styling
• Fully Responsive - Mobile-first design approach
• Type-Safe - Well-documented with JSDoc comments
• Performance Optimized - Memoization and lazy loading
• Persistent State - localStorage integration
• Dark Mode Support - Toggle between light and dark themes

Features:
• Product Management: 30 Products across 5 categories
• Advanced Filtering: Real-time search, category, price, rating filters
• Shopping Cart: Add/remove, quantity control, automatic calculations
• Wishlist: Save favorites with persistent storage
• Product Comparison: Compare up to 3 products side-by-side
• Modern UI: Loading skeletons, toast notifications, smooth animations

Tech Stack:
• React 18.2.0 with Hooks and Context API
• CSS Modules for scoped styling
• Custom hooks for reusable logic
• localStorage for data persistence
• Mobile-first responsive design`
    },
    {
      title: 'Diet Planner Application',
      description: 'A professional, cross-platform mobile and web application built with Flutter that empowers users to manage their nutritional goals, track calorie intake, create personalized meal plans, and discover recipes.',
      image: '/projects/diet-planner.jpg',
      tags: ['Flutter', 'Firebase', 'Dart', 'OpenFoodFacts API', 'TheMealDB API'],
      github: 'https://github.com/muzamilfaryad/Diet_Planner_Application.git',
      demo: '#',
      features: ['Nutrition Tracking', 'Barcode Scanning', 'Meal Planning', 'Recipe Discovery', 'AI Features'],
      year: '2024',
      industry: 'Health & Fitness',
      detailedDescription: `The Diet Planner Application is a production-ready Flutter app designed to help users achieve their health and nutrition goals through intelligent meal planning, comprehensive food tracking, and data-driven insights.

What Makes It Special:
• Zero Configuration Required - Works out of the box with public APIs
• Cloud Sync - Firebase integration for cross-device data synchronization
• Multi-Platform - iOS, Android, and Web support
• AI-Powered - Optional AI features for smart recommendations
• 2.8M+ Foods - Extensive food database via OpenFoodFacts
• 300+ Recipes - Curated recipes from TheMealDB
• Barcode Scanning - Quick food entry with camera scan
• Modern Design - Beautiful Material Design 3 UI with smooth animations

Core Features:
• Real-time Calorie & Macro Tracking with animated progress rings
• 7-Day History with achievement badges
• Smart Food Search powered by OpenFoodFacts (2.8M+ products)
• Barcode Scanning (mobile) with manual entry fallback
• Daily Meal Plans with 4 meal types and notes support
• Recipe Discovery with 300+ recipes, filtering, and YouTube links
• Firebase Authentication and Cloud Firestore sync
• Optional AI features: Nutrition Advisor, Food Parser, Recipe Generator

Tech Stack:
• Flutter 3.9+ with Dart 3.9.2+
• Firebase Core, Auth, Firestore
• Mobile Scanner for barcode scanning
• HTTP for API communication
• Cached Network Image for optimization
• Flutter DotEnv for environment variables
• Material Design 3 for modern UI`
    },
  ];

  // Extract unique values for filters - Removed

  // Filter projects based on search and filters - Removed, show all projects
  const displayedProjects = projects;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-header mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Featured <span className="gradient-text-pro">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Showcasing excellence in full-stack development with enterprise-grade solutions
          </p>
        </motion.div>

        {/* Search and Filters - Removed */}

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pro-card group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-52 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {index + 1}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaStar className="text-primary text-sm" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text-pro transition-all duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1.5 rounded-lg border border-primary/30 hover:border-primary/60 transition-colors font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        ✨ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs glass-pro px-3 py-1.5 rounded-lg text-gray-300 border border-white/10 hover:border-primary/50 hover:text-primary transition-all cursor-pointer font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-pro btn-pro-secondary py-3 rounded-xl flex items-center justify-center gap-2 group/btn text-sm"
                  >
                    <FaGithub size={18} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="font-semibold">Code</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex-1 btn-pro btn-pro-primary py-3 rounded-xl flex items-center justify-center gap-2 group/btn text-sm"
                  >
                    <FaStar size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="font-semibold">Read about project</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/muzamilfaryad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-semibold transition-all hover-glow"
          >
            View More Projects
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#0a0e27] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-6 border-b border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-3xl font-bold text-white/20">
                  <FaCode />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <FaRocket className="text-primary" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-lg border border-primary/30 text-sm font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              {selectedProject.detailedDescription && (
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Project Details
                  </h4>
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {selectedProject.detailedDescription}
                    </pre>
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-pro btn-pro-secondary py-3 rounded-xl flex items-center justify-center gap-2 group/btn"
                >
                  <FaGithub size={18} className="group-hover/btn:scale-110 transition-transform" />
                  <span className="font-semibold">View Source Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
