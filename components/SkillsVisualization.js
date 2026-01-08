import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNode, FaDatabase, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';

export default function SkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', level: 95, icon: FaReact, color: '#61DAFB', years: 8 },
        { name: 'Next.js', level: 90, icon: SiNextdotjs, color: '#000000', years: 5 },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6', years: 6 },
        { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: '#06B6D4', years: 4 },
        { name: 'Redux', level: 85, icon: SiRedux, color: '#764ABC', years: 7 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 95, icon: FaNode, color: '#339933', years: 10 },
        { name: 'Express.js', level: 95, icon: SiExpress, color: '#000000', years: 9 },
        { name: 'MongoDB', level: 90, icon: SiMongodb, color: '#47A248', years: 9 },
        { name: 'SQL', level: 80, icon: FaDatabase, color: '#336791', years: 7 }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'AWS', level: 85, icon: FaAws, color: '#FF9900', years: 6 },
        { name: 'Docker', level: 80, icon: FaDocker, color: '#2496ED', years: 5 },
        { name: 'Git', level: 95, icon: FaGitAlt, color: '#F05032', years: 10 }
      ]
    }
  ];

  const allSkills = skills.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory);

  // Calculate average skill level
  const averageLevel = Math.round(
    allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
            Skills <span className="gradient-text">Visualization</span>
          </h2>
          <p className="text-gray-400 text-lg">Interactive showcase of my technical expertise</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {['all', 'Frontend', 'Backend', 'DevOps'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white hover-glow'
                  : 'glass hover:bg-primary/20 text-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold gradient-text mb-2">{allSkills.length}</div>
            <div className="text-gray-400">Total Skills</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold gradient-text mb-2">{averageLevel}%</div>
            <div className="text-gray-400">Average Proficiency</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold gradient-text mb-2">6</div>
            <div className="text-gray-400">Months Experience</div>
          </motion.div>
        </div>

        {/* Skills Grid with Interactive Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-6 hover-glow group relative overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${skill.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon and Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon 
                      size={32} 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.years} years</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="font-bold text-white">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-darker rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}AA)` }}
                    />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ 
                      backgroundColor: `${skill.color}20`,
                      color: skill.color 
                    }}
                  >
                    {skill.category}
                  </span>
                  
                  {/* Proficiency Level */}
                  <span className="text-xs text-gray-400">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Skills Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Skills Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allSkills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#1f2937"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={skill.color}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 352" }}
                      whileInView={{ 
                        strokeDasharray: `${(skill.level / 100) * 352} 352` 
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <skill.icon size={32} style={{ color: skill.color }} />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
                <p className="text-gray-400 text-sm">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
