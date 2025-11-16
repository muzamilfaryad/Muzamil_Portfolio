import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaFilter } from 'react-icons/fa';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment gateway integration (Stripe), shopping cart, user authentication, and admin dashboard. Built with Next.js for optimal performance.',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/muzamilfaryad',
      demo: '#',
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Order tracking'],
      year: '2024',
      industry: 'E-Commerce'
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'Advanced analytics platform for social media management with real-time data visualization, engagement metrics, automated reporting, and multi-platform integration (Twitter, Facebook, Instagram).',
      image: '/projects/analytics.jpg',
      tags: ['React', 'Express.js', 'MongoDB', 'Chart.js', 'Redis'],
      github: 'https://github.com/muzamilfaryad',
      demo: '#',
      features: ['Real-time analytics', 'Data visualization', 'Multi-platform', 'Automated reports'],
      year: '2024',
      industry: 'Social Media'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, prescription management, billing system, and telemedicine capabilities. HIPAA compliant with robust security.',
      image: '/projects/healthcare.jpg',
      tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Socket.io', 'AWS'],
      github: 'https://github.com/muzamilfaryad',
      demo: '#',
      features: ['Patient records', 'Telemedicine', 'Appointment system', 'HIPAA compliant'],
      year: '2023',
      industry: 'Healthcare'
    },
    {
      title: 'Real Estate Marketplace',
      description: 'Property listing platform with advanced search filters, virtual tours, mortgage calculator, agent dashboard, and real-time chat. Includes map integration and property comparison features.',
      image: '/projects/realestate.jpg',
      tags: ['Next.js', 'MongoDB', 'Google Maps API', 'WebRTC', 'Node.js'],
      github: 'https://github.com/muzamilfaryad',
      demo: '#',
      features: ['Virtual tours', 'Advanced search', 'Real-time chat', 'Mortgage calculator'],
      year: '2023',
      industry: 'Real Estate'
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with Kanban boards, Gantt charts, time tracking, team collaboration, file sharing, and automated notifications. Integrates with popular tools like Slack and GitHub.',
      image: '/projects/projectmgmt.jpg',
      tags: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Redux'],
      github: 'https://github.com/muzamilfaryad',
      demo: '#',
      features: ['Kanban boards', 'Time tracking', 'Team collaboration', 'Integrations'],
      year: '2024',
      industry: 'Productivity'
    },
  ];

  // Extract unique values for filters
  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tags))];
  const allYears = ['All', ...new Set(projects.map(p => p.year))];
  const allIndustries = ['All', ...new Set(projects.map(p => p.industry))];

  // Filter projects based on search and filters
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTech = selectedTech === 'All' || project.tags.includes(selectedTech);
    const matchesYear = selectedYear === 'All' || project.year === selectedYear;
    const matchesIndustry = selectedIndustry === 'All' || project.industry === selectedIndustry;
    
    return matchesSearch && matchesTech && matchesYear && matchesIndustry;
  });

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

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search projects, technologies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full glass-pro pl-14 pr-6 py-5 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              <FaFilter />
              <span>Filter by:</span>
            </div>
            
            {/* Technology Filter */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="glass-pro px-5 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer border border-white/10 hover:border-primary/30 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {allTechs.map(tech => (
                <option key={tech} value={tech} className="bg-[#0a0e27]">{tech}</option>
              ))}
            </select>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="glass-pro px-5 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer border border-white/10 hover:border-primary/30 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {allIndustries.map(industry => (
                <option key={industry} value={industry} className="bg-[#0a0e27]">{industry}</option>
              ))}
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="glass-pro px-5 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer border border-white/10 hover:border-primary/30 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {allYears.map(year => (
                <option key={year} value={year} className="bg-[#0a0e27]">{year}</option>
              ))}
            </select>

            {/* Results count */}
            <span className="ml-auto text-gray-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Showing <span className="gradient-text-pro font-bold">{filteredProjects.length}</span> of {projects.length} projects
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pro-card group relative"
            >
              {/* Project Image */}
              <div className="relative h-52 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {index + 1}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="status-badge text-xs px-4 py-2">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-pro btn-pro-primary py-3 rounded-xl flex items-center justify-center gap-2 group/btn text-sm"
                  >
                    <FaExternalLinkAlt size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold">Demo</span>
                  </a>
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
    </section>
  );
}
