import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaBriefcase, FaProjectDiagram, FaSmile, FaStar, FaAward, FaCode } from 'react-icons/fa';

function Counter({ from = 0, to, duration = 2, suffix = '', prefix = '' }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(count, to, { duration });

    return controls.stop;
  }, [count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = prefix + latest.toLocaleString() + suffix;
      }
    });

    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}

export default function TrustIndicators() {
  const indicators = [
    {
      icon: FaBriefcase,
      value: 10,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-blue-500 to-cyan-500',
      description: 'an excellence in MERN stack'
    },
    {
      icon: FaProjectDiagram,
      value: 150,
      suffix: '+',
      label: 'Projects Delivered',
      color: 'from-green-500 to-emerald-500',
      description: 'Successfully completed projects'
    },
    {
      icon: FaSmile,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'from-purple-500 to-pink-500',
      description: 'Based on client feedback'
    },
    {
      icon: FaStar,
      value: 4.9,
      prefix: '',
      suffix: '/5',
      label: 'Average Rating',
      color: 'from-yellow-500 to-orange-500',
      description: 'From verified clients'
    },
    {
      icon: FaAward,
      value: 25,
      suffix: '+',
      label: 'Awards & Certifications',
      color: 'from-red-500 to-rose-500',
      description: 'Industry recognized achievements'
    },
    {
      icon: FaCode,
      value: 99,
      suffix: '%',
      label: 'Code Quality Score',
      color: 'from-indigo-500 to-blue-500',
      description: 'Maintained across all projects'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-header mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trust <span className="gradient-text-pro">Indicators</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Proven track record of excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="stat-card group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${indicator.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${indicator.color} bg-opacity-15 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <indicator.icon className={`text-4xl bg-gradient-to-br ${indicator.color} bg-clip-text text-transparent group-hover:rotate-12 transition-transform duration-300`} />
                </div>
                
                <motion.div
                  className="stat-number mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Counter 
                    to={indicator.value} 
                    suffix={indicator.suffix} 
                    prefix={indicator.prefix}
                    duration={2.5}
                  />
                </motion.div>
                
                <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {indicator.label}
                </h4>
                
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {indicator.description}
                </p>

                {/* Progress bar for percentage indicators */}
                {indicator.suffix === '%' && (
                  <div className="mt-5">
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${indicator.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${indicator.color} relative`}
                      >
                        <div className="absolute inset-0 shimmer"></div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Quality Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Quality Badges</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://github.com/muzamilfaryad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-3 rounded-full hover-glow"
            >
              <img src="https://img.shields.io/badge/GitHub-100%20Quality-success?style=for-the-badge&logo=github" alt="GitHub Quality" />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-3 rounded-full"
            >
              <img src="https://img.shields.io/badge/Code%20Coverage-95%25-brightgreen?style=for-the-badge&logo=codecov" alt="Code Coverage" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-3 rounded-full"
            >
              <img src="https://img.shields.io/badge/Build-Passing-success?style=for-the-badge&logo=travis-ci" alt="Build Status" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-3 rounded-full"
            >
              <img src="https://img.shields.io/badge/Security-A%2B-blue?style=for-the-badge&logo=security" alt="Security Rating" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
