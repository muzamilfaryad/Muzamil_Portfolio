import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCube, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

export default function Portfolio3D() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateXVal = (y - centerY) / 10;
    const rotateYVal = (centerX - x) / 10;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const portfolioCards = [
    {
      icon: FaCube,
      title: '3D Interactive Design',
      description: 'Creating immersive user experiences with modern 3D graphics',
      color: 'from-blue-500 to-cyan-500',
      stats: '50+ Projects'
    },
    {
      icon: FaCode,
      title: 'Clean Architecture',
      description: 'Building scalable applications with maintainable code',
      color: 'from-purple-500 to-pink-500',
      stats: '100K+ Lines'
    },
    {
      icon: FaRocket,
      title: 'Performance First',
      description: 'Optimized applications that load in milliseconds',
      color: 'from-orange-500 to-red-500',
      stats: '99.9% Uptime'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation Driven',
      description: 'Implementing cutting-edge technologies and solutions',
      color: 'from-green-500 to-emerald-500',
      stats: '25+ Tech Stacks'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            3D Portfolio <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-gray-400 text-lg">Interactive 3D presentation of my work</p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {portfolioCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="glass rounded-2xl p-8 hover-glow group cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.color} mb-6`}>
                <card.icon className="text-4xl text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {card.description}
              </p>
              
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${card.color} text-white text-sm font-semibold`}>
                {card.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rotating Cube Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-64 h-64" style={{ perspective: '1000px' }}>
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cube Faces */}
              {[
                { transform: 'rotateY(0deg) translateZ(128px)', bg: 'from-blue-500 to-cyan-500', text: 'Frontend' },
                { transform: 'rotateY(90deg) translateZ(128px)', bg: 'from-green-500 to-emerald-500', text: 'Backend' },
                { transform: 'rotateY(180deg) translateZ(128px)', bg: 'from-purple-500 to-pink-500', text: 'Database' },
                { transform: 'rotateY(-90deg) translateZ(128px)', bg: 'from-orange-500 to-red-500', text: 'DevOps' },
                { transform: 'rotateX(90deg) translateZ(128px)', bg: 'from-yellow-500 to-amber-500', text: 'Cloud' },
                { transform: 'rotateX(-90deg) translateZ(128px)', bg: 'from-indigo-500 to-blue-500', text: 'API' }
              ].map((face, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full bg-gradient-to-br ${face.bg} opacity-80 flex items-center justify-center text-white font-bold text-2xl border-2 border-white/20`}
                  style={{ transform: face.transform, backfaceVisibility: 'hidden' }}
                >
                  {face.text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technology Ecosystem</h3>
          <div className="relative h-96 overflow-hidden">
            {[
              { name: 'React', x: '10%', y: '20%', delay: 0, color: '#61DAFB' },
              { name: 'Node.js', x: '70%', y: '15%', delay: 0.5, color: '#339933' },
              { name: 'MongoDB', x: '50%', y: '50%', delay: 1, color: '#47A248' },
              { name: 'Next.js', x: '20%', y: '70%', delay: 1.5, color: '#000000' },
              { name: 'TypeScript', x: '80%', y: '60%', delay: 2, color: '#3178C6' },
              { name: 'AWS', x: '40%', y: '30%', delay: 2.5, color: '#FF9900' },
              { name: 'Docker', x: '60%', y: '80%', delay: 3, color: '#2496ED' },
              { name: 'Express', x: '85%', y: '35%', delay: 3.5, color: '#000000' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  delay: tech.delay * 0.2,
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.5, zIndex: 10 }}
                className="absolute glass rounded-xl px-6 py-3 cursor-pointer hover-glow"
                style={{ left: tech.x, top: tech.y }}
              >
                <span 
                  className="font-bold text-sm"
                  style={{ color: tech.color === '#000000' ? '#ffffff' : tech.color }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
